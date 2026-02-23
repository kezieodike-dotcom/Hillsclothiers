import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import ResponsiveHeroBanner from '../components/ui/responsive-hero-banner';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section Redesign */}
      <ResponsiveHeroBanner
        badgeLabel="Exclusive"
        badgeText="Nigeria's Premier Bespoke Atelier"
        title={
          <>
            Build Your <span className="gold-text-gradient italic font-normal">Legacy</span> <br />
            Through <span className="text-white">Style</span>
          </>
        }
        description="engineering confidence through precision-tailored Senators, Corporate Suits, and Bespoke Couture for the modern African visionary."
        primaryButton={
          <button
            onClick={() => onNavigate(Page.SHOP)}
            className="btn-primary w-full sm:w-auto min-w-[200px]"
          >
            Explore Catalog
          </button>
        }
        secondaryButton={
          <button
            onClick={() => onNavigate(Page.CUSTOM_ORDER)}
            className="btn-outline w-full sm:w-auto min-w-[200px]"
          >
            Book An Appointment
          </button>
        }
        partnersTitle="Dressing Icons Across the Continent"
        partners={[
          // Placeholder partners using a placeholder logo generator since the provided SUPABASE URLs are for space agencies
          { logoUrl: "https://via.placeholder.com/120x36/D4AF37/FFFFFF?text=LAGOS+LUXURY", href: "#" },
          { logoUrl: "https://via.placeholder.com/120x36/D4AF37/FFFFFF?text=ABUJA+ELITE", href: "#" },
          { logoUrl: "https://via.placeholder.com/120x36/D4AF37/FFFFFF?text=DUBAI+STYLE", href: "#" },
          { logoUrl: "https://via.placeholder.com/120x36/D4AF37/FFFFFF?text=LONDON+FIT", href: "#" },
          { logoUrl: "https://via.placeholder.com/120x36/D4AF37/FFFFFF?text=AFRICAN+PRIDE", href: "#" },
        ]}
      />

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

      {/* Style App Showcase Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#FFF8E1] via-[#FFF3CD] to-[#FFE082] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF6B6B]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Content Side */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse"></span>
                <span className="text-[#0B1221] text-[10px] font-black uppercase tracking-[0.3em]">Coming Soon</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-[#0B1221] tracking-tight">
                Your Style, <br />
                <span className="italic" style={{ background: 'linear-gradient(135deg, #D4AF37, #FF6B6B, #00BCD4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Reimagined</span>
              </h2>

              <p className="text-lg text-[#0B1221]/70 leading-relaxed max-w-[500px]">
                The Hills Clothiers app brings our bespoke experience to your fingertips. AI-powered style recommendations, virtual fittings, and seamless ordering — all from your phone.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: 'auto_awesome', title: 'AI Styling', desc: 'Personalized outfit recommendations' },
                  { icon: 'view_in_ar', title: 'Virtual Try-On', desc: 'See how outfits look on you' },
                  { icon: 'local_offer', title: 'Exclusive Deals', desc: 'App-only discounts & early access' },
                  { icon: 'trending_up', title: 'Trend Alerts', desc: 'Stay ahead with curated trends' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1221] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-gold text-lg">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1221] mb-0.5">{feature.title}</h4>
                      <p className="text-xs text-[#0B1221]/50">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#0B1221] text-white font-semibold rounded-2xl hover:bg-[#0B1221]/90 transition-all hover:scale-[1.02] shadow-lg">
                  <span className="material-icons text-xl">apple</span>
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider opacity-60 block leading-none">Download on the</span>
                    <span className="text-sm font-bold leading-none">App Store</span>
                  </div>
                </button>
                <button className="inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#0B1221] text-white font-semibold rounded-2xl hover:bg-[#0B1221]/90 transition-all hover:scale-[1.02] shadow-lg">
                  <span className="material-icons text-xl">shop</span>
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider opacity-60 block leading-none">Get it on</span>
                    <span className="text-sm font-bold leading-none">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/60 group">
                <img
                  src="/assets/app_showcase.png"
                  alt="Hills Clothiers Mobile App Showcase"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4 border border-gold/20">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                  <span className="material-icons text-black text-2xl">phone_iphone</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1221]">15M+ Downloads</p>
                  <p className="text-[10px] text-[#0B1221]/50 font-medium uppercase tracking-wider">Fashion Lifestyle App</p>
                </div>
              </div>
            </div>

          </div>
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

      {/* Customer Reviews - Scrolling Columns */}
      <section className="py-24 bg-[#05070A] relative overflow-hidden">
        <div className="container z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <div className="flex justify-center">
              <div className="border border-gold/30 py-1.5 px-5 rounded-full text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                Client Stories
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mt-6 text-white text-center">
              Voices of <span className="text-gold italic">Distinction</span>
            </h2>
            <p className="text-center mt-5 text-slate-400 leading-relaxed">
              Hear from those who trust Hills Clothiers to define their legacy through style.
            </p>
          </motion.div>

          {(() => {
            const testimonials = [
              {
                text: "My senator suit from Hills Clothiers turned heads at the governor's gala. The fabric quality and precision tailoring are genuinely world-class.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "Chief Emeka Obi",
                role: "Business Executive",
              },
              {
                text: "I've ordered corporate suits from London and Milan, but nothing compares to the bespoke experience at Hills. They understand the modern African professional.",
                image: "https://randomuser.me/api/portraits/men/45.jpg",
                name: "Barrister Tunde A.",
                role: "Senior Advocate",
              },
              {
                text: "The fitting process was meticulous — every measurement, every preference noted. The final piece fit like it was sculpted onto me.",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
                name: "Dr. Ifeanyi Nwosu",
                role: "Medical Director",
              },
              {
                text: "Hills Clothiers delivered my wedding outfit to Abuja within 24 hours, perfectly packaged. The waybill tracking gave me total peace of mind.",
                image: "https://randomuser.me/api/portraits/men/55.jpg",
                name: "Engr. Musa Bello",
                role: "Project Engineer",
              },
              {
                text: "As someone who values understated luxury, Hills gets it. The fabric selection is premium, the cuts are sharp, and the attention to detail is unmatched.",
                image: "https://randomuser.me/api/portraits/men/67.jpg",
                name: "Hon. Olusola Adeyemi",
                role: "Public Representative",
              },
              {
                text: "I ordered a custom casual collection for my vacation — the cotton blends, the stitching, the silhouette. Everything screamed quality craftsmanship.",
                image: "https://randomuser.me/api/portraits/men/12.jpg",
                name: "Chidera Eze",
                role: "Tech Entrepreneur",
              },
              {
                text: "Their Academy program is brilliant. I enrolled my apprentice and within months, his tailoring skills improved dramatically. Hills invests in the next generation.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "Madam Funke Ojo",
                role: "Fashion Designer",
              },
              {
                text: "From the initial consultation to the final delivery, every touchpoint felt premium. This is what luxury service should look like in Nigeria.",
                image: "https://randomuser.me/api/portraits/men/36.jpg",
                name: "Alhaji Yusuf Ibrahim",
                role: "Real Estate Developer",
              },
              {
                text: "I've been a loyal client for 5 years. Every new collection pushes the boundaries of what African menswear can be. Simply visionary.",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                name: "Pastor David Okoro",
                role: "Church Leader",
              },
            ];

            const firstColumn = testimonials.slice(0, 3);
            const secondColumn = testimonials.slice(3, 6);
            const thirdColumn = testimonials.slice(6, 9);

            return (
              <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                <TestimonialsColumn testimonials={firstColumn} duration={15} />
                <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
              </div>
            );
          })()}
        </div>
      </section>
    </div >
  );
};

export default Home;
