
import React, { useState } from 'react';
import { CheckCircle2, XCircle, Trophy, RefreshCcw, ArrowRight, HelpCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Apa penyebab utama terjadinya stunting pada anak?",
    options: [
      "Faktor keturunan (Genetik)",
      "Kurang gizi kronis & infeksi berulang",
      "Anak memang bertubuh kecil sejak lahir"
    ],
    correctAnswer: 1,
    explanation: "Stunting bukan karena faktor keturunan, melainkan akibat kekurangan gizi dalam waktu lama dan infeksi yang sering terjadi."
  },
  {
    id: 2,
    question: "Berapa lama periode emas '1000 Hari Pertama Kehidupan' (HPK)?",
    options: [
      "Sejak lahir sampai usia 2 tahun",
      "Sejak dalam kandungan sampai usia 1 tahun",
      "Sejak dalam kandungan sampai usia 2 tahun"
    ],
    correctAnswer: 2,
    explanation: "1000 HPK dihitung sejak masa kehamilan (270 hari) hingga anak berusia 2 tahun (730 hari)."
  },
  {
    id: 3,
    question: "Kapan sebaiknya anak mulai diberikan Makanan Pendamping ASI (MPASI)?",
    options: [
      "Setelah usia 4 bulan",
      "Setelah usia 6 bulan",
      "Setelah usia 1 tahun"
    ],
    correctAnswer: 1,
    explanation: "WHO menyarankan pemberian ASI eksklusif hingga 6 bulan, baru kemudian dilanjutkan dengan MPASI yang bergizi seimbang."
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-xl border border-orange-100 dark:border-gray-700 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold mb-2 dark:text-gray-100">Kuis Selesai!</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Ayah & Bunda berhasil menjawab <span className="font-bold text-[#78B7BB] dark:text-[#4FD1C5]">{score}</span> dari <span className="font-bold">{QUESTIONS.length}</span> pertanyaan dengan benar.
        </p>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-3xl mb-10 max-w-md mx-auto">
          <p className="text-orange-800 dark:text-orange-200 font-medium">
            {score === QUESTIONS.length 
              ? "Luar biasa! Ayah & Bunda sudah sangat paham tentang pencegahan stunting." 
              : "Bagus sekali! Mari terus belajar bersama Nutrikids demi kesehatan si kecil."}
          </p>
        </div>
        <button 
          onClick={resetQuiz}
          className="inline-flex items-center gap-2 bg-[#78B7BB] dark:bg-[#4FD1C5] text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#66a1a5] transition-all shadow-lg"
        >
          <RefreshCcw className="w-5 h-5" /> Ulangi Kuis
        </button>
      </div>
    );
  }

  const q = QUESTIONS[currentQuestion];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-xl border border-orange-100 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-xl text-[#78B7BB] dark:text-[#4FD1C5]">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-sm font-bold text-[#78B7BB] dark:text-[#4FD1C5] uppercase tracking-wider">Kuis Pemahaman</span>
            <p className="text-xs text-gray-400 dark:text-gray-500">Pertanyaan {currentQuestion + 1} dari {QUESTIONS.length}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {QUESTIONS.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                idx === currentQuestion ? 'bg-[#78B7BB] dark:bg-[#4FD1C5]' : idx < currentQuestion ? 'bg-teal-200 dark:bg-teal-900/50' : 'bg-gray-100 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 leading-tight">
        {q.question}
      </h3>

      <div className="space-y-4 mb-10">
        {q.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionSelect(idx)}
            className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
              selectedOption === idx 
                ? isAnswered 
                  ? idx === q.correctAnswer ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-[#78B7BB] dark:border-[#4FD1C5] bg-teal-50 dark:bg-teal-900/20 shadow-md'
                : 'border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-800 hover:bg-teal-50/30 dark:hover:bg-teal-900/10'
            }`}
          >
            <span className={`font-medium ${selectedOption === idx ? 'text-gray-900 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400'}`}>
              {option}
            </span>
            {isAnswered && idx === q.correctAnswer && (
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
            )}
            {isAnswered && selectedOption === idx && idx !== q.correctAnswer && (
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
            )}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-3xl mb-8 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-teal-900 dark:text-teal-200 text-sm leading-relaxed">
            <span className="font-bold">Tahukah Ayah/Bunda?</span> {q.explanation}
          </p>
        </div>
      )}

      <div className="flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleCheckAnswer}
            disabled={selectedOption === null}
            className="w-full sm:w-auto bg-[#78B7BB] dark:bg-[#4FD1C5] text-white dark:text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-[#66a1a5] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            Periksa Jawaban
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full sm:w-auto bg-[#FFB347] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#e69e3a] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            {currentQuestion + 1 === QUESTIONS.length ? 'Lihat Hasil' : 'Pertanyaan Selanjutnya'} <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
