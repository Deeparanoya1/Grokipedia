
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <RouterNavLink to="/" className="text-2xl font-bold font-grotesk text-brand-cyan">
          Grokipedia
        </RouterNavLink>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-brand-light-text hover:text-brand-cyan transition-colors duration-300 ${isActive ? 'text-brand-cyan font-semibold' : ''}`
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block bg-brand-purple hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20">
            Buy GROKI
          </button>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
