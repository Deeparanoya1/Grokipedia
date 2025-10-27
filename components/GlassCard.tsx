
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`glassmorphism rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/20 hover:border-brand-cyan/50 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
