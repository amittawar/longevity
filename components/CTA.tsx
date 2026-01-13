
import React from 'react';
import { Apple, Play } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-heading mb-6">
          OWN YOUR <br />
          <span className="text-yellow-400">PRIME.</span>
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-xl mx-auto">
          Start training for the next 40 years, not just the next 4 weeks.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <AppStoreButton platform="apple" />
          <AppStoreButton platform="google" />
        </div>
      </div>
    </section>
  );
};

const AppStoreButton: React.FC<{ platform: 'apple' | 'google' }> = ({ platform }) => {
  const isApple = platform === 'apple';
  return (
    <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 group">
      {isApple ? <Apple className="w-7 h-7" /> : <Play className="w-7 h-7 fill-white" />}
      <div className="text-left">
        <div className="text-[11px] uppercase font-black text-gray-400 group-hover:text-white transition-colors">
          {isApple ? 'Download on the' : 'Get it on'}
        </div>
        <div className="text-lg font-black tracking-tight leading-tight">
          {isApple ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </button>
  );
};
