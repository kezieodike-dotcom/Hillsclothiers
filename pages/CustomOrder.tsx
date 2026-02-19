
import React, { useState } from 'react';
import { Page } from '../types';

interface CustomOrderProps {
  onNavigate: (page: Page) => void;
}

const CustomOrder: React.FC<CustomOrderProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(3);

  const steps = [
    { id: 1, label: 'Style Selection' },
    { id: 2, label: 'Fabric Selection' },
    { id: 3, label: 'Measurements' },
    { id: 4, label: 'Confirmation' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Bespoke Couture</h1>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto uppercase tracking-widest text-[11px]">Crafting your unique identity with precision and excellence.</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-20">
        <div className="flex items-center justify-between max-w-4xl mx-auto relative">
          <div className="absolute top-5 left-0 w-full h-[1px] bg-slate-200 dark:bg-gold/10 -z-10"></div>
          <div
            className="absolute top-5 left-0 h-[1px] bg-gold -z-10 transition-all duration-700"
            style={{ width: `${(step - 1) * 33}%` }}
          ></div>

          {steps.map(s => (
            <div key={s.id} className="flex flex-col items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${s.id < step ? 'bg-gold text-black shadow-lg shadow-gold/20' :
                s.id === step ? 'bg-background-dark border-2 border-gold text-gold ring-8 ring-gold/5 shadow-2xl' :
                  'bg-slate-100 dark:bg-surface-dark text-slate-400 border border-slate-200 dark:border-gold/10'
                }`}>
                {s.id < step ? <span className="material-icons text-lg">check</span> : s.id}
              </div>
              <span className={`text-[9px] uppercase tracking-[0.25em] font-bold ${s.id <= step ? 'text-gold' : 'text-slate-500'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-16 items-start">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-7 space-y-12">
          {step === 3 && (
            <div className="space-y-12">
              <div className="bg-background-dark rounded-3xl overflow-hidden border border-gold/20 shadow-2xl group relative aspect-[16/9]">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1200"
                  alt="Tailoring"
                />
                <div className="z-10 flex flex-col items-center justify-center h-full gap-6">
                  <button className="w-24 h-24 rounded-full bg-gold text-black flex items-center justify-center hover:scale-110 transition-all shadow-2xl hover:shadow-gold/30">
                    <span className="material-icons text-5xl ml-1">play_arrow</span>
                  </button>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white drop-shadow-lg bg-black/40 px-6 py-2 rounded-full border border-gold/20 backdrop-blur-sm">
                    Master Measurement Guide
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-surface-dark/50 border border-slate-200 dark:border-gold/10 rounded-3xl p-10 flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-72 h-[450px]">
                    <img
                      className="w-full h-full object-contain opacity-70"
                      src="https://images.unsplash.com/photo-1589410291178-2283a33947ca?auto=format&fit=crop&q=80&w=600"
                      alt="Tailoring Focus"
                    />
                    <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gold cursor-pointer ring-8 ring-gold/20 animate-pulse shadow-xl"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold italic">Dimension Check</h4>
                  <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Sleeve <span className="text-gold italic">Length</span></h2>
                  <p className="text-slate-500 font-medium leading-relaxed">Measure from the shoulder seam, down the outside of the arm to the desired length on the wrist (usually just below the wrist bone).</p>
                  <div className="bg-gold/5 border-l-2 border-gold p-8 mt-8 rounded-r-2xl">
                    <p className="text-xs italic text-gold font-bold leading-relaxed tracking-wide">
                      "Master's Advice: Keep your arm naturally bent at the elbow for the most dynamic fit."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Configuration */}
        <aside className="col-span-12 lg:col-span-5 space-y-12">
          <section className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 p-10 rounded-3xl shadow-xl">
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-100 dark:border-gold/5">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gold">Current Config</h3>
              <button className="text-[10px] uppercase font-bold text-slate-400 hover:text-gold transition-colors italic">Change Style</button>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border border-gold/10">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=200" alt="Fabric" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1">Textile Select</p>
                  <h4 className="text-xl font-display font-bold">Midnight Wool Blend</h4>
                  <p className="text-[10px] text-gold mt-1 uppercase tracking-widest font-bold italic">Italian Import • 150s</p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block italic">Moodboard & References</label>
                <div className="border-2 border-dashed border-slate-200 dark:border-gold/10 rounded-2xl p-10 flex flex-col items-center gap-4 hover:border-gold/50 transition-all cursor-pointer group bg-slate-50 dark:bg-black/20">
                  <span className="material-icons text-slate-300 group-hover:text-gold text-4xl transition-colors">upload_file</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Upload Inspiration</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-gold/10 p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gold mb-10 pb-4 border-b border-slate-100 dark:border-gold/5">Precision Input (Inches)</h3>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {['Neck', 'Chest', 'Shoulder', 'Waist', 'Sleeve', 'Length'].map(field => (
                <div key={field} className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block">{field}</label>
                  <input
                    type="number"
                    placeholder="0.0"
                    className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-gold/10 rounded-xl text-gold px-5 py-4 focus:ring-1 focus:ring-gold focus:border-gold text-lg font-bold"
                  />
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-gold/5 flex items-start gap-5">
              <span className="material-icons text-gold">verified</span>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-200">HILLS Fit Assurance</h5>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed italic font-medium">Every measurement is verified by our master cutting team before production begins.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <button className="bg-slate-100 dark:bg-white/5 py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                Save Draft
              </button>
              <button
                onClick={() => onNavigate(Page.CHECKOUT)}
                className="btn-primary py-5 text-[10px] tracking-widest uppercase"
              >
                Proceed to Pay 50%
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CustomOrder;
