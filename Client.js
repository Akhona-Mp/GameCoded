const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clientId = "user123"; // Assign a unique identifier per session

async function sendMessage(message) {
  const response = await fetch("http://localhost:3300/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientId, message }),
  });

  const data = await response.json();
  console.log("AI Says:", data.response);

  if (message.toLowerCase() === "exit") {
    rl.close(); // End session
    return;
  }

  promptUser(); // Keep chat running
}

function promptUser() {
  rl.question("You: ", (input) => {
    sendMessage(input);
  });
}

promptUser(); // Start conversation
