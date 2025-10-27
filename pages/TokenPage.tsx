
import React from 'react';
import GlassCard from '../components/GlassCard';
import TokenomicsPieChart from '../components/charts/TokenomicsPieChart';
import { TOKENOMICS_DATA } from '../constants';

const TokenInfoCard: React.FC = () => (
  <GlassCard className="text-center md:text-left">
    <h2 className="text-3xl font-bold mb-6 font-grotesk text-center text-brand-cyan">GROKI Token (BEP-20)</h2>
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center p-3 rounded-lg bg-white/5">
        <span className="text-brand-secondary-text">Name:</span>
        <span className="font-bold">Grokipedia Meme Token</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-3 rounded-lg bg-white/5">
        <span className="text-brand-secondary-text">Network:</span>
        <span className="font-bold">BNB Smart Chain (BSC)</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-3 rounded-lg bg-white/5">
        <span className="text-brand-secondary-text">Total Supply:</span>
        <span className="font-bold">1,000,000,000 GROKI</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-3 rounded-lg bg-white/5">
        <span className="text-brand-secondary-text">Taxes:</span>
        <span className="font-bold">0% Buy / 0% Sell</span>
      </div>
       <div className="p-3 rounded-lg bg-white/5">
        <span className="text-brand-secondary-text block text-center md:text-left">Contract Address:</span>
        <span className="font-mono text-sm break-all block text-center md:text-left mt-1 text-brand-cyan">0xYOUR_CONTRACT_ADDRESS_PLACEHOLDER</span>
      </div>
    </div>
  </GlassCard>
);

const HowToBuyGuide: React.FC = () => {
  const steps = [
    { title: 'Set up a Wallet', description: 'Download MetaMask or Trust Wallet and create your wallet.' },
    { title: 'Add BSC Network', description: 'Configure your wallet to connect to the BNB Smart Chain.' },
    { title: 'Add BNB', description: 'Buy BNB on an exchange and send it to your wallet address.' },
    { title: 'Swap on a DEX', description: 'Go to a DEX like PancakeSwap, paste the GROKI contract address, and swap your BNB for GROKI.' },
  ];
  return (
    <GlassCard>
      <h2 className="text-3xl font-bold mb-6 font-grotesk text-center text-brand-purple">How to Buy GROKI</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-brand-purple rounded-full font-bold text-white">
              {index + 1}
            </div>
            <div>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-brand-secondary-text">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};


const TokenPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-grotesk">GROKI Tokenomics</h1>
        <p className="text-xl text-brand-secondary-text mt-2">The fuel for the Grokipedia ecosystem.</p>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <TokenInfoCard />
        </div>
        <div className="lg:col-span-3">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-4 font-grotesk text-center">Token Distribution</h2>
            <TokenomicsPieChart data={TOKENOMICS_DATA} />
          </GlassCard>
        </div>
      </div>
      <div className="mt-8">
        <HowToBuyGuide />
      </div>
    </div>
  );
};

export default TokenPage;
