
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-40 pb-32 bg-background-dark text-white text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            alt="Heritage"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1558230315-40ceaba289be?auto=format&fit=crop&q=80&w=2000"
          />
          <div className="absolute inset-0 bg-background-dark/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <span className="inline-block px-6 py-2 border border-gold/30 text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-12 rounded-full">The Heritage</span>
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-12 leading-[0.9] tracking-tighter">
            Redefining <br /> <span className="gold-text-gradient italic font-normal">Excellence</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 italic mb-16 leading-relaxed font-display max-w-3xl mx-auto">
            "We don't just craft garments; we curate the visual identity of the modern African visionary."
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="h-[1px] w-20 bg-gold/50"></div>
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-gold">Chidi Hills, Creative Director</span>
          </div>
        </div>
      </header>

      {/* Pillars Section */}
      <section className="py-32 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-none">Our <span className="text-gold italic">Vision</span></h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                To become the definitive global symbol of African luxury tailoring, bridging the gap between traditional craftsmanship and contemporary international style. We envision a world where 'Made in Nigeria' is synonymous with the finest sartorial standards.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div>
                  <h4 className="text-gold font-bold text-3xl mb-2 font-display">100%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Bespoke Accuracy</p>
                </div>
                <div>
                  <h4 className="text-gold font-bold text-3xl mb-2 font-display">Nigeria</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Heritage Core</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img className="rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=1000" alt="Excellence" />
              <div className="absolute -bottom-10 -left-10 bg-gold text-black p-10 rounded-3xl hidden md:block border-8 border-white dark:border-background-dark">
                <p className="text-4xl font-display font-bold italic underline decoration-2 underline-offset-8">Since 2012</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { id: '01', title: 'Authenticity', desc: 'Honoring our heritage through every stitch and silhouette.' },
              { id: '02', title: 'Precision', desc: 'A obsession with the micro-adjustments that create the perfect fit.' },
              { id: '03', title: 'Modernism', desc: 'Transcending borders with a contemporary African aesthetic.' }
            ].map(pillar => (
              <div key={pillar.id} className="p-12 bg-slate-50 dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-gold/10 hover:border-gold transition-colors group">
                <span className="text-6xl font-display font-bold text-gold/10 group-hover:text-gold transition-colors mb-8 block">{pillar.id}</span>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">{pillar.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-32 bg-white dark:bg-background-dark/50 relative overflow-hidden border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-background-dark">
                <img
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                  src="/assets/our_story_featured.png"
                  alt="HILLS Craftsmanship"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-2 block animate-fade-in">Executive Director</span>
                  <h3 className="text-4xl font-display font-bold text-white tracking-tighter">UGWU <br /> NNAMDI EMMANUEL</h3>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="inline-block px-4 py-1 bg-gold/10 border border-gold/20 rounded-full">
                <span className="text-gold text-[10px] uppercase font-bold tracking-[0.3em]">Leadership Profile</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">Driving the <span className="text-gold italic">Next Frontier</span> of Luxury</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Under the strategic guidance of Ugwu Nnamdi Emmanuel, HILLS CLOTHIERS has evolved into more than a fashion house—it is a cultural statement. A dedicated fashion enthusiast and prolific public speaker, Mr. Ugwu brings a visionary approach to the business of bespoke tailoring.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                His leadership is defined by a commitment to scaling African excellence globally, ensuring that every garment leaving our hub is a masterpiece of precision and a testament to modern African heritage.
              </p>

              <div className="pt-10 flex flex-wrap gap-12">
                <div className="flex flex-col gap-2 group cursor-pointer">
                  <span className="text-gold text-2xl material-icons group-hover:scale-110 transition-transform">campaign</span>
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-gold transition-colors">Public Speaker</p>
                </div>
                <div className="flex flex-col gap-2 group cursor-pointer">
                  <span className="text-gold text-2xl material-icons group-hover:scale-110 transition-transform">auto_awesome</span>
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-gold transition-colors">Fashion Enthusiast</p>
                </div>
                <div className="flex flex-col gap-2 group cursor-pointer">
                  <span className="text-gold text-2xl material-icons group-hover:scale-110 transition-transform">rocket_launch</span>
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-gold transition-colors">Strategic Visionary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Process */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">The Art of the Craft</h2>
            <p className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">Uncompromising Quality Assurance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: 'The Selection', img: 'https://images.unsplash.com/photo-1589410291178-2283a33947ca?auto=format&fit=crop&q=80&w=600', desc: 'We source only the finest fabrics from globally renowned mills, focusing on breathability and durability.' },
              { title: 'The Precision Cut', img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600', desc: 'Every pattern is drafted from scratch based on your unique measurements, ensuring a fit that moves with you.' },
              { title: 'The Hand-Finish', img: '/assets/craftsmanship_authentic.jpg', desc: 'Every detail, from hidden seams to functional buttonholes, is finished with artisanal precision in our Lagos studio.' }
            ].map((step, idx) => (
              <div key={idx} className="group">
                <div className="overflow-hidden rounded-3xl mb-8 aspect-square relative border border-gold/10 shadow-xl">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={step.img} alt={step.title} />
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold italic font-display">{step.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
