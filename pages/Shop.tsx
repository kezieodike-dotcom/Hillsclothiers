
import React, { useState } from 'react';
import { Page, Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface ShopProps {
  onNavigate: (page: Page) => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Premium Senators');

  const categories = [
    { name: 'Premium Senators', count: 24 },
    { name: 'Corporate Wear', count: 18 },
    { name: 'Bespoke Suits', count: 12 },
    { name: 'Luxury Casuals', count: 31 },
    { name: 'Accessories', count: 9 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      {/* Top Banner */}
      <div className="bg-gold text-black py-3 px-6 text-center text-[10px] font-bold tracking-[0.3em] uppercase mb-12 rounded-full">
        Complimentary Nationwide Delivery on Bespoke Orders
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">The Collection</h1>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            <button onClick={() => onNavigate(Page.HOME)} className="hover:text-gold transition-colors">Home</button>
            <span>/</span>
            <span className="text-gold">Shop</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-surface-dark px-6 py-3 rounded-full border border-slate-200 dark:border-gold/10">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Sort By</span>
          <select className="bg-transparent border-none focus:ring-0 text-xs font-bold uppercase tracking-widest text-gold cursor-pointer">
            <option>Latest Pieces</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-12 shrink-0">
          <section>
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6 text-slate-400 italic">Categories</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat.name}>
                  <button
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex justify-between items-center w-full group py-1 ${selectedCategory === cat.name ? 'text-gold' : 'text-slate-600 dark:text-slate-400 hover:text-gold transition-colors'}`}
                  >
                    <span className="text-sm font-semibold tracking-wide uppercase">{cat.name}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${selectedCategory === cat.name ? 'bg-gold/10 text-gold' : 'bg-slate-100 dark:bg-gold/5 text-slate-500'}`}>
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6 text-slate-400 italic">Material Shade</h3>
            <div className="flex flex-wrap gap-3">
              {['#000000', '#0B1221', '#1A1A1A', '#F5F5F7', '#2A3D34', '#D4AF37'].map(color => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border border-slate-200 dark:border-gold/20 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6 text-slate-400 italic">Precision Sizing</h3>
            <div className="grid grid-cols-3 gap-3">
              {['SM', 'MD', 'LG', 'XL', 'XXL', '3XL'].map(size => (
                <button key={size} className={`py-2 text-[10px] font-bold border rounded-lg transition-all ${size === 'MD' ? 'border-gold bg-gold/5 text-gold' : 'border-slate-200 dark:border-gold/10 hover:border-gold'}`}>
                  {size}
                </button>
              ))}
            </div>
          </section>

          <button onClick={() => onNavigate(Page.CUSTOM_ORDER)} className="w-full btn-outline text-[10px] text-center">
            Request Bespoke Fit
          </button>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
            {MOCK_PRODUCTS.map(product => (
              <div key={product.id} className="group cursor-pointer" onClick={() => onNavigate(Page.CHECKOUT)}>
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-50 dark:bg-surface-dark mb-6 rounded-2xl shadow-lg border border-slate-100 dark:border-gold/5">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={product.image} alt={product.name} />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-gold text-black text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full bg-black text-gold border border-gold/30 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-2xl hover:bg-gold hover:text-black transition-all">
                      Acquire Piece
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h2 className="font-display text-2xl group-hover:text-gold transition-colors">{product.name}</h2>
                    <p className="text-gold font-bold text-sm">₦{product.price.toLocaleString()}</p>
                  </div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold italic">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex justify-center items-center space-x-6">
            <button className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold hover:bg-gold hover:text-black transition-all rounded-full shadow-lg">
              <span className="material-icons text-lg">chevron_left</span>
            </button>
            <div className="flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center bg-gold text-black font-bold rounded-xl shadow-gold/20 shadow-xl">1</button>
              <button className="w-12 h-12 flex items-center justify-center border border-gold/10 hover:border-gold transition-all rounded-xl text-slate-500">2</button>
            </div>
            <button className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold hover:bg-gold hover:text-black transition-all rounded-full shadow-lg">
              <span className="material-icons text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
