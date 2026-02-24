
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-heading mb-6">
          {t('own_your')} <br />
          <span className="text-yellow-400">{t('prime')}</span>
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-xl mx-auto">
          {t('cta_desc')}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link to="https://apps.apple.com/in/app/longevity-mind/id6757175237" target="_blank"><AppStoreButton platform="apple" /></Link>
          <Link to="https://play.google.com/store/apps/details?id=com.netmaxims.mindovermatter.longevitymind&pcampaignid=web_share" target="_blank"><AppStoreButton platform="google" /></Link>
        </div>
      </div>
    </section>
  );
};

const AppStoreButton: React.FC<{ platform: 'apple' | 'google' }> = ({ platform }) => {
  const { t } = useTranslation();
  const isApple = platform === 'apple';
  return (
    <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 group">
      {isApple ? (
        <svg className="w-7 h-7" width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3977 13.8867C18.3977 14.0039 18.2219 17.4609 22.0305 19.2773C21.3273 21.4453 18.8664 26.25 15.9953 26.25C14.3547 26.25 13.4172 25.1953 11.5422 25.1953C9.60859 25.1953 8.55391 26.25 7.08906 26.25C4.27656 26.3672 1.58125 21.0938 0.819531 18.9258C0.233594 17.2852 -0.000781059 15.7031 -0.000781059 14.1797C-0.000781059 8.96484 3.45625 6.44531 6.7375 6.38672C8.31953 6.38672 10.3117 7.5 11.1906 7.5C12.0109 7.5 14.2961 6.15234 16.4055 6.32812C18.5734 6.50391 20.2141 7.32422 21.3273 8.90625C19.3938 10.1367 18.3977 11.7188 18.3977 13.8867ZM15.1164 4.27734C13.9445 5.625 12.5383 6.38672 11.0148 6.26953C10.8977 4.6875 11.4836 3.22266 12.5383 2.05078C13.4758 0.996094 15.1164 0.117188 16.5227 0C16.5227 0.644531 16.6984 2.40234 15.1164 4.27734Z" fill="#EDEDED" />
        </svg>
      ) : (
        <svg className="w-7 h-7" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0625 11.0156L3.70312 0.609375L16.875 8.20312L14.0625 11.0156ZM1.03125 0L13.0312 12L1.03125 24C0.421875 23.7188 0 23.1094 0 22.3594V1.6875C0 0.9375 0.421875 0.328125 1.03125 0ZM20.9531 10.5938C21.8438 11.25 21.8438 12.7969 21 13.4531L18.1875 15.0469L15.0938 12L18.1875 9L20.9531 10.5938ZM3.70312 23.3906L14.0625 13.0312L16.875 15.8438L3.70312 23.3906Z" fill="#EDEDED" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[11px] uppercase font-black text-gray-400 group-hover:text-white transition-colors">
          {isApple ? t('download_on_the') : t('get_it_on')}
        </div>
        <div className="text-lg font-black tracking-tight leading-tight">
          {isApple ? t('app_store') : t('google_play')}
        </div>
      </div>
    </button>
  );
};
