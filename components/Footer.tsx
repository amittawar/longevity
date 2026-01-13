
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#101010]" id="app_store">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-black rounded-full border-t-transparent"></div>
          </div>
        </div>

        <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-white">Privacy policy</a>
          <a href="#" className="hover:text-white">Terms of service</a>
        </nav>

        <div className="flex gap-6">
          <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Facebook className="w-4 h-4 text-gray-400" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Instagram className="w-4 h-4 text-gray-400" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Youtube className="w-4 h-4 text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};
