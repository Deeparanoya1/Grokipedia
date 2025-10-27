
import React from 'react';
import GlassCard from '../components/GlassCard';
import { SOCIAL_LINKS } from '../constants';

const CommunityPage: React.FC = () => {
  const contributionGuidelines = [
    "Be respectful and constructive.",
    "Cite your sources. Verifiable information is key.",
    "Avoid personal opinions and speculation in articles.",
    "Use a neutral point of view (NPOV).",
    "Have fun and embrace the meme culture responsibly!",
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple">
          Join the Community
        </h1>
        <p className="text-xl text-brand-secondary-text mt-2">
          Grokipedia is built by people like you. Let's build the future of knowledge, together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
          <GlassCard className="text-center !p-8 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold font-grotesk">Twitter / X</h2>
            <p className="text-brand-secondary-text mt-2">For announcements & memes.</p>
          </GlassCard>
        </a>
        <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer">
          <GlassCard className="text-center !p-8 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold font-grotesk">Telegram</h2>
            <p className="text-brand-secondary-text mt-2">For community chat & updates.</p>
          </GlassCard>
        </a>
        <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
          <GlassCard className="text-center !p-8 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold font-grotesk">Discord</h2>
            <p className="text-brand-secondary-text mt-2">For contributors & developers.</p>
          </GlassCard>
        </a>
      </div>

      <GlassCard>
        <h2 className="text-3xl font-bold mb-6 font-grotesk text-center text-brand-purple">
          Contribution Guidelines
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {contributionGuidelines.map((rule, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-brand-cyan font-bold">✓</span>
              <span className="text-brand-secondary-text">{rule}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
};

export default CommunityPage;
