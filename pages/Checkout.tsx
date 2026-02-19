
import React from 'react';
import { Page } from '../types';

interface CheckoutProps {
  onNavigate: (page: Page) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark font-manrope text-slate-900 dark:text-white">
      <header className="border-b border-gold/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl sticky top-0 z-50 h-24 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <button onClick={() => onNavigate(Page.HOME)} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-gold/20">
              <img src="/assets/logo.png" alt="HILLS Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              HILLS <span className="text-gold">CLOTHIERS</span>
            </span>
          </button>
          <div className="hidden md:flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
            <span className="text-gold flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-[11px]">1</span> Logistics</span>
            <span className="w-12 h-px bg-gold/20"></span>
            <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-[11px]">2</span> Payment</span>
            <span className="w-12 h-px bg-gold/20"></span>
            <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-[11px]">3</span> Review</span>
          </div>
          <button onClick={() => onNavigate(Page.SHOP)} className="text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors border-b border-gold/20 pb-1">Exit to Shop</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 space-y-16">
            <section>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-display font-bold tracking-tight">Shipping <span className="text-gold italic underline underline-offset-8 decoration-gold/20">Details</span></h2>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Legal Name</label>
                  <input className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold outline-none text-sm font-bold transition-all" placeholder="e.g. Oluwatosin Balogun" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Electronic Mail</label>
                  <input className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold outline-none text-sm font-bold transition-all" placeholder="tosin@luxury.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Direct Contact</label>
                  <input className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold outline-none text-sm font-bold transition-all" placeholder="+234 801 000 0000" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Destination Address</label>
                  <textarea rows={3} className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold outline-none text-sm font-bold transition-all" placeholder="Avenue, Estate, Penthouse Number" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Metropolis</label>
                  <select className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold outline-none text-sm font-bold transition-all appearance-none cursor-pointer">
                    <option>Lagos Central</option>
                    <option>Abuja FCT</option>
                    <option>Port Harcourt</option>
                    <option>Overseas Delivery</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Regional Code</label>
                  <input className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-gold outline-none text-sm font-bold transition-all" placeholder="101233" />
                </div>
              </form>
            </section>

            <section className="pt-10 border-t border-slate-200 dark:border-gold/10">
              <h2 className="text-4xl font-display font-bold mb-12 tracking-tight">Acquisition <span className="text-gold italic underline underline-offset-8 decoration-gold/20">Method</span></h2>

              <div className="bg-gold/5 border border-gold/10 p-10 rounded-[2.5rem] mb-12 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-bold text-lg mb-1">Commitment Deposit (50%)</h4>
                  <p className="text-sm text-slate-500 font-medium italic">Commence the bespoke crafting process. Balance settled post-fitting.</p>
                </div>
                <div className="w-16 h-8 bg-gold rounded-full relative cursor-pointer shadow-lg shadow-gold/20">
                  <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full transition-transform"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-12 border-2 border-gold bg-gold/5 rounded-[3rem] flex flex-col items-center gap-6 relative shadow-2xl">
                  <div className="w-14 h-14 bg-[#09a5db] rounded-full flex items-center justify-center text-white text-2xl font-black">P</div>
                  <span className="text-slate-900 dark:text-white text-3xl font-display font-bold tracking-tighter">Paystack</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Instant Authentication</span>
                  <div className="absolute top-8 right-8 text-gold">
                    <span className="material-icons text-3xl">verified_user</span>
                  </div>
                </div>
                <div className="p-12 border-2 border-slate-200 dark:border-gold/10 rounded-[3rem] flex flex-col items-center gap-6 opacity-40 hover:opacity-100 transition-all duration-700 cursor-pointer">
                  <div className="w-14 h-14 bg-[#f15a24] rounded-full flex items-center justify-center text-white text-2xl font-black">F</div>
                  <span className="text-slate-900 dark:text-white text-3xl font-display font-bold tracking-tighter">Flutterwave</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Regional Gateway</span>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-white dark:bg-surface-dark p-12 rounded-[3.5rem] border border-slate-100 dark:border-gold/10 shadow-2xl sticky top-36 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 -mr-20 -mt-20 rounded-full blur-3xl"></div>
              <h3 className="text-3xl font-display font-bold mb-12 tracking-tight">Selection <span className="text-gold italic">Summary</span></h3>

              <div className="space-y-10 mb-12">
                <div className="flex gap-8 group">
                  <div className="relative w-28 h-36 rounded-2xl overflow-hidden bg-slate-50 shrink-0 border border-gold/10 group-hover:border-gold/30 transition-all">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400" alt="Item" />
                    <span className="absolute -top-1 -right-1 w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center text-[10px] font-black border-4 border-white dark:border-surface-dark">1</span>
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <h4 className="font-display font-bold text-xl leading-snug">The Imperial Navy Senator</h4>
                    <p className="text-[9px] text-gold font-black uppercase tracking-[0.2em] mt-3 italic">Bespoke Fit / Italian Wool</p>
                    <span className="font-display font-bold text-slate-900 dark:text-gold mt-6 text-2xl tracking-tighter">₦185,000.00</span>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-200 dark:border-gold/5 space-y-5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-900 dark:text-white">₦185,000.00</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Surcharge (Logistics)</span>
                  <span className="text-slate-900 dark:text-white">₦5,000.00</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>VAT (7.5%)</span>
                  <span className="text-slate-900 dark:text-white">₦13,875.00</span>
                </div>
                <div className="flex justify-between pt-10">
                  <span className="text-xl font-display font-bold">Total Investment</span>
                  <span className="text-3xl font-display font-bold text-gold tracking-tighter">₦203,875.00</span>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <input className="flex-1 bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-gold/10 rounded-2xl px-6 py-5 text-[10px] font-bold uppercase tracking-widest focus:ring-1 focus:ring-gold outline-none" placeholder="Promissory Code" />
                <button className="bg-primary text-white dark:bg-gold dark:text-black px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">Apply</button>
              </div>

              <button className="w-full btn-primary py-7 rounded-3xl mt-12 shadow-2xl flex items-center justify-center gap-5 text-[11px] font-black tracking-[0.3em]">
                FINALIZE ACQUISITION
                <span className="material-icons">arrow_forward</span>
              </button>

              <p className="text-[8px] text-center text-slate-400 mt-12 uppercase tracking-[0.3em] font-bold leading-relaxed opacity-60">
                Encrypted transaction secured by <br />
                <span className="text-gold">HILLS CLOTHIERS VAULT</span>
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
