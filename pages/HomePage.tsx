
import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { ROADMAP_DATA } from '../constants';

const Hero: React.FC = () => (
  <section className="text-center py-20 md:py-32">
    <div className="container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple animate-fade-in-up">
        Grokipedia
      </h1>
      <p className="text-xl md:text-2xl mt-4 text-brand-secondary-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Where Knowledge Becomes a Meme.
      </p>
      <p className="mt-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        The fun encyclopedia written by the community + GROKI token on BSC.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Link to="/wiki" className="w-full sm:w-auto bg-brand-cyan text-brand-dark font-bold py-3 px-8 rounded-full transition-transform hover:scale-105">
          Explore Wiki
        </Link>
        <Link to="/token" className="w-full sm:w-auto bg-brand-purple text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105">
          Get GROKI
        </Link>
        <a href="#" className="w-full sm:w-auto border-2 border-brand-secondary-text text-brand-secondary-text font-bold py-3 px-8 rounded-full transition-colors hover:bg-brand-secondary-text hover:text-brand-dark">
          Whitepaper
        </a>
      </div>
    </div>
  </section>
);

const FeaturedCategories: React.FC = () => {
    const categories = ['Crypto', 'Technology', 'Science', 'Culture', 'Space'];
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 font-grotesk">Featured Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map(category => (
                        <GlassCard key={category} className="text-center !p-6 transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-brand-cyan">{category}</h3>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyGrokipedia: React.FC = () => {
    const benefits = [
        { title: 'Community Driven', description: 'Written, verified, and owned by users like you. True knowledge democracy.' },
        { title: 'Fast Knowledge', description: 'Get straight-to-the-point, easily digestible information on complex topics.' },
        { title: 'Fun & Engaging', description: 'We blend serious information with meme culture to make learning enjoyable.' },
    ];
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 font-grotesk">Why Grokipedia?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map(benefit => (
                         <GlassCard key={benefit.title}>
                            <h3 className="text-2xl font-bold mb-4 text-brand-purple">{benefit.title}</h3>
                            <p className="text-brand-secondary-text">{benefit.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TokenSummary: React.FC = () => (
    <section className="py-16">
        <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-center mb-12 font-grotesk">GROKI Token Quick Facts</h2>
            <GlassCard className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    <div><p className="text-brand-secondary-text">Symbol</p><p className="font-bold text-xl text-brand-cyan">GROKI</p></div>
                    <div><p className="text-brand-secondary-text">Network</p><p className="font-bold text-xl">BSC</p></div>
                    <div><p className="text-brand-secondary-text">Total Supply</p><p className="font-bold text-xl">1B</p></div>
                    <div className="col-span-2 md:col-span-3"><p className="text-brand-secondary-text">Contract Address</p><p className="font-mono text-sm break-all">0xYOUR_CONTRACT_ADDRESS_PLACEHOLDER</p></div>
                </div>
            </GlassCard>
        </div>
    </section>
);

const RoadmapSummary: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 font-grotesk">Roadmap Ahead</h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-purple/30 hidden md:block"></div>
        {ROADMAP_DATA.map((item, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="hidden md:block w-1/2"></div>
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-purple rounded-full border-4 border-brand-dark"></div>
            <div className="w-full md:w-1/2">
              <GlassCard className={`${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                <p className="font-bold text-xl text-brand-cyan">{item.quarter} {item.year}</p>
                <p className="mt-2 text-brand-secondary-text">{item.description}</p>
              </GlassCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <WhyGrokipedia />
      <TokenSummary />
      <RoadmapSummary />
    </div>
  );
};

export default HomePage;
