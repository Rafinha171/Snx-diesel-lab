// ia-motor.js
const API_KEY = "COLA_AQUI_A_TUA_CHAVE_NOVAMENTE"; // Garante que não há espaços antes ou depois

async function enviarDuvidaParaIA(pergunta) {
    // Mudamos para v1 (versão estável) em vez de v1beta
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const corpo = {
        contents: [{
            parts: [{
                text: "És um especialista em mecânica diesel. Ajuda com: " + pergunta
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

        // Se o Google devolver erro de chave ou permissão, vamos ver no console
        if (data.error) {
            console.error("Erro do Google:", data.error.message);
            return "Erro técnico: " + data.error.message;
        }

        if (data.candidates && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } 
        
        return "A IA ouviu, mas o motor parou. Tenta perguntar de outra forma.";
        
    } catch (error) {
        return "Erro de ligação. Verifica a internet ou a chave API.";
    }
}
