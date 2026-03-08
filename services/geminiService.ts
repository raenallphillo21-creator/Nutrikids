
import { GoogleGenAI } from "@google/genai";

export class NutriBotService {
  private chat: any = null;

  initChat() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'undefined') {
      console.error("Gemini API Key is missing or undefined. Please set GEMINI_API_KEY in environment variables.");
    }
    const ai = new GoogleGenAI({ apiKey: apiKey });
    this.chat = ai.chats.create({
      model: 'gemini-flash-latest',
      config: {
        systemInstruction: `
          Anda adalah "NutriBot", asisten pintar dari website Nutrikids. 
          Tugas Anda adalah membantu orang tua Indonesia memahami stunting dan memberikan saran pola hidup sehat untuk anak di bawah 5 tahun.
          
          ATURAN FORMATTING WAJIB:
          1. Gunakan Bahasa Indonesia yang ramah, hangat, dan sederhana (seperti berbicara dengan teman/kerabat).
          2. SETIAP saran gizi, ide menu, atau langkah-langkah harus ditulis dalam bentuk DAFTAR POIN (bullet points) menggunakan tanda '-' atau '*'.
          3. Gunakan spasi baris (line breaks) antar paragraf agar mudah dibaca di layar smartphone.
          4. Gunakan cetak tebal (bold) untuk kata-kata kunci penting.
          
          Prinsip Edukasi:
          - Selalu tekankan pentingnya 1000 Hari Pertama Kehidupan (HPK).
          - Berikan saran praktis tentang menu makanan (MPASI) yang kaya protein hewani.
          - Jika ada indikasi medis berat (anak sangat kurus/lemas), sarankan segera ke Puskesmas atau dokter.
          - Jangan memberikan dosis obat medis.
        `,
        temperature: 0.7,
      },
    });
  }

  async generateAdvice(userPrompt: string) {
    try {
      if (!this.chat) {
        this.initChat();
      }
      
      const response = await this.chat.sendMessage({ message: userPrompt });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }

  resetChat() {
    this.initChat();
  }
}

export const nutriBot = new NutriBotService();
