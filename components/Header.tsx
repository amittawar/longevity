
import React from 'react';

import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 ">
      <header className="w-full h-20 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-12 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Subtle Glass Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />

        {/* Logo Section */}
        <div className="relative z-10 mr-2 md:mr-0">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
              <img src={`${import.meta.env.BASE_URL}assets/image/logo.png`} alt="logo" />
            </div>
            <span className="text-white font-black text-lg tracking-tighter uppercase leading-none pt-0.5">
              Longevity
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 relative z-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#how-it-works">How it works</NavLink>
          <NavLink href="/#philosophy">Our philosophy</NavLink>
        </nav>

        {/* Action Button */}
        <div className="flex items-center relative z-10">
          <button className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.1em] hover:bg-gray-200 transition-all active:scale-95 shadow-lg">
            <Link to="/#app_store">Download</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    to={href}
    className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </Link>
);
