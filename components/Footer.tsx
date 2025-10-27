
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark/50 border-t border-white/10 mt-20 py-10">
      <div className="container mx-auto px-6 text-center text-brand-secondary-text">
        <p className="font-bold text-brand-light-text mb-2">Grokipedia</p>
        <p className="max-w-2xl mx-auto text-sm mb-4">
          The content herein is for educational/entertainment purposes and is not investment advice. 'Elon Musk' and 'Grok' belong to their respective trademark/person owners; there is no official affiliation with Grokipedia.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">Twitter/X</a>
          <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">Telegram</a>
          <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">Discord</a>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Grokipedia Community. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
