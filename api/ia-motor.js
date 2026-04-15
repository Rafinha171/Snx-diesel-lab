import { GoogleGenerativeAI } from "@google/generative-ai";

// Esse é o motor de verdade
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Use POST');

  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Ele devolve o texto pronto para o seu HTML exibir
    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
