export default async function handler(req, res) {
  const { messages } = req.body;
  const apiKey = process.env.GEMINI_API_KEY; // O Vercel pega a chave daqui, escondido!

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: "Você é o SNX Assistant, especialista em injeção diesel. Use tabelas e seja técnico." }] },
      contents: messages
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
