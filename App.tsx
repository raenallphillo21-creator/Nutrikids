
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import BandungStats from './components/BandungStats';
import PreventionCard from './components/PreventionCard';
import AiAssistant from './components/AiAssistant';
import FloatingChat from './components/FloatingChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-[#1A1A1A] dark:text-[#F5F5F5]">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <InfoSection />
        <BandungStats isDarkMode={isDarkMode} />
        <PreventionCard />
        <AiAssistant />
      </main>
      <FloatingChat isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
};

export default App;
