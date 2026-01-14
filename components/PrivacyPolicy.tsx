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
                <h1 className="text-4xl md:text-6xl font-black text-white mb-12 uppercase tracking-tighter">
                    Privacy Policy
                </h1>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Who are we?</h2>
                    <p>
                        Our website address is: <a href="https://mindovermatter.lu" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">https://mindovermatter.lu</a>.
                    </p>
                    <p className="text-sm text-gray-400">See legal notices</p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Contact form</h2>
                    <p>
                        The information collected on the contact forms is stored in a computer file by Mind Over Matter to respond to your information request. By submitting the form, you consent to our collection and processing of your personal data specifically for the purpose of your inquiry and any resulting business relationship.
                    </p>
                    <p>
                        The legal basis for the processing is consent, obtained (buttons and checkboxes), freely given, clear and unambiguous in accordance with the applicable conditions which are defined in Articles 4 and 7 of the GDPR.
                    </p>
                    <p>
                        The data processed includes identification data: first names, last names, and professional contact details. This data is collected directly from you via the contact form on our website.
                    </p>
                    <p>
                        Your data is processed by the person in charge of commercial management, an authorized member of the staff of the company Mind Over Matter.
                    </p>
                    <p>
                        Your personal data is kept for the time necessary to process your information request. It will be kept for 24 months from the last contact, then anonymized and kept for historical and statistical purposes for a period of 36 months, unless otherwise required by law.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Comments</h2>
                    <p>
                        When you leave a comment on our site, the data entered in the comment form, as well as your IP address and browser user agent, are collected to help us detect spam.
                    </p>
                    <p>
                        An anonymized string created from your email address (also called a hash) may be sent to the Gravatar service to check if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" className="text-yellow-400 hover:underline">https://automattic.com/privacy/</a>. After your comment is approved, your profile picture will be publicly visible next to your comment.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Media</h2>
                    <p>
                        If you upload images to the site, we advise you to avoid uploading images containing EXIF ​​GPS coordinate data. People visiting your site can download and extract location data from these images.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Cookies</h2>
                    <p>
                        If you leave a comment on our site, you will be offered the option to save your name, email address, and website in cookies. This is solely for your convenience so you don't have to re-enter this information if you leave another comment later. These cookies expire after one year.
                    </p>
                    <p>
                        If you visit the login page, a temporary cookie will be created to determine if your browser accepts cookies. This cookie contains no personal data and will be automatically deleted when you close your browser.
                    </p>
                    <p>
                        When you log in, we will set several cookies to save your login information and screen preferences. Login cookies last for two days, and screen option cookies last for one year. If you select "Remember me," your login cookie will be stored for two weeks. If you log out of your account, the login cookie will be removed.
                    </p>
                    <p>
                        When you edit or publish a post, an additional cookie will be saved in your browser. This cookie contains no personal data. It simply indicates the ID of the post you just edited. It expires after one day.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-xl text-white font-bold uppercase tracking-wide">Refusing Cookies</h2>
                    <p>
                        The user is informed that cookies may be installed on their browser. In any case, the user can freely delete these cookies from their browser. Refusing to allow cookies may prevent access to certain services. However, users can configure their computer to refuse cookies.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                        <li><strong>Internet Explorer:</strong> Tools &gt; Internet Options &gt; Privacy &gt; Block all cookies.</li>
                        <li><strong>Firefox:</strong> Options &gt; Privacy &gt; Use custom settings for history &gt; uncheck disable cookies.</li>
                        <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Block cookies.</li>
                        <li><strong>Chrome:</strong> Settings &gt; Advanced &gt; Privacy &gt; Content settings &gt; Block cookies.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Data Usage & Protection</h2>
                    <p>
                        The personal data collected on this website will under no circumstances be distributed to third parties, nor sold, rented, or loaned. In accordance with French Law No. 78-17 of January 6, 1978, as amended in 2004, concerning information technology, data files, and civil liberties, this website has been registered with the French Data Protection Authority (CNIL) (www.cnil.fr) under number 1975885.
                    </p>
                    <p>
                        The user is specifically informed that, in accordance with Article 32 of the same law, the information he provides through the order form on the site is necessary to respond to his request and is intended for the site publisher.
                    </p>
                    <p>
                        For each of these processing operations, the user has the right to query, access, modify, object to and rectify personal data concerning him/her: it is possible to request that this data be rectified, completed, clarified, updated or erased.
                    </p>
                    <p>
                        These rights can be exercised by simply sending an email using this contact form or by mail to <strong>42 Rue de la Croix, 9216 Diekirch, Luxembourg</strong>.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Content embedded from other websites</h2>
                    <p>
                        Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in the same way as if the visitor had visited that other website.
                    </p>
                    <p>
                        These websites may collect data about you, use cookies, embed third-party tracking tools, and monitor your interactions with this embedded content if you have an account and are logged in to their website.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Data storage periods</h2>
                    <p>
                        We do not retain personal data longer than necessary to achieve the specific purposes for which the information was collected. Personal data is retained for an appropriate period of time for each type of data. These retention periods may vary depending on the purpose of the data collection.
                    </p>
                    <p>
                        The maximum retention period for personal data is 2 years.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Your rights over your data</h2>
                    <p>
                        If you have sent us a message via one of our contact forms, you can request to receive a file containing all the personal data we hold about you, including the data you have provided to us. You can also request the deletion of your personal data. This does not include data stored for administrative, legal, or security purposes.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-wide">Transmission of your personal data</h2>
                    <p>
                        Your personal data is not transmitted to services external to Mind Over Matter.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
};
