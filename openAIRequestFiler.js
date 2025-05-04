const { AzureOpenAI } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

async function getAIResponse(userMessage) {
  const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] || "https://timot-ma8ot0mv-swedencentral.openai.azure.com/openai/deployments/gpt-4.1/chat/completions?api-version=2025-01-01-preview";
  const apiKey = process.env["AZURE_OPENAI_API_KEY"] || "CYnD9Is0oWLDyrUUF8zOdk61yYQHCS9FCaIqGqWkQcpbdINuyNSpJQQJ99BEACfhMk5XJ3w3AAAAACOGWuWF";
  const apiVersion = "2025-01-01-preview";
  const deployment = "gpt-4.1"; // Ensure this matches your deployment name

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  console.log(`User Request: ${userMessage}`); // Log only the user's message

  const result = await client.chat.completions.create({
    messages: [
      { role: "system", content: "You are a coding assistant helping kids ages 8-14 learn programming." },
      { role: "user", content: userMessage } // User's input
    ],
    max_tokens: 800,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null  
  });

  const responseText = result.choices[0].message.content;
  console.log(`Server Response: ${responseText}`); // Log only the AI response

  return responseText;
}

// Example usage

