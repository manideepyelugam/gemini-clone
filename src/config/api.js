// src/api.js
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAc4K0L_6hZkSB--0KRp89z12BD2ZMy1JQ");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export default run;
