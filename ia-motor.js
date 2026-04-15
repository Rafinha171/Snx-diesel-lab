// ia-motor.js
const API_KEY = "QUl6YVN5QzlGdjhDODYyNVZKQm5UeWxZbl9TX1ItdGtCNmVJcXFz"; 

async function enviarDuvidaParaIA(pergunta) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Responde como mecânico diesel especialista: " + pergunta }] }]
            })
        });

        const data = await response.json();

        // Se o Google responder com erro (como chave bloqueada), ele avisa aqui
        if (data.error) {
            return "Erro do Google: " + data.error.message;
        }

        // Tenta extrair o texto de forma mais direta
        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error(error);
        return "O motor da IA falhou. Verifica se a chave foi bloqueada pelo GitHub.";
    }
}
