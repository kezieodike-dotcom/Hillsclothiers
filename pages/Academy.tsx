
import React, { useState } from 'react';
import { Page } from '../types';

interface AcademyProps {
    onNavigate?: (page: Page) => void;
}

const Academy: React.FC<AcademyProps> = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        focus: 'Bespoke Fundamentals'
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="animate-fade-in overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 bg-background-dark text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        alt="Academy Heritage"
                        className="w-full h-full object-cover grayscale"
                        src="https://images.unsplash.com/photo-1558230315-40ceaba289be?auto=format&fit=crop&q=80&w=2000"
                    />
                    <div className="absolute inset-0 bg-background-dark/80"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <span className="inline-block px-6 py-2 border border-gold/30 text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-12 rounded-full">Designing Future Visionaries</span>
                    <h1 className="text-6xl md:text-9xl font-display font-bold text-white mb-12 leading-[0.9] tracking-tighter">
                        HILLS <br /> <span className="gold-text-gradient italic font-normal">ACADEMY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                        Bridging the gap between raw talent and international sartorial standards. Master the art of bespoke tailoring from the masters of the craft.
                    </p>
                </div>
            </section>

            {/* Curriculum Grid */}
            <section className="py-32 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-24">
                        <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8">The <span className="text-gold italic">Curriculum</span></h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl">
                            A comprehensive training system designed to transform aspiring designers into world-class craftsmen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                level: 'Tier 01',
                                title: 'Bespoke Fundamentals',
                                desc: 'Master the foundation of hand-drafted patterns, fabric grain science, and luxury finishing techniques.',
                                icon: 'architecture'
                            },
                            {
                                level: 'Tier 02',
                                title: 'Advanced Pattern Drafting',
                                desc: 'Deep dive into complex silhouettes, double-breasted engineering, and master-level embroidery mapping.',
                                icon: 'straighten'
                            },
                            {
                                level: 'Tier 03',
                                title: 'Fashion Business Strategy',
                                desc: 'Learn the economics of luxury. From inventory scaling and digital presence to global supply chain management.',
                                icon: 'insights'
                            }
                        ].map(module => (
                            <div key={module.level} className="p-10 bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-gold/10 rounded-[2.5rem] group hover:border-gold transition-all">
                                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                                    <span className="material-icons text-gold group-hover:text-black">{module.icon}</span>
                                </div>
                                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block italic">{module.level}</span>
                                <h3 className="text-2xl font-bold mb-6 italic font-display">{module.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{module.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section className="py-32 bg-primary text-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
                                Begin Your <span className="text-gold italic">Journey</span>
                            </h2>
                            <p className="text-xl text-slate-300 leading-relaxed mb-12">
                                Join our next cohort of designers. Applications are reviewed based on passion, portfolio potential, and commitment to the HILLS standard.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                        <span className="material-icons text-gold">event_available</span>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Next Intake</p>
                                        <p className="text-lg font-bold">Fall Cohort • Sept 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                        <span className="material-icons text-gold">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Location</p>
                                        <p className="text-lg font-bold">HILLS Hub, Lekki Phase 1 / Online</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 -mr-16 -mt-16 rounded-full blur-3xl"></div>

                            {submitted ? (
                                <div className="text-center py-20 animate-fade-in">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <span className="material-icons text-white text-4xl">done</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-black mb-4">Application Received</h3>
                                    <p className="text-slate-500">Our Admissions Team will review your profile and contact you within 48 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-gold outline-none text-black font-medium transition-all"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-gold outline-none text-black font-medium transition-all"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Primary Focus</label>
                                        <select
                                            className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-gold outline-none text-black font-medium transition-all appearance-none"
                                            value={formData.focus}
                                            onChange={e => setFormData({ ...formData, focus: e.target.value })}
                                        >
                                            <option>Bespoke Fundamentals</option>
                                            <option>Advanced Pattern Drafting</option>
                                            <option>Fashion Business Strategy</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn-primary w-full mt-8 shadow-xl">
                                        Submit Enrollment Request
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academy;
