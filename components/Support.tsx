import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from './Header';
import { Footer } from './Footer';
import { Mail, ChevronDown } from 'lucide-react';

export const Support: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        const res = await fetch(
            "https://longevitymind.app/support-mail.php",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            }
        );

        const data = await res.json();

        if (data.success) {
            // ✅ Redirect after success
            window.location.href = "/thank-you";
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            alert("Mail failed!");
        }

        setLoading(false);
    };


    return (
        <div className="relative bg-black min-h-screen font-sans">
            <Header />

            <main className="relative z-10 pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Left Side */}
                <div className="flex-1">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-8">
                        Support
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8">
                        We're Here <br />
                        <span className="text-yellow-400">To Help</span>
                    </h1>

                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        Need assistance or found an issue? We're here to support you.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-yellow-400">
                            <Mail size={22} />
                        </div>
                        <a
                            href="mailto:amitnetmax903@gmail.com"
                            className="text-white text-lg hover:text-yellow-400 transition"
                        >
                            amitnetmax903@gmail.com
                        </a>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full lg:max-w-lg">
                    <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl">

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <li className="list-none">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white"
                                    />
                                </li>


                                <li className="list-none">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white"
                                    />
                                </li>
                            </div>

                            <div className="relative mb-6">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Technical Support">Technical Support</option>
                                    <option value="Billing">Billing</option>
                                    <option value="Partnership">Partnership</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            </div>

                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Tell us about your inquiry"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white resize-none mb-8"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-black uppercase py-4 rounded-full text-xs hover:bg-gray-200 transition disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Submit'}
                            </button>
                        </form>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
