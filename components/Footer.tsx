
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-gold/20 py-20 mt-20 bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gold/20">
                <img src="/assets/logo.png" alt="HILLS Logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-4xl font-display font-bold tracking-tighter text-white">
                HILLS <span className="text-gold">CLOTHIERS</span>
              </div>
            </div>
            <p className="max-w-sm text-slate-400 italic text-lg leading-relaxed">
              "The intersection of heritage and modernity. Crafted in Nigeria for the global visionary."
            </p>
          </div>
          <div>
            <h5 className="uppercase tracking-[0.2em] text-[10px] font-bold text-gold mb-8 italic">Navigation</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              <li><button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-gold transition-colors">Our Story</button></li>
              <li><button onClick={() => onNavigate(Page.SHOP)} className="hover:text-gold transition-colors">Digital Atelier</button></li>
              <li><button onClick={() => onNavigate(Page.ACADEMY)} className="hover:text-gold transition-colors">Design Academy</button></li>
              <li><button onClick={() => onNavigate(Page.INVESTORS)} className="hover:text-gold transition-colors">Investors</button></li>
              <li><button onClick={() => onNavigate(Page.HOME)} className="hover:text-gold transition-colors">Concierge</button></li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase tracking-[0.2em] text-[10px] font-bold text-gold mb-8 italic">Inquiries</h5>
            <p className="text-sm font-medium mb-2 text-slate-200">concierge@hillsclothiers.com</p>
            <p className="text-sm font-medium text-slate-200">+234 (0) 800 HILLS HUB</p>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="w-12 h-12 border border-gold/30 flex items-center justify-center rounded-full hover:bg-gold hover:text-black transition-all">
                <span className="material-icons text-sm">camera_alt</span>
              </a>
              <a href="#" className="w-12 h-12 border border-gold/30 flex items-center justify-center rounded-full hover:bg-gold hover:text-black transition-all">
                <span className="material-icons text-sm">alternate_email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          <div className="flex gap-10">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">LinkedIn</a>
            <a href="#" className="hover:text-gold">Twitter</a>
          </div>
          <div className="mt-6 md:mt-0">
            © 2024 HILLS CLOTHIERS. EXCELLENCE REIMAGINED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
