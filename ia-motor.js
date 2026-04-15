import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuração do motor da IA
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_KEY);

export default async function handler(req, res) {
  // 1. Só permite o método POST (envio de mensagem)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { prompt } = req.body;

  // 2. Verifica se o usuário enviou algum texto
  if (!prompt) {
    return res.status(400).json({ error: 'O texto da mensagem é obrigatório' });
  }

  try {
    // 3. Define o modelo (Gemini 1.5 Flash é o mais rápido)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      // Instrução de sistema para ele agir como seu suporte técnico
      systemInstruction: "Você é o assistente técnico da SNX Diesel Lab. Especialista em injeção eletrônica diesel, bombas injetoras e bicos injetores (Hilux, S10, etc). Seja prestativo e técnico.",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // 4. Devolve a resposta para o seu site
    return res.status(200).json({ text });

  } catch (error) {
    console.error("Erro na API do Google:", error);
    return res.status(500).json({ 
      error: "Erro ao processar a resposta da IA",
      details: error.message 
    });
  }
}
