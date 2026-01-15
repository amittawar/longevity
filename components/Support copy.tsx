import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Mail, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';

export const Support: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative bg-black min-h-screen font-sans">
            <Header />

            {/* Main Content */}
            <main className="relative z-10 pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-center">

                {/* Left Side: Contact Info */}
                <div className="flex-1 w-full lg:max-w-xl">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-8">
                        Support
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8 italic uppercase tracking-tighter">
                        We're Here <br />
                        <span className="text-yellow-400">To Help</span>
                    </h1>

                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-md">
                        Need assistance or found an issue? We're here to support you on your fitness journey.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400/10 transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Email Support</div>
                                <a href="mailto:support@longevity.com" className="text-white font-medium text-lg hover:text-yellow-400 transition-colors">support@longevity.com</a>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="relative w-full lg:max-w-lg">
                    {/* Card Background */}
                    <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-yellow-400/50 focus:bg-[#202020] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@gmail.com"
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-yellow-400/50 focus:bg-[#202020] transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6 relative">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                            <div className="relative">
                                <select className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-yellow-400/50 focus:bg-[#202020] transition-all cursor-pointer">
                                    <option>Select a topic</option>
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Billing</option>
                                    <option>Partnership</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                            </div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                            <textarea
                                placeholder="Tell us about your inquiry"
                                rows={4}
                                className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-yellow-400/50 focus:bg-[#202020] transition-all resize-none"
                            />
                        </div>

                        <button className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-full text-xs hover:bg-gray-200 transition-colors transform active:scale-[0.98] duration-200">
                            Submit
                        </button>












                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

const SocialLink: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:border-white/20 hover:-translate-y-1"
    >
        {icon}
    </a>
);
