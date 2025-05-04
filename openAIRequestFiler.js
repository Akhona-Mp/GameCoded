class ChatBot {
  constructor() {
    const dotenv = require("dotenv");
    dotenv.config();

    const { AzureOpenAI } = require("openai");

    this.client = new AzureOpenAI({
      endpoint: "https://timot-ma8ot0mv-swedencentral.openai.azure.com/openai/deployments/gpt-4.1/chat/completions?api-version=2025-01-01-preview",
      apiKey: "CYnD9Is0oWLDyrUUF8zOdk61yYQHCS9FCaIqGqWkQcpbdINuyNSpJQQJ99BEACfhMk5XJ3w3AAAAACOGWuWF",
      apiVersion: "2025-01-01-preview",
      deployment: "gpt-4.1"
    });
  }

  async getAIResponse(userMessage, history = []) {
    // Append the current user message to the history passed in
    const conversation = [
      { role: "system", content: "You are a coding assistant helping users." },
      ...history,
      { role: "user", content: userMessage }
    ];

    const result = await this.client.chat.completions.create({
      messages: conversation,
      max_tokens: 800,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    const responseText = result.choices[0].message.content;

    console.log(`User Request: ${userMessage}`);
    console.log(`Server Response: ${responseText}`);

    return responseText;
  }
}

module.exports = ChatBot;

