import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative bg-black min-h-screen">
            <Header />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-gray-300 font-light leading-relaxed">
                <h1 className="md:text-4xl text-3xl md:text-6xl font-black text-white mb-12 uppercase tracking-tighter">
                    Privacy Policy
                </h1>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">1. Introduction</h2>
                    <p>
                        Welcome to <strong>Longevity</strong> ("we," "our," or "us"), a mobile application provided by <strong>Mind Over Matter</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App") available on iOS and Android.
                    </p>
                    <p>
                        Longevity is a bodyweight training application featuring guided workouts, custom workout creation, step tracking, and AI-powered nutrition tracking. We are committed to protecting your privacy and ensuring you have a positive experience on our App.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">2. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us and information automatically collected when you use the App.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                        <li><strong>Account Information:</strong> When you create an account, we may collect your name, email address, password, and profile picture.</li>
                        <li><strong>Health & Fitness Data:</strong> We collect data you input or track, including bodyweight workout logs, exercise performance, custom workout routines, and step counts (via device sensors or integration with Apple Health/Google Fit).</li>
                        <li><strong>Nutrition Data:</strong> Information you provide about your meals, including text descriptions or images, which are processed to generate nutrition metrics.</li>
                        <li><strong>Device Information:</strong> We may collect information about your mobile device, including device model, operating system, unique device identifiers, and mobile network information.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">3. Nutrition Tracking & AI Processing</h2>
                    <p>
                        Our App uses strictly necessary Large Language Models (LLMs) and Artificial Intelligence technologies to provide nutrition tracking features.
                    </p>
                    <p>
                        When you use the nutrition tracking feature, the text descriptions or images of food you upload are processed by our AI algorithms to estimate nutritional values (calories, macronutrients, etc.). This data is processed securely and is used solely to provide you with nutrition insights. We do not use your personal health data to train public AI models without your explicit consent.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">4. Subscriptions & Payments</h2>
                    <p>
                        Longevity offers premium features through in-app subscriptions.
                    </p>
                    <p>
                        <strong>Payment Processing:</strong> We do not collect or store your payment card information. All subscription transactions are handled directly by the Apple App Store (iOS) or Google Play Store (Android). You should review their privacy policies regarding payment data.
                    </p>
                    <p>
                        We receive only a confirmation of your subscription status and expiration date to unlock premium features within the App.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">5. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                        <li>Provide, maintain, and improve the App's functionality.</li>
                        <li>Personalize your workout and nutrition experience.</li>
                        <li>Process and categorize your workout and nutrition data.</li>
                        <li>Sync your data across devices.</li>
                        <li>Respond to your comments, questions, and customer service requests.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">6. Data Sharing & Disclosure</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share data with trusted third-party service providers who assist us in operating our App, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                    </p>
                    <p>
                        This includes cloud hosting providers and AI processing partners strictly for the purpose of delivering App features.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">7. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">8. Your Rights</h2>
                    <p>
                        Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data held by us. You can manage most of your data directly within the App settings. For account deletion requests or other inquiries, please contact us.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">9. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">10. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy or our practices, please contact us at:
                    </p>
                    <address className="not-italic text-white">
                        Mind Over Matter<br />
                        42 Rue de la Croix<br />
                        9216 Diekirch, Luxembourg<br />
                        <a href="mailto:support@mindovermatter.lu" className="text-yellow-400 hover:text-yellow-300 transition-colors">support@mindovermatter.lu</a>
                    </address>
                </section>
            </main>

            <Footer />
        </div>
    );
};
