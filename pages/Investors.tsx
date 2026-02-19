
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { year: 'FY23', revenue: 1.2, color: '#ecc81333' },
  { year: 'FY24 (Est)', revenue: 2.8, color: '#ecc81366' },
  { year: 'FY25 (Proj)', revenue: 5.4, color: '#ecc81399' },
  { year: 'FY26 (Proj)', revenue: 9.1, color: '#ecc813' },
];

const Investors: React.FC = () => {
  return (
    <div className="bg-background-dark text-white font-manrope animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" alt="Corporate" />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="inline-block px-6 py-2 border border-gold/30 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-10 rounded-full bg-gold/5">Investor Relations</span>
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.9] mb-10 tracking-tighter">
            Scaling <br /> <span className="gold-text-gradient italic font-normal">Sartorial</span> Equity.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl leading-relaxed italic font-display">
            HILLS CLOTHIERS is pioneering the digital-first luxury menswear ecosystem across Sub-Saharan Africa. Join our trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button className="btn-primary px-12 py-5 text-[10px] tracking-widest uppercase">Request Pitch Deck</button>
            <button className="btn-outline px-12 py-5 text-[10px] tracking-widest uppercase border-gold/20 text-gold">Executive Summary</button>
          </div>
        </div>
      </section>

      {/* Market Metrics */}
      <section className="py-32 bg-background-dark border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-none">The <span className="text-gold italic">Advantage</span></h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">Nigeria's luxury male fashion sector is projected to reach $1.2B by 2027. We are positioned at the critical intersection of heritage craftsmanship and global scalability.</p>
              <div className="grid grid-cols-2 gap-10">
                <div className="p-10 bg-gold/5 border-l-4 border-gold rounded-r-3xl">
                  <span className="block text-5xl font-display font-bold mb-4">18.5%</span>
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Growth CAGR</span>
                </div>
                <div className="p-10 bg-gold/5 border-l-4 border-gold rounded-r-3xl">
                  <span className="block text-5xl font-display font-bold mb-4">72%</span>
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Retention Rate</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-dark p-12 rounded-[2.5rem] border border-gold/10 h-[550px] flex flex-col shadow-2xl">
              <div className="flex justify-between items-center mb-12">
                <h4 className="font-bold uppercase tracking-[0.4em] text-[10px] text-slate-400 italic">Projected Annual Revenue (Million USD)</h4>
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis dataKey="year" stroke="#D4AF37" fontSize={10} tickLine={false} axisLine={false} tick={{ dy: 10 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0B1221', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '16px', color: '#fff', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}
                      cursor={{ fill: 'rgba(212, 175, 55, 0.05)' }}
                    />
                    <Bar dataKey="revenue" radius={[12, 12, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color.replace('#ecc813', '#D4AF37')} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-32 bg-primary/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl md:text-7xl font-display font-bold mb-32 tracking-tight">Our <span className="text-gold italic">Trajectory</span></h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/10 hidden md:block"></div>
            <div className="space-y-40">
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-[45%] text-right hidden md:block pr-20">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-4 block">2024 | Phase 01</span>
                  <h3 className="text-3xl font-display font-bold mb-6">Flagship Digital Hub</h3>
                  <p className="text-slate-400 font-medium leading-relaxed italic">Launching our 5,000 sq.ft hybrid showroom and precision fulfillment center in Victoria Island, Lagos.</p>
                </div>
                <div className="w-20 h-20 bg-gold rounded-full border-[10px] border-primary z-10 flex items-center justify-center shadow-2xl shadow-gold/20">
                  <span className="material-icons text-black text-2xl">architecture</span>
                </div>
                <div className="md:w-[45%] pl-20">
                  <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] transition-all duration-1000 border border-gold/10 shadow-2xl" alt="Lagos Hub" />
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="md:w-[45%] text-left hidden md:block pl-20">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-4 block">2025 | Phase 02</span>
                  <h3 className="text-3xl font-display font-bold mb-6">Pan-African Clusters</h3>
                  <p className="text-slate-400 font-medium leading-relaxed italic">Strategic expansion into Accra and Nairobi with localized artisanal clusters and micro-factories.</p>
                </div>
                <div className="w-20 h-20 bg-primary border-[10px] border-gold/20 rounded-full z-10 flex items-center justify-center">
                  <span className="material-icons text-gold text-2xl">public</span>
                </div>
                <div className="md:w-[45%] pr-20">
                  <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] transition-all duration-1000 border border-gold/10 shadow-2xl" alt="African Markets" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-32 bg-background-dark pb-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-dark p-16 rounded-[3rem] border border-gold/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 -mr-32 -mt-32 rounded-full blur-[100px]"></div>
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-5xl font-display font-bold mb-4">Strategic Inquiry</h2>
              <p className="text-slate-400 font-medium italic">Contact our founding office for fiscal statements and deck access.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">Full Name</label>
                <input type="text" className="w-full bg-black/30 border border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all text-gold font-bold" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">Professional Email</label>
                <input type="email" className="w-full bg-black/30 border border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all text-gold font-bold" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">Equity Interest</label>
                <select className="w-full bg-black/30 border border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all text-gold font-bold appearance-none cursor-pointer">
                  <option className="bg-primary">$250k - $750k</option>
                  <option className="bg-primary">$750k - $1.5M</option>
                  <option className="bg-primary">$1.5M - $5M+</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">Primary Region</label>
                <input type="text" className="w-full bg-black/30 border border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all text-gold font-bold" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">Comments / Mandate</label>
                <textarea rows={5} className="w-full bg-black/30 border border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold focus:border-gold transition-all text-gold font-bold" />
              </div>
              <button className="md:col-span-2 btn-primary py-6 text-[11px] font-bold uppercase tracking-[0.3em] shadow-2xl">Initialize Connection</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
