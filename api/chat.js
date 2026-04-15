export default async function handler(req, res) {
  // 1. Pega a chave que você salvou no painel do Vercel
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Chave API não configurada no Vercel." });
  }

  const { messages } = req.body;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // Instrução para a IA sempre se comportar como a sua empresa
        system_instruction: { 
          parts: [{ text: "Você é o Especialista em IA da SNX Diesel Lab. Sua missão é analisar dados de veículos diesel (sintomas e códigos OBD) e fornecer um diagnóstico técnico preciso, profissional e direto. Use termos técnicos como 'Common Rail', 'Pressão de Rail', 'VGT', etc. Formate a resposta usando tags HTML simples como <b>, <p> e <table> para que fique bonito no site." }] 
        },
        contents: messages
      })
    });

    const data = await response.json();
    
    // Envia a resposta da IA de volta para o seu site
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao consultar o Google Gemini." });
  }
}
