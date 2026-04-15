import { GoogleGenerativeAI } from "@google/generative-ai";

// Aqui o código busca a chave que você cadastrou no Vercel (sem Base64)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_KEY);

export async function enviarMensagem(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Erro na IA:", error);
        return "Ops, tive um problema técnico. Tente novamente em instantes.";
    }
}
