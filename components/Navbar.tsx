
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: Page.HOME },
    { label: 'Shop', page: Page.SHOP },
    { label: 'Custom Orders', page: Page.CUSTOM_ORDER },
    { label: 'Academy', page: Page.ACADEMY },
    { label: 'Our Story', page: Page.ABOUT },
    { label: 'Investors', page: Page.INVESTORS },
    { label: 'Contact', page: Page.CONTACT }
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-[60] transition-all duration-500 h-20 border-b ${isMenuOpen ? 'bg-transparent border-transparent' : 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-gold/20'}`}>
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button
            onClick={() => handleNavigate(Page.HOME)}
            className="flex items-center gap-3 relative z-[70] group"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-gold/30 group-hover:border-gold transition-colors">
              <img src="/assets/logo.png" alt="HILLS Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter text-primary dark:text-white">
              HILLS <span className="text-gold">CLOTHIERS</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`nav-link ${currentPage === item.page ? 'text-gold' : 'text-slate-600 dark:text-slate-400 hover:text-gold'} transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 relative z-[110]">
          <button className="p-2 hover:bg-gold/10 dark:hover:bg-gold/10 rounded-full transition-colors hidden sm:block">
            <span className="material-icons text-xl dark:text-gold">search</span>
          </button>
          <button
            onClick={() => handleNavigate(Page.CHECKOUT)}
            className="p-2 hover:bg-gold/10 dark:hover:bg-gold/10 rounded-full transition-colors relative"
          >
            <span className="material-icons text-xl dark:text-gold">shopping_bag</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></span>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all border border-gold/20 shadow-lg ${isMenuOpen ? 'bg-gold text-black border-gold rotate-90 shadow-gold/40' : 'bg-gold/10 text-gold hover:bg-gold/20'}`}
          >
            <span className="material-icons text-xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Luxury Menu Overlay */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-[100] transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="h-full flex flex-col overflow-y-auto custom-scrollbar">
          <div className="flex-1 flex flex-col justify-center items-center px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-20 max-w-7xl w-full">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-4 px-4 py-2 border border-gold/20 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                  <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] italic">Navigation Matrix</span>
                </div>

                <div className="flex flex-col items-start gap-4 md:gap-6">
                  {navItems.map((item, idx) => (
                    <button
                      key={item.page}
                      onClick={() => handleNavigate(item.page)}
                      className="group flex items-center gap-8 text-left"
                    >
                      <span className="text-gold/20 text-2xl font-display italic font-bold group-hover:text-gold transition-colors hidden sm:block">0{idx + 1}</span>
                      <span className={`text-5xl md:text-8xl font-display font-bold tracking-tighter transition-all group-hover:translate-x-4 ${currentPage === item.page ? 'text-gold italic underline underline-offset-[16px] decoration-1' : 'text-white hover:text-gold'}`}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex flex-col justify-between py-10 border-l border-gold/10 pl-20">
                <div className="space-y-12">
                  <div>
                    <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block opacity-50 italic">Administrative Control</h4>
                    <button
                      onClick={() => handleNavigate(Page.DASHBOARD)}
                      className="btn-primary w-full py-8 flex items-center justify-center gap-4 text-[11px] tracking-[0.3em] group"
                    >
                      <span className="material-icons group-hover:rotate-180 transition-transform duration-700">vignette</span>
                      ENTER COMMAND CENTER
                    </button>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block opacity-50 italic">Global Headquarters</h4>
                    <p className="text-slate-200 text-xl font-display italic leading-relaxed">
                      12B Admiralty Way, <br />
                      Lekki Phase 1, Lagos.
                    </p>
                    <p className="text-gold font-bold text-2xl tracking-tighter">+234 800-HILLS-BESPOKE</p>
                  </div>
                </div>

                <div className="flex gap-12 pt-12 border-t border-gold/5">
                  <a href="#" className="text-slate-500 hover:text-gold transition-colors text-[10px] font-bold uppercase tracking-widest">Instagram</a>
                  <a href="#" className="text-slate-500 hover:text-gold transition-colors text-[10px] font-bold uppercase tracking-widest">Twitter</a>
                  <a href="#" className="text-slate-500 hover:text-gold transition-colors text-[10px] font-bold uppercase tracking-widest">Bespoke PR</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden p-10 border-t border-gold/10 bg-gold/5 text-center">
            <p className="text-[10px] text-gold/40 uppercase tracking-[0.5em] font-black italic mb-2">HILLS CLOTHIERS • LAGOS • LONDON • DUBAI</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
