// Configuração da IA
const API_KEY = "COLA_AQUI_A_TUA_CHAVE_QUE_COPIASTE"; 

async function enviarDuvidaParaIA(pergunta) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const corpo = {
        contents: [{
            parts: [{
                text: "Age como um mestre mecânico diesel experiente. Ajuda com esta dúvida técnica de forma clara: " + pergunta
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
        
        // Verifica se a resposta chegou corretamente
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "A IA recebeu a pergunta, mas não conseguiu gerar uma resposta. Tenta reformular.";
        }
    } catch (error) {
        return "Erro de ligação: Verifica se a tua chave de API está correta.";
    }
}
