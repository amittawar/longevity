import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

export const ThankYou: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="relative bg-black min-h-screen font-sans">
            <Header />

            <main className="relative z-10 pt-48 pb-20 px-6 md:px-12 text-center lg:gap-20 pb-60">

                {/* Left Side */}
                <div className="thankyou">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="85" className="!text-yellow-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /><path d="M7 10v12" /></svg>

                    <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8 mt-8">
                        {t('thank_you')} <span className="text-yellow-400">{t('you')}</span>
                    </h1>

                    <p className="text-gray-400 text-lg mb-12">
                        {t('thank_you_message')}
                    </p>

                    <Link to="/" className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition">
                        {t('back_to_home')}
                    </Link>


                </div>


            </main>

            <Footer />
        </div>
    );
};
