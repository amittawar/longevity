
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'es', label: 'ES' },
    { code: 'lb', label: 'LB' },
    { code: 'pt', label: 'PT' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <header className="w-full h-20 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-12 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Subtle Glass Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />

        {/* Logo Section */}
        <div className="relative z-10 mr-2 md:mr-0 header-logo">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <div className="text-yellow-400">
              <img src={`${import.meta.env.BASE_URL}assets/image/logo1.png`} alt="logo" />
            </div>
            {/* <span className="text-white font-black text-lg tracking-tighter uppercase leading-none pt-0.5">
              Longevity
            </span> */}
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-10 relative z-10">
          <NavLink href="/">{t('home')}</NavLink>
          <NavLink href="/#how-it-works">{t('how_it_works')}</NavLink>
          <NavLink href="/#philosophy">{t('our_philosophy')}</NavLink>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-full px-3 py-1.5 border border-white/10 backdrop-blur-sm">
            <Globe size={14} className="text-gray-400" />
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-transparent text-gray-300 text-[10px] font-bold uppercase tracking-wider outline-none border-none cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="text-black">
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block">
            <button className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.1em] hover:bg-gray-200 transition-all active:scale-95 shadow-lg">
              <Link to="/#app_store">{t('download')}</Link>
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
        <MobileNavLink href="/" onClick={toggleMenu}>{t('home')}</MobileNavLink>
        <MobileNavLink href="/#how-it-works" onClick={toggleMenu}>{t('how_it_works')}</MobileNavLink>
        <MobileNavLink href="/#philosophy" onClick={toggleMenu}>{t('our_philosophy')}</MobileNavLink>

        {/* Mobile Language Switcher */}
        <div className="flex items-center gap-2 px-4 py-2">
          <Globe size={16} className="text-gray-400" />
          <div className="flex gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`text-xs font-bold uppercase ${i18n.language === lang.code ? 'text-white' : 'text-gray-500'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10 my-2" />

        <Link
          to="/#app_store"
          onClick={toggleMenu}
          className="bg-white text-black w-full py-4 rounded-xl text-center text-xs font-black uppercase tracking-[0.1em] hover:bg-gray-200 transition-colors"
        >
          {t('download_app')}
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
