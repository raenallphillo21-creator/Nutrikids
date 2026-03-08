import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, RefreshCw, Minimize2 } from 'lucide-react';
import { nutriBot } from '../services/geminiService';
import { Message } from '../types';
import Markdown from 'react-markdown';

interface FloatingChatProps {
  isDarkMode?: boolean;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Halo Ayah & Bunda! Saya NutriBot. Ada yang bisa saya bantu mengenai kesehatan dan gizi si kecil hari ini?',
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
  }, [messages, isOpen]);

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
      console.error("Floating Chat Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Maaf Ayah/Bunda, NutriBot sedang mengalami kendala teknis. Silakan coba lagi nanti ya! 🙏',
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
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[400px] h-[500px] bg-white dark:bg-gray-800 rounded-[32px] shadow-2xl border border-orange-100 dark:border-gray-700 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#78B7BB] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">NutriBot AI</h4>
                <span className="text-[10px] text-white/80">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={clearChat} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Reset">
                <RefreshCw className="w-4 h-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fdfcfb] dark:bg-gray-900/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-orange-500 text-white rounded-tr-none' 
                    : msg.isError
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-tl-none'
                      : 'bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-none text-gray-700 dark:text-gray-200'
                }`}>
                  <div className="markdown-body">
                    <Markdown>{msg.content}</Markdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#78B7BB]" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">Mengetik...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya NutriBot..."
                className="flex-1 bg-gray-50 dark:bg-gray-900 border-none focus:ring-1 focus:ring-[#78B7BB] rounded-xl px-4 py-2 text-sm outline-none dark:text-gray-200"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#78B7BB] text-white p-2 rounded-xl hover:bg-[#66a1a5] transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400' : 'bg-[#78B7BB] text-white'} w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 relative`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default FloatingChat;
