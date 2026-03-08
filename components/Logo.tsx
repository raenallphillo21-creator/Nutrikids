import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="n-gradient" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="35%" stopColor="#EC4899" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <filter id="shadow" x="0" y="0" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
          </filter>
        </defs>
        
        {/* Background Circle */}
        <circle cx="50" cy="50" r="46" className="fill-[#2EB7B3] dark:fill-[#14B8A6] transition-colors duration-300" />
        
        {/* Stylized Rounded 'N' */}
        <path
          d="M32 72C32 75 35 77 38 75L40 73.5C41 72.8 42 72.8 43 73.5L45 75C48 77 51 75 51 72V45C51 40 55 38 58 41L68 51C71 54 71 58 68 61L58 71C55 74 51 72 51 68"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-20"
        />
        
        <path
          d="M32 68V32C32 28 36 28 36 32V68C36 72 32 72 32 68ZM36 38L64 62V32C64 28 68 28 68 32V68C68 72 64 72 64 68L36 44"
          fill="url(#n-gradient)"
          className="stroke-white dark:stroke-gray-100"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
