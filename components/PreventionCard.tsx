
import React, { useState } from 'react';
import { PREVENTION_STEPS, EXPERT_QUOTES } from '../constants';
import { X, Info, Quote } from 'lucide-react';
import { PreventionItem } from '../types';

const PreventionCard: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<PreventionItem | null>(null);

  return (
    <section id="prevention" className="py-20 bg-[#FFFAF4] dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100">5 Langkah Cegah Stunting</h2>
          <div className="w-24 h-1 bg-[#78B7BB] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Terapkan pola asuh, pola makan, dan pola hidup sehat berikut setiap hari. Klik kartu untuk info detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {PREVENTION_STEPS.map((step, idx) => (
            <button 
              key={idx} 
              onClick={() => setSelectedStep(step)}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-[32px] soft-shadow border border-orange-50 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info className="w-4 h-4 text-gray-300 dark:text-gray-500" />
              </div>
              <div className={`${step.color} p-4 rounded-2xl mb-6`}>
                {step.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-100 leading-tight">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </button>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-[40px] max-w-lg w-full p-8 md:p-10 relative shadow-2xl animate-in zoom-in-95 duration-300">
              <button 
                onClick={() => setSelectedStep(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
              
              <div className={`${selectedStep.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                {selectedStep.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedStep.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {selectedStep.detail}
              </p>
              
              <button 
                onClick={() => setSelectedStep(null)}
                className="w-full bg-[#78B7BB] text-white py-4 rounded-2xl font-bold hover:bg-[#66a1a5] transition-all"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-[40px] p-6 sm:p-8 md:p-12 soft-shadow border border-orange-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 dark:text-gray-100">Pentingnya Sanitasi & Air Bersih</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Diare dan infeksi cacingan adalah "musuh tersembunyi" pertumbuhan anak. 
              Sekalipun anak makan banyak, jika sering diare karena air kotor, nutrisi akan terbuang percuma.
            </p>
            
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-3xl mb-8 border-l-4 border-teal-400 flex gap-4 items-start">
              <Quote className="text-teal-400 shrink-0 w-6 h-6" />
              <p className="text-sm text-teal-800 dark:text-teal-200 italic font-medium">
                "{EXPERT_QUOTES.sanitation}"
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                Cuci tangan pakai sabun sebelum makan.
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                Gunakan air bersih yang sudah dimasak/difilter.
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                Jaga kebersihan jamban dan lingkungan rumah.
              </li>
            </ul>
          </div>
          <div className="flex-1">
             <img 
               src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" 
               alt="Anak Sehat di Lingkungan Bersih" 
               className="rounded-3xl shadow-lg w-full object-cover aspect-[5/4]" 
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventionCard;
