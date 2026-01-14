import React from 'react';
import { Play } from 'lucide-react';
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
              <span>THAT LASTS</span>
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
            <img src={`${import.meta.env.BASE_URL}assets/image/app_screen1.png`} alt="Hero Phone" />
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
        <img src={`${import.meta.env.BASE_URL}assets/image/LONGEVITY.png`} alt="Longevity" />
      </div>


    </>
  );
};

const AppStoreButton: React.FC<{ platform: 'apple' | 'google' }> = ({ platform }) => {
  const isApple = platform === 'apple';
  return (
    <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 md:px-6 py-3 rounded-xl hover:bg-white/10 transition-colors group">
      {isApple ? (
        <svg className="w-5 h-5 md:w-6 md:h-6" width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3977 13.8867C18.3977 14.0039 18.2219 17.4609 22.0305 19.2773C21.3273 21.4453 18.8664 26.25 15.9953 26.25C14.3547 26.25 13.4172 25.1953 11.5422 25.1953C9.60859 25.1953 8.55391 26.25 7.08906 26.25C4.27656 26.3672 1.58125 21.0938 0.819531 18.9258C0.233594 17.2852 -0.000781059 15.7031 -0.000781059 14.1797C-0.000781059 8.96484 3.45625 6.44531 6.7375 6.38672C8.31953 6.38672 10.3117 7.5 11.1906 7.5C12.0109 7.5 14.2961 6.15234 16.4055 6.32812C18.5734 6.50391 20.2141 7.32422 21.3273 8.90625C19.3938 10.1367 18.3977 11.7188 18.3977 13.8867ZM15.1164 4.27734C13.9445 5.625 12.5383 6.38672 11.0148 6.26953C10.8977 4.6875 11.4836 3.22266 12.5383 2.05078C13.4758 0.996094 15.1164 0.117188 16.5227 0C16.5227 0.644531 16.6984 2.40234 15.1164 4.27734Z" fill="#EDEDED" />
        </svg>
      ) : (
        <svg className="w-5 h-5 md:w-6 md:h-6" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0625 11.0156L3.70312 0.609375L16.875 8.20312L14.0625 11.0156ZM1.03125 0L13.0312 12L1.03125 24C0.421875 23.7188 0 23.1094 0 22.3594V1.6875C0 0.9375 0.421875 0.328125 1.03125 0ZM20.9531 10.5938C21.8438 11.25 21.8438 12.7969 21 13.4531L18.1875 15.0469L15.0938 12L18.1875 9L20.9531 10.5938ZM3.70312 23.3906L14.0625 13.0312L16.875 15.8438L3.70312 23.3906Z" fill="#EDEDED" />
        </svg>
      )}
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