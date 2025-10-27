
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import GlassCard from '../components/GlassCard';

interface AccordionItemProps {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 px-2"
      >
        <span className="text-lg font-semibold">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="p-4 text-brand-secondary-text">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-5xl font-bold font-grotesk">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-brand-secondary-text mt-2">
          Have questions? We have answers.
        </p>
      </div>

      <GlassCard className="max-w-4xl mx-auto !p-4 md:!p-8">
        {FAQ_DATA.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </GlassCard>
    </div>
  );
};

export default FAQPage;
