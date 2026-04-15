// ia-motor.js
const API_KEY = "AIzaSyDDLvYpwOc1WHX6s3jXZDJr7Yn2mEBVZyU"; // Mantém as aspas!

async function enviarDuvidaParaIA(pergunta) {
    // Usando v1beta que é a versão correta para o Gemini 1.5 Flash no momento
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const corpo = {
        contents: [{
            parts: [{
                text: "És um mestre mecânico diesel. Responde de forma prática: " + pergunta
            }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(corpo),
            headers: { 'Content-Type': 'application/json' }
        });
        
        const data = await response.json();

        if (data.error) {
            return "Erro na API: " + data.error.message;
        }

        if (data.candidates && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } 
        
        return "O sistema recebeu, mas não gerou resposta. Tenta outra vez.";
        
    } catch (error) {
        return "Erro de conexão. Verifica a internet.";
    }
}
