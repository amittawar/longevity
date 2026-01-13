
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

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
          tag="GUIDED WORKOUTS"
          title="YOUR ROADMAP TO STRENGTH."
          description="Stop guessing what to do next. Our program is built on the essential movements the human body was designed for like squats, pushups, and pullups. You start at a level that fits your current ability and unlock harder variations only when you are ready. It's a safe, logical way to build strength without skipping steps."
          type="workout-list"
          imageSrc="assets/image/app_screen2.png"
          reversed={false}
        />

        <FeatureSection
          tag="CUSTOM WORKOUTS"
          title="DESIGN YOUR OWN ROUTINE."
          description="Whether you have ten minutes for a quick mobility check or an hour for deep work, you can design workouts that fit your specific schedule and goals for the day."
          type="timer-screen"
          imageSrc="assets/image/app_screen3.png"
          reversed={true}
        />

        <FeatureSection
          tag="STEP TRACKING"
          title="MAKE EVERY STEP COUNTS."
          description="A workout works best when you stay active the rest of the day. Our tracker keeps your daily movement visible, giving you the awareness you need to get up, stay loose, and speed up your recovery between sessions."
          type="steps-tracking"
          imageSrc="assets/image/app_screen4.png"
          reversed={false}
        />

        <FeatureSection
          tag="AI-POWERED NUTRITION"
          title="MAKE SMARTER MEAL CHOICES."
          description="Good nutrition starts with awareness. We help you keep your calories in check and break down key nutrients like protein and fats. By understanding exactly what you consume, you can make smarter choices that support a strong, healthy body."
          type="nutrition-log"
          imageSrc="assets/image/app_screen5.png"
          reversed={true}
        />

        <Philosophy />

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
