const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ChatBot= require("./openAIRequestFiler");
// Catch uncaught errors
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Stubbed ChatBot class (you can replace this with OpenAI logic)

const app = express();
app.use(cors());
app.use(bodyParser.json());

const activeClients = {};
let chatBot;

try {
  chatBot = new ChatBot();
} catch (error) {
  console.error("Failed to initialize ChatBot:", error);
  process.exit(1);
}

// Handle chat messages
async function chatLoop(clientId, userMessage) {
  if (userMessage.toLowerCase() === "exit") {
    delete activeClients[clientId];
    console.log(`Client ${clientId} session closed.`);
    return "Session closed.";
  }

  try {
    const history = activeClients[clientId];
    const aiResponse = await chatBot.getAIResponse(userMessage, history);
    history.push({ role: "assistant", content: aiResponse });
    return aiResponse;
  } catch (error) {
    console.error("Error during AI response:", error);
    return "Server error.";
  }
}

// Test route to confirm server is running
app.get("/", (req, res) => {
  res.send("Server is alive!");
});

// Main chat route
app.post("/chat", async (req, res) => {
  const clientId = req.body.clientId;
  const userMessage = req.body.message;

  if (!clientId || typeof clientId !== "string") {
    return res.status(400).json({ error: "Invalid or missing client ID" });
  }
  if (!userMessage || typeof userMessage !== "string") {
    return res.status(400).json({ error: "Invalid or missing message" });
  }

  if (!activeClients[clientId]) {
    activeClients[clientId] = [];
  }

  activeClients[clientId].push({ role: "user", content: userMessage });

  const response = await chatLoop(clientId, userMessage);
  res.json({ response });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
