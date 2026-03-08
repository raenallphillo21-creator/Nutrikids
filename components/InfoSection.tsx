
import React from 'react';
import { IMPACTS, EXPERT_QUOTES } from '../constants';
import { Brain, Activity, UserCheck, CheckCircle, Quote } from 'lucide-react';
import Quiz from './Quiz';

const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100">Apa Itu Stunting?</h2>
          <div className="w-24 h-1 bg-[#FFB347] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Stunting adalah kondisi gagal tumbuh pada anak balita akibat kekurangan gizi kronis 
            terutama pada 1.000 Hari Pertama Kehidupan (HPK). Anak stunting memiliki tinggi badan 
            di bawah standar usianya dan perkembangan otak yang tidak maksimal.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-3xl max-w-2xl mx-auto border-l-4 border-orange-400 flex gap-4 items-start text-left">
            <Quote className="text-orange-400 shrink-0 w-6 h-6" />
            <p className="text-sm text-orange-800 dark:text-orange-200 italic font-medium">
              "{EXPERT_QUOTES.definition}"
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <Activity className="text-[#F98B8B]" /> Dampak pada Fisik
            </h3>
            <ul className="space-y-4">
              {IMPACTS.filter(i => i.category === 'physical').map((item, idx) => (
                <li key={idx} className="bg-red-50 dark:bg-red-900/10 p-4 rounded-2xl flex items-start gap-4">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <Brain className="text-blue-400" /> Dampak pada Kecerdasan
            </h3>
            <ul className="space-y-4">
              {IMPACTS.filter(i => i.category === 'intelligence').map((item, idx) => (
                <li key={idx} className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl flex items-start gap-4">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
              <li className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl flex items-start gap-4">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">Masa Depan Terhambat</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Potensi penghasilan di masa dewasa cenderung lebih rendah akibat daya saing yang berkurang.</p>
                  </div>
                </li>
            </ul>
          </div>
        </div>

        <div className="mb-20 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center border border-gray-100 dark:border-gray-700">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
            <Quote className="w-10 h-10 text-[#78B7BB]" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed text-center md:text-left">
            "{EXPERT_QUOTES.impact}"
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#78B7BB]/10 dark:bg-[#78B7BB]/5 p-8 rounded-[40px]">
              <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Pencegahan Sejak Kehamilan</h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
                Banyak yang mengira stunting terjadi karena faktor keturunan. Padahal penyebab utamanya adalah kurang asupan gizi dan infeksi berulang.
              </p>
              <div className="flex items-center gap-4 text-[#78B7BB] dark:text-[#4FD1C5] font-bold">
                <UserCheck className="w-6 h-6" />
                <span>Mari wujudkan Generasi Emas 2045.</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-[40px]">
               <img 
                 src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" 
                 alt="Balita Sehat Aktif" 
                 className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium italic">"Sehatkan si kecil, cerahkan masa depannya."</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Uji Pemahaman Ayah & Bunda</h3>
            </div>
            <Quiz />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
