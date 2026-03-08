
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LabelList
} from 'recharts';
import { TrendingDown, MapPin, Users, Target } from 'lucide-react';

const DATA = [
  { year: '2021', prevalence: 26.4, label: '26.4%' },
  { year: '2022', prevalence: 19.4, label: '19.4%' },
  { year: '2023', prevalence: 16.3, label: '16.3%' },
  { year: '2024 (Target)', prevalence: 14.0, label: '14.0%' },
];

interface BandungStatsProps {
  isDarkMode?: boolean;
}

const BandungStats: React.FC<BandungStatsProps> = ({ isDarkMode }) => {
  return (
    <section id="stats" className="py-20 bg-white dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Data Wilayah: Kota Bandung</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-gray-100">Statistik Stunting Kota Bandung</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Pemerintah Kota Bandung terus berupaya menekan angka stunting melalui berbagai program inovatif. 
              Tren menunjukkan penurunan yang signifikan dalam beberapa tahun terakhir, menuju target nasional 14% di tahun 2024.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="bg-[#78B7BB]/10 dark:bg-[#78B7BB]/5 p-6 rounded-[32px] text-center">
              <TrendingDown className="w-8 h-8 text-[#78B7BB] mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">-10.1%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Penurunan (2021-2023)</div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-[32px] text-center">
              <Target className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">14%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Target Nasional 2024</div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFAF4] dark:bg-gray-800/40 rounded-[32px] sm:rounded-[48px] p-6 sm:p-8 md:p-12 border border-orange-100 dark:border-gray-700 soft-shadow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: isDarkMode ? '#9CA3AF' : '#6b7280', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    hide 
                    domain={[0, 30]}
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: 'none', 
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                      color: isDarkMode ? '#F3F4F6' : '#111827'
                    }}
                  />
                  <Bar 
                    dataKey="prevalence" 
                    radius={[10, 10, 10, 10]} 
                    barSize={60}
                  >
                    <LabelList 
                      dataKey="label" 
                      position="top" 
                      offset={10} 
                      style={{ fill: isDarkMode ? '#E5E7EB' : '#4A4A4A', fontSize: '14px', fontWeight: 'bold' }} 
                    />
                    {DATA.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === DATA.length - 1 ? '#FFB347' : '#78B7BB'} 
                        fillOpacity={index === DATA.length - 1 ? 0.8 : 1}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm shrink-0">
                  <Users className="w-6 h-6 text-[#78B7BB]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 dark:text-gray-100">Upaya Penurunan</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Melalui program seperti <strong>Ojek Makanan Balita (Omaba)</strong> dan <strong>Buruan Sae</strong>, 
                    Kota Bandung mengintegrasikan ketahanan pangan keluarga dengan intervensi gizi spesifik.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm shrink-0">
                  <TrendingDown className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 dark:text-gray-100">Tren Positif</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Prevalensi stunting di Kota Bandung konsisten menurun dari 26.4% di 2021 menjadi 16.3% di 2023 (Data Diskominfo Bandung). 
                    Ini menunjukkan efektivitas kolaborasi lintas sektor.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-orange-50 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#78B7BB]" />
                  Detail Angka Prevalensi
                </h4>
                <div className="space-y-3">
                  {DATA.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-50 dark:border-gray-700 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{item.year}</span>
                      <span className={`font-bold ${idx === DATA.length - 1 ? 'text-orange-500' : 'text-[#78B7BB] dark:text-[#4FD1C5]'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800/50 rounded-3xl border border-orange-50 dark:border-gray-700 italic text-sm text-gray-500 dark:text-gray-400">
                "Data berdasarkan Survei Status Gizi Indonesia (SSGI) dan laporan capaian kinerja Pemerintah Kota Bandung."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BandungStats;
