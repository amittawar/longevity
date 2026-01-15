import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const TermsServices: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative bg-black min-h-screen">
            <Header />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-gray-300 font-light leading-relaxed">
                <h1 className="md:text-4xl text-3xl md:text-6xl font-black text-white mb-12 uppercase tracking-tighter">
                    Terms Of Service
                </h1>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">1. Introduction</h2>
                    <p>
                        Welcome to Longevity. These Terms of Service ("Terms") govern your access to and use of the Longevity fitness application and website (collectively, the "Service"), provided by Mind Over Matter ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">2. Medical Disclaimer</h2>
                    <p className="font-bold text-white">
                        IMPORTANT: The Service offers health and fitness information and is designed for educational and entertainment purposes only. You should consult your physician or general practitioner before beginning a new fitness program.
                    </p>
                    <p>
                        You should not rely on this information as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment. If you have any concerns or questions about your health, you should always consult with a physician or other health-care professional. Do not disregard, avoid or delay obtaining medical or health related advice from your health-care professional because of something you may have read on this Service.
                    </p>
                    <p>
                        The use of any information provided on this Service is solely at your own risk.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">3. Use of the Service</h2>
                    <p>
                        You must be at least 18 years old to use the Service. By agreeing to these Terms, you represent and warrant that you are at least 18 years of age.
                    </p>
                    <p>
                        You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                        <li>In any way that violates any applicable national or international law or regulation.</li>
                        <li>To exploit, harm, or attempt to exploit or harm minors in any way.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                        <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">4. User Accounts</h2>
                    <p>
                        To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </p>
                    <p>
                        You are responsible for safeguarding your password. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions. You will immediately notify us of any unauthorized use of your account.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">5. Intellectual Property Rights</h2>
                    <p>
                        The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Mind Over Matter, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                    <p>
                        You are granted a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for your personal, non-commercial use.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">6. Termination</h2>
                    <p>
                        We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                    </p>
                    <p>
                        If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">7. Limitation of Liability</h2>
                    <p>
                        In no event shall Mind Over Matter, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">8. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    <p>
                        By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="md:text-2xl text-white font-bold uppercase tracking-wide">9. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <address className="not-italic text-white">
                        Mind Over Matter<br />
                        42 Rue de la Croix<br />
                        9216 Diekirch, Luxembourg
                    </address>
                </section>


            </main>

            <Footer />
        </div>
    );
};
