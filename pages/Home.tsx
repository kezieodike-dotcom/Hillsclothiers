
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section System */}
      <section className="relative min-h-screen flex items-center justify-center bg-background-dark py-20 lg:py-40 px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110 lg:scale-100">
          <img
            alt="Premium Fashion"
            className="w-full h-full object-cover opacity-60"
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=2000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/95 via-background-dark/70 to-background-dark"></div>
        </div>

        <div className="relative z-10 max-w-[1244px] mx-auto w-full text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start max-w-[800px]">
            {/* Hero Eyebrow */}
            <div className="mb-8 animate-fade-in">
              <span className="text-gold text-sm md:text-base font-medium uppercase tracking-[0.2em] opacity-80 block mb-4">
                Nigeria's Premier Bespoke Atelier
              </span>
              <div className="w-16 h-[2px] bg-gold/50 rounded-full"></div>
            </div>

            {/* Hero Heading (H1) */}
            <h1 className="text-[40px] md:text-[64px] lg:text-[84px] font-bold text-white leading-[1.1] mb-8 tracking-[-0.03em] uppercase">
              Build Your <span className="gold-text-gradient italic font-normal">Legacy</span> <br />
              Through <span className="text-white">Style</span>
            </h1>

            {/* Hero Subtext */}
            <p className="text-lg md:text-2xl text-slate-300 font-normal leading-relaxed mb-12 max-w-[640px] opacity-90">
              engineering confidence through precision-tailored Senators, Corporate Suits, and Bespoke Couture for the modern African visionary.
            </p>

            {/* Hero Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button
                onClick={() => onNavigate(Page.SHOP)}
                className="btn-primary w-full sm:w-auto min-w-[200px]"
              >
                Explore Catalog
              </button>
              <button
                onClick={() => onNavigate(Page.CUSTOM_ORDER)}
                className="btn-outline w-full sm:w-auto min-w-[200px]"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Vertical Delivery Badge - Professional Position */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
          <div className="w-[1px] h-32 bg-gold/20"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gold/40 vertical-text py-4">
            LAGOS • LONDON • DUBAI
          </span>
          <div className="w-[1px] h-32 bg-gold/20"></div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Collections</h2>
            <p className="text-slate-500 font-medium">Curated excellence for every occasion.</p>
          </div>
          <button onClick={() => onNavigate(Page.SHOP)} className="text-gold text-xs font-bold uppercase tracking-widest border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-all">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Senators', image: '/assets/senator_featured.png', category: 'Traditional' },
            { name: 'Corporate Wear', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800', category: 'Professional' },
            { name: 'Bespoke Suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
            { name: 'Casual Male Wear', image: '/assets/casual_featured.png', category: 'Heritage' },
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => onNavigate(Page.SHOP)}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-2xl">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1 block">{item.category}</span>
                  <h3 className="text-xl font-display font-bold leading-tight">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Executive Leadership Branding */}
      <section className="py-24 bg-slate-50 dark:bg-surface-dark/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em]">Director's Vision</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight uppercase tracking-tighter">
                BUILDING THE <br /> <span className="text-gold italic">CULTURE</span> OF <br /> EXCELLENCE
              </h2>
              <p className="text-gold text-xs font-black tracking-[0.5em] mb-8">STYLING KINGS</p>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                "At HILLS CLOTHIERS, we are not just making clothes; we are engineering confidence. Every stitch is a commitment to the heritage of the modern African visionary."
              </p>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate(Page.ABOUT)}
                  className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors"
                >
                  Explore Our Heritage
                  <span className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all"></span>
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group mb-8">
                <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0"></div>
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-background-dark">
                  <img
                    src="/assets/director_portrait.png"
                    alt="UGWU NNAMDI EMMANUEL"
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>
              <div className="text-center lg:text-left pl-4">
                <h4 className="text-2xl font-display font-bold">UGWU NNAMDI EMMANUEL</h4>
                <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-black mt-1">Executive Director & Visionary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work - Horizontal Showcase */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Craftsmanship Exhibition</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">Our <span className="text-gold italic">Recent Work</span></h2>
        </div>

        <div className="relative">
          <div className="animate-marquee flex gap-8 py-10">
            {[
              "/assets/work_1.jpg",
              "/assets/work_2.jpg",
              "/assets/work_3.jpg",
              "/assets/work_4.jpg",
              "/assets/work_5.png"
            ].concat([
              "/assets/work_1.jpg",
              "/assets/work_2.jpg",
              "/assets/work_3.jpg",
              "/assets/work_4.jpg",
              "/assets/work_5.png"
            ]).map((img, idx) => (
              <div key={idx} className="w-[300px] md:w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold/10 group relative flex-shrink-0">
                <img src={img} alt={`Work Sample ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2 font-display italic">Signature Fit</span>
                  <p className="text-white text-lg font-display font-bold">HILLS Bespoke Masterpiece</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-center">
          <button onClick={() => onNavigate(Page.CUSTOM_ORDER)} className="btn-outline flex items-center gap-4 group">
            Start Your Masterpiece
            <span className="material-icons group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Trust & Delivery Section */}
      <section className="bg-primary text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <img
              alt="Authentic Craftsmanship"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover border-4 border-gold/20"
              src="/assets/craftsmanship_authentic.jpg"
            />
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-3xl hidden lg:block border-8 border-white dark:border-background-dark shadow-2xl">
              <span className="material-icons text-5xl text-black">auto_fix_high</span>
              <p className="text-black font-black text-sm mt-4 italic">Bespoke <br />Engineering</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Premium Quality <br /> Delivered <span className="text-gold italic">Nationwide</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              From our digital atelier to your doorstep. We leverage a robust waybill system to ensure your bespoke pieces arrive in pristine condition, anywhere in Nigeria.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-gold font-bold text-3xl mb-2 font-display">15+</h4>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Years of Heritage</p>
              </div>
              <div>
                <h4 className="text-gold font-bold text-3xl mb-2 font-display">24h</h4>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Fast Dispatch</p>
              </div>
            </div>

            <button onClick={() => onNavigate(Page.CUSTOM_ORDER)} className="btn-primary mt-12">
              Learn Our Process
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="mb-12">
          <span className="material-icons text-gold text-6xl opacity-30">format_quote</span>
        </div>
        <p className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-4xl mx-auto mb-12">
          "Hills Clothiers defines the modern African gentleman. The attention to detail in their custom Senators is unlike anything I've seen globally."
        </p>
        <div>
          <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-2 italic">Hon. Olusola A.</h5>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Public Representative</p>
        </div>
      </section>
    </div >
  );
};

export default Home;
