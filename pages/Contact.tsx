import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="bg-white dark:bg-background-dark animate-fade-in">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-background-dark text-white text-center">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <span className="inline-block px-6 py-2 border border-gold/30 text-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-8 rounded-full bg-gold/5">Inquiries</span>
                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-8 tracking-tighter">
                        Connect <br /> <span className="gold-text-gradient italic font-normal">Privately</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-medium italic font-display max-w-2xl mx-auto">
                        Our master tailors and concierges are available for virtual or physical consultations.
                    </p>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        {/* Contact Info */}
                        <div className="space-y-16">
                            <div>
                                <h2 className="text-5xl font-display font-bold mb-12">Global <span className="text-gold italic">Concierge</span></h2>
                                <div className="space-y-12">
                                    <div className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                                            <span className="material-icons">location_on</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">Flagship Studio</h4>
                                            <p className="text-xl font-display font-bold">12B Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                                            <span className="material-icons">mail</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">Digital Inquiries</h4>
                                            <p className="text-xl font-display font-bold">bespoke@hillsclothiers.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                                            <span className="material-icons">phone</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">WhatsApp Concierge</h4>
                                            <p className="text-xl font-display font-bold">+234 (0) 800-HILLS-BESPOKE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-dark p-12 rounded-[2.5rem] border border-gold/10 relative overflow-hidden text-white shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -mr-16 -mt-16 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-display font-bold mb-6 italic text-gold">Opening Hours</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm font-medium border-b border-gold/5 pb-4">
                                        <span className="text-slate-400">Monday — Friday</span>
                                        <span className="font-bold">09:00 — 18:00 WAT</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium border-b border-gold/5 pb-4">
                                        <span className="text-slate-400">Saturday</span>
                                        <span className="font-bold">10:00 — 16:00 WAT</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className="text-slate-400">Sunday</span>
                                        <span className="font-bold text-gold italic">By Appointment Only</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 dark:bg-surface-dark p-16 rounded-[3rem] border border-slate-200 dark:border-gold/10 shadow-2xl">
                            <h3 className="text-3xl font-display font-bold mb-10 leading-tight">Send a <span className="text-gold italic">Message</span></h3>
                            <form className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                                        <input type="text" className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all font-bold" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                                        <input type="email" className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all font-bold" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Inquiry Type</label>
                                    <select className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all font-bold appearance-none">
                                        <option>Bespoke Tailoring Consultation</option>
                                        <option>Order Status & Modifications</option>
                                        <option>Corporate Gifting</option>
                                        <option>Press & Media</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                                    <textarea rows={6} className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all font-bold" />
                                </div>
                                <button className="w-full btn-primary py-6 text-[11px] font-bold uppercase tracking-[0.3em] shadow-2xl">Transmit Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Embed Stubs */}
            <section className="h-[500px] w-full bg-slate-200 dark:bg-surface-dark relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <span className="material-icons text-6xl text-gold/20">map</span>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Interactive Map Implementation Pending</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
