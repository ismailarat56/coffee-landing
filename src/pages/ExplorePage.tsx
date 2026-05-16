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
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Map Component */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] overflow-hidden min-h-[500px] lg:min-h-[600px] relative shadow-2xl p-4 md:p-8 flex flex-col items-center border border-indigo-brand/10">
            {/* Map Container */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[2.5rem] flex items-center justify-center p-4">
              
              <div className="relative w-full max-w-5xl">
                <img 
                  src="https://bujuyollarda.com/wp-content/uploads/2025/06/turkiye-ilceler-haritasi-1024x576.jpg" 
                  alt="Türkiye Haritası" 
                  className="w-full h-auto rounded-2xl shadow-lg border border-indigo-brand/10"
                />

                {/* Branch Markers */}
                {BRANCHES.map((branch) => {
                  const isSelected = selectedBranch?.id === branch.id;

                  return (
                    <motion.button
                      key={branch.id}
                      onClick={() => setSelectedBranch(branch)}
                      className="absolute z-20 group -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${branch.coordinates?.x}%`, top: `${branch.coordinates?.y}%` }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="relative flex flex-col items-center">
                        <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-all",
                          isSelected ? "bg-gold-brand scale-125" : "bg-indigo-brand group-hover:bg-gold-brand"
                        )}>
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        
                        {/* Simple Label */}
                        <div className={cn(
                          "absolute top-full mt-2 bg-indigo-brand text-white px-3 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap shadow-xl transition-all",
                          isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                        )}>
                          {branch.city}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Selection Card (Bottom overlay) */}
            <AnimatePresence mode="wait">
              {selectedBranch && (
                <motion.div
                  key={selectedBranch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-8 w-full bg-white/95 backdrop-blur-xl rounded-[2rem] p-6 border border-indigo-brand/10 shadow-xl"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start max-w-4xl mx-auto">
                    <div className="shrink-0 w-20 h-20 bg-indigo-brand/5 rounded-2xl flex items-center justify-center text-indigo-brand">
                      <Coffee size={32} />
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-indigo-brand">{selectedBranch.city} Şubesi</h3>
                      <p className="text-indigo-brand/60 text-sm leading-relaxed max-w-md">{selectedBranch.address}</p>
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
