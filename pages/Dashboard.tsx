
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Week 1', sales: 130 },
  { name: 'Week 2', sales: 100 },
  { name: 'Week 3', sales: 80 },
  { name: 'Week 4', sales: 20 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-background-dark font-manrope overflow-hidden text-slate-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-primary text-white flex flex-col border-r border-gold/10 shrink-0">
        <div className="p-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl overflow-hidden border border-gold/30 shadow-lg shadow-gold/20">
            <img src="/assets/logo.png" alt="HILLS Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-tighter">HILLS</h1>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold">Admin Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-6 py-10 space-y-3">
          <a className="flex items-center gap-5 px-6 py-4 bg-gold text-black rounded-2xl font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-gold/10" href="#">
            <span className="material-icons text-lg">dashboard</span>
            Overview
          </a>
          {['Products', 'Bespoke Orders', 'Materials', 'Clients', 'Analytics', 'Settings'].map(item => (
            <a key={item} className="flex items-center gap-5 px-6 py-4 text-slate-400 hover:text-gold hover:bg-gold/5 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all" href="#">
              <span className="material-icons text-lg">
                {item === 'Products' ? 'inventory_2' :
                  item === 'Bespoke Orders' ? 'straighten' :
                    item === 'Materials' ? 'texture' :
                      item === 'Clients' ? 'people' :
                        item === 'Analytics' ? 'leaderboard' : 'settings'}
              </span>
              {item}
            </a>
          ))}
        </nav>

        <div className="p-8 border-t border-gold/5">
          <div className="flex items-center gap-4 p-5 bg-gold/5 rounded-[2rem] border border-gold/10">
            <img className="w-12 h-12 rounded-full object-cover border-2 border-gold/30" src="/assets/director_portrait.png" alt="Executive Director" />
            <div className="overflow-hidden">
              <p className="text-[11px] font-bold truncate">Ugwu Nnamdi E.</p>
              <p className="text-[9px] text-gold/60 uppercase font-black tracking-widest text-nowrap">Executive Director</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-28 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-slate-200 dark:border-gold/10 flex items-center justify-between px-16 sticky top-0 z-10">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <span className="material-icons absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gold transition-colors">search</span>
              <input className="w-full pl-14 pr-8 py-4 bg-slate-100 dark:bg-surface-dark border-none rounded-2xl text-[11px] font-bold uppercase tracking-widest focus:ring-1 focus:ring-gold transition-all" placeholder="Search orders, clients, textiles..." />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <button className="relative text-slate-400 p-3 hover:bg-slate-100 dark:hover:bg-gold/5 rounded-2xl transition-all">
                <span className="material-icons">notifications</span>
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-gold border-2 border-white dark:border-background-dark rounded-full"></span>
              </button>
              <button className="text-slate-400 p-3 hover:bg-slate-100 dark:hover:bg-gold/5 rounded-2xl transition-all">
                <span className="material-icons">chat</span>
              </button>
            </div>
            <div className="h-10 w-px bg-slate-200 dark:bg-gold/10"></div>
            <button className="btn-primary px-10 py-4 text-[10px] tracking-widest uppercase flex items-center gap-3">
              <span className="material-icons text-sm">add_box</span>
              New Order
            </button>
          </div>
        </header>

        <div className="p-16">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-5xl font-display font-bold mb-3 tracking-tight">System <span className="text-gold italic">Overview</span></h2>
              <p className="text-slate-500 font-medium italic">Monitor the heartbeat of HILLS craftsmanship today.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-white dark:bg-surface-dark rounded-xl border border-gold/10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                System Hub: <span className="text-gold">Operational</span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-16">
            {[
              { label: 'Daily Revenue', value: '₦4,850k', change: '+22.4%', icon: 'payments', color: 'gold' },
              { label: 'Active Suits', value: '58', change: '8 Overdue', icon: 'checkroom', color: 'slate' },
              { label: 'Studio Visits', value: '14', change: 'Today', icon: 'event_available', color: 'gold' },
              { label: 'Textile Stock', value: '185m', change: 'Low: Navy', icon: 'texture', color: 'slate' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark p-10 rounded-[2.5rem] border border-slate-100 dark:border-gold/5 shadow-2xl relative overflow-hidden group hover:border-gold/30 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-gold/10 transition-all"></div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <span className="material-icons text-2xl">{stat.icon}</span>
                  </div>
                  <span className={`text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest ${idx % 2 === 0 ? 'bg-gold/10 text-gold' : 'bg-slate-100 dark:bg-black/30 text-slate-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">{stat.label}</p>
                <h3 className="text-4xl font-display font-bold">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Visual Data */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            <div className="xl:col-span-2 bg-white dark:bg-surface-dark p-12 rounded-[3.5rem] border border-slate-100 dark:border-gold/5 shadow-2xl">
              <div className="flex items-center justify-between mb-16">
                <div>
                  <h3 className="font-display font-bold text-3xl mb-1">Revenue <span className="text-gold italic">Velocity</span></h3>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest italic">Temporal Performance Analytics</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-slate-50 dark:bg-black/20 rounded-xl text-[9px] font-bold uppercase tracking-widest text-gold border border-gold/10">WTD</button>
                  <button className="px-6 py-3 bg-transparent rounded-xl text-[9px] font-bold uppercase tracking-widest text-slate-400">MTD</button>
                </div>
              </div>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="dashboardGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="rgba(212, 175, 55, 0.2)" fontSize={10} axisLine={false} tickLine={false} tick={{ dy: 15 }} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0B1221', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.2)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}
                      cursor={{ stroke: '#D4AF37', strokeWidth: 1, strokeDasharray: '4 4' }}
                      labelClassName="hidden"
                    />
                    <Area type="monotone" dataKey="sales" stroke="#D4AF37" strokeWidth={5} fillOpacity={1} fill="url(#dashboardGrad)" animationDuration={2000} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark p-12 rounded-[3.5rem] border border-slate-100 dark:border-gold/5 shadow-2xl">
              <h3 className="font-display font-bold text-3xl mb-12">Textile <span className="text-gold italic">Reach</span></h3>
              <div className="space-y-10">
                {[
                  { name: 'Senator Wool', val: 88, color: 'bg-gold' },
                  { name: 'Italian Suitings', val: 72, color: 'bg-gold/60' },
                  { name: 'Damask Cotton', val: 56, color: 'bg-gold/30' },
                  { name: 'Silk Linings', val: 41, color: 'bg-slate-200' }
                ].map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-gold transition-colors">{cat.name}</p>
                      <span className="text-[11px] font-black text-gold italic">{cat.val}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-black/20 h-2.5 rounded-full overflow-hidden">
                      <div className={`${cat.color} h-full rounded-full transition-all duration-[2000ms] ease-out`} style={{ width: `${cat.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-20 py-5 text-[9px] font-bold text-gold border border-dashed border-gold/20 rounded-2xl hover:bg-gold/5 transition-all uppercase tracking-widest">
                View Inventory Matrix
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
