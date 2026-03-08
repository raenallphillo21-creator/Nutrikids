import React from 'react';
import { 
  Heart, 
  Baby, 
  Apple, 
  ShieldCheck, 
  Sparkles, 
  Utensils, 
  Droplets, 
  Stethoscope,
  Brain,
  TrendingUp,
  Activity
} from 'lucide-react';
import { PreventionItem, ImpactItem } from './types';

export const COLORS = {
  primary: '#78B7BB', // Soft Teal
  secondary: '#FFB347', // Soft Orange
  accent: '#F98B8B', // Soft Coral
  brandPurple: '#7B3EAD', // Deep Purple from Logo
  background: '#FFFAF4',
  text: '#4A4A4A',
};

export const PREVENTION_STEPS: PreventionItem[] = [
  {
    title: 'Gizi Seimbang',
    description: 'Pastikan ibu hamil dan balita mendapatkan nutrisi lengkap dari protein hewan, sayur, dan buah.',
    icon: <Apple className="w-6 h-6" />,
    color: 'bg-green-100 text-green-600',
    detail: 'Menurut Kemenkes RI, gizi seimbang harus mencakup karbohidrat, protein (terutama hewani), lemak, vitamin, dan mineral. Protein hewani sangat krusial karena mengandung asam amino esensial yang lebih lengkap untuk pertumbuhan tulang dan otak anak.'
  },
  {
    title: 'ASI Eksklusif',
    description: 'Berikan ASI saja selama 6 bulan pertama untuk membangun daya tahan tubuh alami si kecil.',
    icon: <Baby className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600',
    detail: 'WHO merekomendasikan ASI eksklusif selama 6 bulan karena ASI mengandung antibodi yang tidak dimiliki susu formula. ASI adalah nutrisi terbaik yang dirancang khusus for sistem pencernaan bayi yang masih sensitif.'
  },
  {
    title: 'MPASI Tepat',
    description: 'Berikan makanan pendamping ASI yang padat nutrisi dan bervariasi setelah usia 6 bulan.',
    icon: <Utensils className="w-6 h-6" />,
    color: 'bg-orange-100 text-orange-600',
    detail: 'Ikatan Dokter Anak Indonesia (IDAI) menekankan pentingnya MPASI yang mengandung gizi makro dan mikro. Mulailah dengan tekstur yang sesuai usia dan pastikan kebersihan alat makan terjaga untuk menghindari infeksi.'
  },
  {
    title: 'Sanitasi Bersih',
    description: 'Lingkungan yang bersih mencegah infeksi berulang yang bisa menghambat penyerapan gizi.',
    icon: <Droplets className="w-6 h-6" />,
    color: 'bg-teal-100 text-teal-600',
    detail: 'Penelitian menunjukkan bahwa sanitasi yang buruk berkontribusi hingga 60% pada kejadian stunting. Akses air bersih dan jamban sehat sangat penting untuk memutus rantai penularan penyakit diare dan kecacingan.'
  },
  {
    title: 'Cek Kesehatan',
    description: 'Rutin ke Posyandu atau dokter untuk memantau grafik pertumbuhan dan imunisasi lengkap.',
    icon: <Stethoscope className="w-6 h-6" />,
    color: 'bg-pink-100 text-pink-600',
    detail: 'Pemantauan rutin di Posyandu memungkinkan deteksi dini "growth faltering" atau gagal tumbuh. Intervensi yang dilakukan sebelum usia 2 tahun memiliki tingkat keberhasilan yang jauh lebih tinggi dalam mencegah stunting permanen.'
  },
];

export const IMPACTS: ImpactItem[] = [
  {
    title: 'Pertumbuhan Terhambat',
    description: 'Tinggi badan anak lebih pendek dibandingkan standar usianya (kerdil).',
    category: 'physical',
  },
  {
    title: 'Daya Tahan Lemah',
    description: 'Anak lebih mudah sakit karena sistem imun tidak berkembang optimal.',
    category: 'physical',
  },
  {
    title: 'Kecerdasan Rendah',
    description: 'Perkembangan otak tidak maksimal, menyebabkan kesulitan belajar di masa sekolah.',
    category: 'intelligence',
  },
  {
    title: 'Risiko Penyakit',
    description: 'Meningkatkan risiko diabetes dan obesitas di masa dewasa.',
    category: 'physical',
  },
];

export const EXPERT_QUOTES = {
  definition: "Menurut WHO, stunting adalah gangguan pertumbuhan dan perkembangan yang dialami anak-anak akibat gizi buruk, infeksi berulang, dan stimulasi psikososial yang tidak memadai.",
  impact: "Pakar kesehatan masyarakat menekankan bahwa dampak stunting tidak hanya pada fisik, tetapi juga pada produktivitas ekonomi negara di masa depan akibat penurunan kualitas sumber daya manusia.",
  sanitation: "Ahli sanitasi menyatakan bahwa 'Water, Sanitation, and Hygiene' (WASH) adalah pilar ketiga pencegahan stunting setelah pola makan dan pola asuh."
};
