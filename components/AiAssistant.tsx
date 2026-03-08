
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, RefreshCw } from 'lucide-react';
import { nutriBot } from '../services/geminiService';
import { Message } from '../types';
import Markdown from 'react-markdown';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Halo Ayah & Bunda! Saya NutriBot, asisten gizi si kecil. Ada yang bisa saya bantu terkait tumbuh kembang atau menu makan anak hari ini?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await nutriBot.generateAdvice(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response || 'Maaf, saya tidak bisa memproses permintaan saat ini.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Waduh, sepertinya ada gangguan koneksi. Mohon coba kirim pesan lagi ya Ayah/Bunda! 🙏',
        timestamp: new Date(),
        isError: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    nutriBot.resetChat();
    setMessages([messages[0]]);
  };

  return (
    <section id="ai-assistant" className="py-20 bg-gradient-to-b from-[#FFFAF4] to-white dark:from-[#1A1A1A] dark:to-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/30 text-[#78B7BB] dark:text-[#4FD1C5] px-6 py-2 rounded-full mb-4">
            <Bot className="w-5 h-5" />
            <span className="font-bold">Didukung AI Pintar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100">Konsultasi dengan NutriBot</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Dapatkan saran pola hidup sehat, ide menu MPASI, dan panduan pencegahan stunting secara instan.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-[40px] shadow-2xl border border-orange-100 dark:border-gray-700 overflow-hidden flex flex-col h-[500px] sm:h-[600px]">
          {/* Header Chat */}
          <div className="bg-[#78B7BB] p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-2 rounded-2xl">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold leading-none mb-1">NutriBot AI</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-white/80">Siap membantu</span>
                </div>
              </div>
            </div>
            <button 
              onClick={clearChat}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              title="Bersihkan Chat"
            >
              <RefreshCw className="w-5 h-5 text-white/70" />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fdfcfb] dark:bg-gray-900/50"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' : 'bg-[#78B7BB] text-white'
                  }`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`p-4 rounded-3xl ${
                    msg.role === 'user' 
                      ? 'bg-orange-500 text-white rounded-tr-none' 
                      : msg.isError 
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-tl-none'
                        : 'bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-none text-gray-700 dark:text-gray-200'
                  }`}>
                    <div className="markdown-body text-sm leading-relaxed">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 items-center bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <Loader2 className="w-5 h-5 animate-spin text-[#78B7BB]" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">NutriBot sedang berpikir...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="flex gap-3 items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanyakan sesuatu, misal: 'Saran menu MPASI 8 bulan'..."
                className="flex-1 bg-gray-50 dark:bg-gray-900 border-none focus:ring-2 focus:ring-[#78B7BB] rounded-2xl px-6 py-4 text-gray-700 dark:text-gray-200 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#78B7BB] text-white p-4 rounded-2xl hover:bg-[#66a1a5] transition-all disabled:opacity-50 shadow-lg shadow-teal-100 dark:shadow-none"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-4 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3 h-3 inline mr-1" /> Nutrikids AI dapat membuat kekeliruan. Selalu verifikasi medis penting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
