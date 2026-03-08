import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Stunting', href: '#about' },
    { name: 'Statistik', href: '#stats' },
    { name: 'Pencegahan', href: '#prevention' },
    { name: 'NutriBot AI', href: '#ai-assistant' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF4]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md border-b border-orange-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Logo className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight leading-none">
                <span className="text-[#7B3EAD] dark:text-[#A78BFA]">Nutri</span>
                <span className="text-[#FFB347]">kids</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#2EB7B3] dark:text-[#4FD1C5] font-bold uppercase tracking-widest leading-none mt-1">
                Wujudkan Generasi Emas Bebas Stunting
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-[#7B3EAD] dark:hover:text-[#A78BFA] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:scale-110 transition-all"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1A1A1A] border-b border-gray-100 dark:border-gray-800 py-8 px-6 space-y-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-[#7B3EAD] dark:hover:text-[#A78BFA] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold mb-4">Nutrikids Indonesia</p>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-[#78B7BB]">
                 <Logo className="w-6 h-6" />
               </div>
               <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Wujudkan Generasi Emas Bebas Stunting</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;