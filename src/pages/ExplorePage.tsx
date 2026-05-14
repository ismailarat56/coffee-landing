import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Coffee } from 'lucide-react';
import { BRANCHES } from '../data/mockData';
import { Branch } from '../types';
import { cn } from '../lib/utils';

export default function ExplorePage() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(BRANCHES[0]);

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-gold-brand font-bold uppercase tracking-[0.3em] text-sm">Lokasyonlar</span>
          <h1 className="font-serif text-5xl font-bold text-indigo-brand leading-tight">Bize <span className="text-gold-brand italic">Her Yerde</span> Ulaşabilirsiniz</h1>
          <p className="text-indigo-brand/60 text-lg">İstanbul'dan Maraş'a, Türkiye'nin dört bir yanında kahve tutkumuzu şubelerimizde yaşatıyoruz.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* List of Branches */}
          <div className="lg:col-span-4 space-y-4">
            {BRANCHES.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(branch)}
                className={cn(
                  "w-full text-left p-6 rounded-3xl transition-all duration-300 border active:scale-95",
                  selectedBranch?.id === branch.id
                    ? "bg-white border-gold-brand shadow-xl shadow-gold-brand/10 ring-1 ring-gold-brand"
                    : "bg-white border-indigo-brand/5 hover:border-indigo-brand/20 shadow-sm"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-indigo-brand/5 rounded-2xl flex items-center justify-center text-indigo-brand">
                    <MapPin size={24} />
                  </div>
                  {selectedBranch?.id === branch.id && (
                    <span className="bg-gold-brand text-cream-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Şu An Seçili</span>
                  )}
                </div>
                <h3 className="font-serif text-2xl font-bold text-indigo-brand mb-1">{branch.city}</h3>
                <p className="text-indigo-brand/50 text-sm mb-4 leading-relaxed line-clamp-2">{branch.address}</p>
                <div className="flex items-center gap-4 text-xs font-bold text-gold-brand">
                  <span className="flex items-center gap-1"><Clock size={14} /> 08:00 - 23:00</span>
                  <span className="flex items-center gap-1"><Navigation size={14} /> 2.4 km</span>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Map Component */}
          <div className="lg:col-span-8 bg-indigo-brand rounded-[3rem] overflow-hidden min-h-[600px] relative shadow-2xl p-8 flex flex-col items-center">
            <h4 className="text-cream-brand/40 text-xs font-bold uppercase tracking-[0.4em] mb-12">Türkiye Şube Haritası</h4>
            
            <div className="relative w-full max-w-4xl aspect-[2/1] bg-indigo-brand/40 rounded-full border border-white/5 p-4 md:p-8 flex items-center justify-center">
              {/* Real Turkey Map Silhouette */}
              <svg viewBox="0 0 1000 500" className="w-full h-full text-white/5 opacity-40 group-hover:opacity-60 transition-opacity">
                <path 
                  fill="currentColor"
                  d="M185.35,321.13c-0.63-0.56-1.39-2.91-1.69-5.21c-0.45-3.48,0.51-5.32,3.31-6.31c2.18-0.77,5.55-2.28,7.5-3.35c2.39-1.31,4.35,0.73,6.34,6.61c0.77,2.27,1.83,4.13,2.37,4.13c0.53,0,1.52,2.02,2.2,4.49c1,3.61,2.05,4.72,3.95,4.14c1.19-0.36,6.37-6.07,11.52-12.69c8.29-10.66,10.22-12.72,13.62-14.54c5.07-2.73,8.02-3.38,15.7-3.46c6.16-0.07,10.2-0.57,12.98-1.62c4.14-1.57,11.53-7.53,15.93-12.83c1.76-2.12,3.2-4.14,3.2-4.5c0-1.74,13.06,1,23.36,4.92c10.37,3.94,22.18,9,26.24,11.24s12.59,7.66,19.01,12.04c10.45,7.12,17.2,10.74,27.18,14.57c15.2,5.83,27.02,7.24,53.48,6.37c15.2-0.5,23.23,0.06,29.98,2c11,3.16,33.09,1.14,40.42-3.69c1.94-1.28,3.53-2.14,3.53-1.9c0,0.24-4.86,3.65-10.8,7.57c-5.94,3.92-12.6,9.15-14.81,11.62c-3.13,3.5-4.21,6.58-10.65,30.34c-4.48,16.5-7.79,23.86-9.67,21.5c-0.42-0.53,0.18-2.61,1.34-4.63c1.16-2,1.35-4.32,0.41-5.15c-0.93-0.83-5.32,0.67-9.76,3.33c-10.15,6.1-12.82,14.65-7.14,23.01c2.14,3.15,2.02,3.77-0.78,4.19c-11.45,1.73-15.54,6.72-20.73,25.29c-3.33,11.96-7.05,17.47-16.14,23.95c-7,5-8,6.23-8,10c0,5.7-8.39,11.89-14.28,10.54c-2.31-0.53-6.26-2.34-8.77-4.01c-6.1-4.06-12.33-14.63-12.33-20.93c0-3.37-4.24-5.69-12.58-6.88c-7.23-1.04-8.52-1.74-9.31-5.07c-0.65-2.73-2.07-5-3.14-5.04c-1.08-0.04-1.95,1.37-1.95,3.13c0,2.15-0.89,3.19-2.58,3.02c-1.35-0.14-3.51-1.39-4.81-2.77s-3.52-2.51-4.94-2.51c-4.52,0-9.69,7.63-11.23,16.56c-0.63,3.67-1.59,6.72-2.14,6.77s-1-4.31-1-9.7c0-11-2.13-16.89-8.47-23.4l-5.62-5.78l-5.3,0.67c-13.06,1.66-26.68-7.79-28.78-20.01c-0.53-3.13-1.63-5.21-2.45-4.62c-0.83,0.59-1,2.69-0.38,4.67c0.88,2.83,0.56,3.64-0.97,2.44c-1.08-0.84-2.36,0.3-2.84,2.54c-1.12,5.21-11.21,11-19.16,11c-12.32,0-15.69,5.78-14.61,25.07c0.35,6.38,0.3,13.84-0.12,16.57c-1,6.58-12.44,17.43-16,15.19c-1-0.63-1.81-4.24-1.81-8c0-5-2.03-8.82-5.67-10.74c-4.13-2.17-5.18-12.38-1.53-14.94c0.86-0.61,4.3,0.22,7.64,1.83c5.3,2.55,6.07,2.37,6.07-1.42c0-8.62,11.53-29.35,16.57-30.13c2.23-0.35,3.22-1.28,2.2-2.09c-1.46-1.15-1.12-10.51,0.5-13.56c1.1-2.07,10-14.07,10-13.43c0,0.21-2.61,1.15-5.81,2.07s-6.3,2.49-6.9,3.48c-0.6,0.99-1.5,1.2-2,0.47C186.2,323.01,186.2,321.89,185.35,321.13z" 
                />
              </svg>

              {/* Branch Markers */}
              {BRANCHES.map((branch) => {
                const isSelected = selectedBranch?.id === branch.id;
                let coords = { left: '0%', top: '0%' };
                if (branch.id === 'istanbul') coords = { left: '24%', top: '32%' };
                if (branch.id === 'antalya') coords = { left: '34.5%', top: '75%' };
                if (branch.id === 'maras') coords = { left: '74%', top: '65%' };

                return (
                  <motion.button
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch)}
                    className="absolute z-20 group"
                    style={coords}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className={cn(
                      "relative flex items-center justify-center transition-all duration-300",
                      isSelected ? "scale-125" : ""
                    )}>
                      <div className={cn(
                        "absolute inset-0 bg-gold-brand rounded-full animate-ping opacity-40",
                        isSelected ? "opacity-60" : "hidden"
                      )} />
                      <div className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center border-2 border-white shadow-xl transition-colors",
                        isSelected ? "bg-gold-brand" : "bg-indigo-brand hover:bg-gold-brand"
                      )}>
                        <Coffee size={12} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white text-indigo-brand px-4 py-2 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none border border-indigo-brand/5">
                      <p className="text-xs font-black uppercase tracking-widest">{branch.city}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Selection Card (Bottom overlay) */}
            <AnimatePresence mode="wait">
              {selectedBranch && (
                <motion.div
                  key={selectedBranch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-12 w-full max-w-xl bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 flex flex-col md:flex-row gap-10 items-center shadow-2xl"
                >
                  <div className="shrink-0 w-28 h-28 bg-gold-brand rounded-[2rem] flex items-center justify-center text-cream-brand shadow-2xl shadow-gold-brand/20">
                    <Coffee size={48} />
                  </div>
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-cream-brand">{selectedBranch.city} Şubesi</h3>
                      <p className="text-cream-brand/60 text-base leading-relaxed font-light">{selectedBranch.address}</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <button className="bg-gold-brand text-indigo-brand px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all active:scale-95 shadow-xl shadow-gold-brand/10">
                        <Navigation size={16} /> YOL TARİFİ
                      </button>
                      <button className="bg-white/5 border border-white/10 text-cream-brand px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all">
                        <Phone size={16} /> İLETİŞİM
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
