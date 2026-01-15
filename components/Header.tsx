
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <header className="w-full h-20 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-12 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Subtle Glass Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />

        {/* Logo Section */}
        <div className="relative z-10 mr-2 md:mr-0">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <div className="w-9 h-9 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
              <img src={`${import.meta.env.BASE_URL}assets/image/logo.png`} alt="logo" />
            </div>
            <span className="text-white font-black text-lg tracking-tighter uppercase leading-none pt-0.5">
              Longevity
            </span>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-10 relative z-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#how-it-works">How it works</NavLink>
          <NavLink href="/#philosophy">Our philosophy</NavLink>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="hidden sm:block">
            <button className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.1em] hover:bg-gray-200 transition-all active:scale-95 shadow-lg">
              <Link to="/#app_store">Download</Link>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md border border-white/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full mt-4 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex flex-col gap-2 shadow-2xl lg:hidden transform transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}>
        <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
        <MobileNavLink href="/#how-it-works" onClick={toggleMenu}>How it works</MobileNavLink>
        <MobileNavLink href="/#philosophy" onClick={toggleMenu}>Our philosophy</MobileNavLink>

        <div className="h-px bg-white/10 my-2" />

        <Link
          to="/#app_store"
          onClick={toggleMenu}
          className="bg-white text-black w-full py-4 rounded-xl text-center text-xs font-black uppercase tracking-[0.1em] hover:bg-gray-200 transition-colors"
        >
          Download App
        </Link>
      </div>
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

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => (
  <Link
    to={href}
    onClick={onClick}
    className="text-sm font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-white hover:bg-white/5 p-4 rounded-xl transition-all"
  >
    {children}
  </Link>
);
