
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import TokenPage from './pages/TokenPage';
import CommunityPage from './pages/CommunityPage';
import FAQPage from './pages/FAQPage';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  
  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className={`min-h-screen font-sans bg-brand-dark text-brand-light-text`}>
      <div className="fixed inset-0 celestial-bg -z-10"></div>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wiki" element={<WikiPage />} />
          <Route path="/token" element={<TokenPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
