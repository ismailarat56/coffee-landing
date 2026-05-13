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
              {/* Detailed Turkey Map SVG Path */}
              <svg viewBox="0 0 800 400" className="w-full h-full fill-white/10 stroke-white/20 stroke-[0.5]">
                <path d="M40.24,197.68c-0.24-11.01,8.08-16.73,15.7-18.35c7.3-1.55,14.67-1.39,22.04-1.12c14.07,0.51,28.16,0.3,42.23-0.08 c10.36-0.28,21.03-1.63,31.25-3.32c5.96-0.98,9.75-2.52,14.77-5.54c3.48-2.09,6.96-4.18,10.15-6.68c3.21-2.52,5.7-5.75,9.52-7.55 c4.03-1.9,8.51-1.63,12.72-2.55c3.23-0.71,6.13-2.31,9.29-3.41c6.51-2.26,13.23-3.81,20.09-3.92c8.24-0.14,16.48-0.03,24.74,0 c7.45,0.03,14.89,0.13,22.34,0c7.87-0.14,15.75-0.17,23.63,0c7.09,0.15,14.21,0.58,21.28,1.21c5.95,0.53,11.83,1.48,17.78,2.2c5.92,0.72,11.83,1.5,17.76,2.15c6.57,0.72,13.2,0.96,19.78,1.55c6.77,0.6,13.48,1.82,20.25,2.44c13.78,1.26,27.57,2.25,41.43,2.44c13.4,0.18,26.83,0,40.23-0.34c8.11-0.21,16.27-1.14,24.36-1.51c7.43-0.34,14.87-0.3,22.32-0.27c13.88,0.06,27.76,0,41.65-0.03c14.33-0.03,28.67,0.3,42.98,1.02c4.08,0.21,8.19,0.67,12.24,1.1c4.52,0.48,9,1.15,13.49,1.85c5.36,0.84,10.66,2.14,15.93,3.58c5.84,1.6,11.59,3.54,17.3,5.63c4.26,1.56,8.51,3.22,12.63,5.13c5,2.32,9.81,5.26,14.3,8.71c4.76,3.66,8.78,8.27,11.64,13.62c1.97,3.68,3.52,7.74,3.75,12c0.14,2.5,0.07,4.99-0.03,7.49c-0.11,2.83-0.23,5.67-0.1,8.48c0.2,4.07,1.01,8.08,0.92,12.18c-0.06,2.78-0.5,5.62-1.34,8.27c-1.14,3.6-3.21,6.86-5.46,9.88c-4.48,6.01-11.23,9.52-18,12.12c-5.74,2.2-11.66,3.95-17.65,5.27c-9.2,2.03-18.57,3.21-27.97,3.84c-11.13,0.75-22.3,0.93-33.45,0.78c-11.02-0.15-22.04-0.13-33.05,0.34c-6.83,0.29-13.62,1.29-20.44,1.9c-8.91,0.8-17.84,1.18-26.79,1.05c-11.09-0.16-22.2-1.14-33.28-1.55c-11.09-0.41-22.18-0.25-33.27,0.1c-13.1,0.41-26.19,0.86-39.29,1.16c-13.61,0.31-27.23,0.42-40.85,0.31c-12.78-0.1-25.56,0.11-38.33,0.75c-12.75,0.64-25.54,2-38.27,3.68c-12.8,1.69-25.68,3.84-38.48,6.31c-7.39,1.43-14.77,3.12-22.25,3.32c-3.14,0.08-6.23-0.65-9.31-1.2c-5.11-0.91-10.15-2.07-15.12-3.48c-3.29-0.93-6.49-2.22-9.69-3.48c-3.83-1.51-7.66-2.91-11.41-4.71c-4.48-2.15-8.73-4.9-12.87-7.85c-4.38-3.13-8.52-6.61-12.44-10.42c-3.79-3.69-7.23-7.79-10.37-12.11c-2.43-3.34-4.52-6.91-6.15-10.74c-1.35-3.18-2.31-6.46-3.04-9.82C39.11,209.64,37.38,206.18,40.24,197.68z" />
              </svg>

              {/* Branch Markers with updated coordinate matching */}
              {BRANCHES.map((branch) => {
                // Adjust coordinates for the new SVG viewport if needed, 
                // but let's assume original ones are roughly okay for the 800x400 area
                return (
                  <motion.button
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch)}
                    className="absolute z-20 group"
                    style={{ left: `${branch.coordinates.x}%`, top: `${branch.coordinates.y}%` }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className={cn(
                      "relative flex items-center justify-center transition-all duration-300",
                      selectedBranch?.id === branch.id ? "scale-125" : ""
                    )}>
                      <div className={cn(
                        "absolute inset-0 bg-gold-brand rounded-full animate-ping opacity-40",
                        selectedBranch?.id === branch.id ? "opacity-60" : "hidden"
                      )} />
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-xl transition-colors",
                        selectedBranch?.id === branch.id ? "bg-gold-brand" : "bg-indigo-brand"
                      )}>
                        <Coffee size={10} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-indigo-brand px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                      <p className="text-[10px] font-bold uppercase">{branch.city}</p>
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
                  className="mt-12 w-full max-w-xl bg-cream-brand/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="shrink-0 w-24 h-24 bg-gold-brand rounded-3xl flex items-center justify-center text-cream-brand shadow-lg">
                    <Coffee size={40} />
                  </div>
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-cream-brand">{selectedBranch.city} Şubesi</h3>
                      <p className="text-cream-brand/70 text-sm leading-relaxed">{selectedBranch.address}</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <button className="bg-gold-brand text-cream-brand px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-white hover:text-indigo-brand transition-all">
                        <Navigation size={14} /> Yol Tarifi Al
                      </button>
                      <button className="bg-transparent border border-white/20 text-cream-brand px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                        <Phone size={14} /> {selectedBranch.id === 'istanbul' ? '0212 555 44 33' : '0242 333 22 11'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="absolute bottom-8 left-8 flex items-center gap-3">
              <div className="w-10 h-[1px] bg-white/20" />
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Coğrafi Keşif Modu</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
