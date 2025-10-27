
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <Link
        to="/wiki"
        className="bg-brand-cyan text-brand-dark font-bold py-3 px-5 rounded-full shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform"
      >
        Contribute
      </Link>
      <Link
        to="/token"
        className="bg-brand-purple text-white font-bold py-3 px-5 rounded-full shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform"
      >
        Buy GROKI
      </Link>
    </div>
  );
};

export default FloatingCTA;
