
import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#101010]" id="app_store">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}/assets/image/logo.png`} alt="logo" />
        </div>

        <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms-services" className="hover:text-white">Terms of Service</Link>
          <Link to="/support" className="hover:text-white">Support</Link>
        </nav>

        <div className="flex gap-6">
          {/* <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Facebook className="w-4 h-4 text-gray-400" />
          </a> */}
          <a href="https://www.instagram.com/mindovermatter_lu/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Instagram className="w-4 h-4 text-gray-400" />
          </a>
          {/* <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Youtube className="w-4 h-4 text-gray-400" />
          </a> */}
        </div>
      </div>

      <div className="mt-8 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Longevity. Made with ❤️ from <a href="http://netmaxims.com/" target="_blank" class="nmx_link">NetMaxims</a>.
      </div>
    </footer>
  );
};
