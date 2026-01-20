
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './Header';
import { Hero } from './Hero';
import { FeatureSection } from './FeatureSection';
import { Philosophy } from './Philosophy';
import { CTA } from './CTA';
import { Footer } from './Footer';

import { useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
    const { t } = useTranslation();
    const [scrollY, setScrollY] = useState(0);
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative bg-black min-h-screen">
            {/* Background Decorative Text */}
            <div className="fixed top-0 right-0 h-full flex items-center justify-end pointer-events-none z-0 opacity-10">
                <h1 className="vertical-text text-[15vw] font-black text-outline select-none leading-none">
                    LONGEVITY
                </h1>
            </div>

            <Header />

            <main className="relative z-10">
                <Hero />

                <FeatureSection
                    id="how-it-works"
                    tag={t('guided_workouts')}
                    title={t('roadmap_strength')}
                    description={t('roadmap_desc')}
                    type="workout-list"
                    imageSrc={`${import.meta.env.BASE_URL}assets/image/app_screen2.png`}
                    reversed={false}
                />

                <FeatureSection
                    tag={t('custom_workouts')}
                    title={t('design_routine')}
                    description={t('design_routine_desc')}
                    type="timer-screen"
                    imageSrc={`${import.meta.env.BASE_URL}assets/image/app_screen3.png`}
                    reversed={true}
                />

                <FeatureSection
                    tag={t('step_tracking')}
                    title={t('make_steps_count')}
                    description={t('make_steps_count_desc')}
                    type="steps-tracking"
                    imageSrc={`${import.meta.env.BASE_URL}assets/image/app_screen4.png`}
                    reversed={false}
                />

                <FeatureSection
                    tag={t('ai_nutrition')}
                    title={t('smarter_choices')}
                    description={t('smarter_choices_desc')}
                    type="nutrition-log"
                    imageSrc={`${import.meta.env.BASE_URL}assets/image/app_screen5.png`}
                    reversed={true}
                />

                <Philosophy />

                <CTA />
            </main>

            <Footer />
        </div>
    );
};
