
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold">Cegah Stunting Bersama Nutrikids</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#4A4A4A] dark:text-gray-100 leading-tight mb-6">
            Investasi Terbaik untuk <br />
            <span className="text-[#78B7BB] dark:text-[#4FD1C5]">Masa Depan</span> Si Kecil
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Setiap anak berhak tumbuh sehat dan cerdas. Nutrikids hadir mendampingi Ayah & Bunda 
            memahami bahaya stunting dan cara mencegahnya demi tumbuh kembang optimal balita kita.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#about" 
              className="w-full sm:w-auto bg-[#78B7BB] dark:bg-[#4FD1C5] text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#66a1a5] transition-all flex items-center justify-center shadow-lg shadow-teal-100 dark:shadow-none"
            >
              Pelajari Stunting <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#ai-assistant" 
              className="w-full sm:w-auto bg-white dark:bg-gray-800 text-[#78B7BB] dark:text-[#4FD1C5] border-2 border-[#78B7BB] dark:border-[#4FD1C5] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-teal-50 dark:hover:bg-gray-700 transition-all flex justify-center"
            >
              Tanya NutriBot AI
            </a>
          </div>
        </div>
        <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-none">
          <div className="absolute -z-10 w-full h-full bg-[#FFB347]/10 dark:bg-[#FFB347]/5 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200" 
            alt="Anak Sehat Ceria" 
            className="rounded-[32px] sm:rounded-[40px] shadow-2xl border-4 sm:border-8 border-white dark:border-gray-800 object-cover aspect-[4/3] w-full"
          />
          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl flex items-center space-x-3 sm:space-x-4 max-w-[200px] sm:max-w-xs animate-pulse">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 sm:p-3 rounded-xl sm:rounded-2xl text-green-600 dark:text-green-400">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base">1000 HPK</p>
              <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">Masa emas pertumbuhan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
