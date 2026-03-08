import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#1A1A1A] py-20 px-4 border-t border-orange-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-12">
          <Logo className="w-14 h-14" />
          <div className="flex flex-col">
            <span className="text-3xl font-bold tracking-tight leading-none">
              <span className="text-[#7B3EAD] dark:text-[#A78BFA]">Nutri</span>
              <span className="text-[#FFB347]">kids</span>
            </span>
            <span className="text-xs text-[#2EB7B3] dark:text-[#4FD1C5] font-bold uppercase tracking-widest mt-1">
              Indonesia Sehat
            </span>
          </div>
        </div>

        <div className="w-full border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Nutrikids Indonesia. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-8 text-sm text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;