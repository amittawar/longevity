import React from 'react';
import { Apple, Play } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export const Hero: React.FC = () => {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-[url('assets/image/hero_bg.png')] bg-cover bg-center">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-yellow-500/10 to-transparent -z-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-col mb-8 items-start">
              <div className="inline-flex items-center px-6 py-2.5 border border-yellow-400/40 rounded-full bg-yellow-400/5 backdrop-blur-md">
                <span className="text-yellow-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                  BODYWEIGHT TRAINING APP
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading leading-[1.0] mb-10 flex flex-col">
              <span>BUILD</span>
              <span className="text-yellow-400">STRENGTH</span>
              <span>THAT LASTS.</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 font-medium leading-relaxed">
              Combine guided training with smart nutrition tracking to get strong and enjoy life.
            </p>

            <div className="flex flex-wrap gap-4">
              <AppStoreButton platform="apple" />
              <AppStoreButton platform="google" />
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img src="assets/image/app_screen1.png" alt="Hero Phone" />
            {/* <div className="relative w-full max-w-[500px] h-[500px] md:h-[600px] flex items-center justify-center">
            <div className="absolute -left-4 md:-left-10 top-0 scale-75 md:scale-90 opacity-40 blur-[1px]">
              <PhoneMockup screen="home" />
            </div>
            <div className="relative z-10 translate-y-6 md:translate-y-10 scale-90 md:scale-100">
              <PhoneMockup screen="onboarding" />
            </div>
          </div> */}
          </div>
        </div>
      </section>

      <div className="absolute inset-y-0 right-40 flex items-center">
        <img src="assets/image/LONGEVITY.png" alt="Longevity" />
      </div>


    </>
  );
};

const AppStoreButton: React.FC<{ platform: 'apple' | 'google' }> = ({ platform }) => {
  const isApple = platform === 'apple';
  return (
    <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 md:px-6 py-3 rounded-xl hover:bg-white/10 transition-colors group">
      {isApple ? <Apple className="w-5 h-5 md:w-6 md:h-6" /> : <Play className="w-5 h-5 md:w-6 md:h-6 fill-white" />}
      <div className="text-left">
        <div className="text-[9px] md:text-[10px] uppercase font-bold text-gray-400 group-hover:text-white transition-colors">
          {isApple ? 'Download on the' : 'Get it on'}
        </div>
        <div className="text-xs md:text-sm font-bold tracking-tight">
          {isApple ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </button>
  );
};