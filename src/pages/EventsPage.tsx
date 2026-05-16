import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENTS } from '../data/mockData';

export default function EventsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream-brand/30">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-20 space-y-6">
          <span className="text-gold-brand font-black uppercase tracking-[0.5em] text-xs flex items-center gap-4">
            <div className="w-12 h-[2px] bg-gold-brand" /> ETKİNLİKLER
          </span>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-indigo-brand leading-none tracking-tighter">
            BeeBu <span className="text-gold-brand italic">Buluşmaları</span>
          </h1>
          <p className="text-indigo-brand/50 text-xl font-medium leading-relaxed">
            Şubelerimizde gerçekleşecek konserler, atölye çalışmaları ve özel tadım etkinlikleri ile sosyal bir kahve deneyimi yaşayın.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group bg-white rounded-[4rem] overflow-hidden shadow-[0_30px_100px_rgba(40,40,70,0.08)] border border-indigo-brand/5 hover:shadow-[0_50px_150px_rgba(40,40,70,0.15)] transition-all duration-700"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <Link to={`/event/${event.id}`} className="lg:w-2/5 h-80 lg:h-auto overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-indigo-brand/10 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-indigo-brand px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl">
                    {event.type}
                  </div>
                </Link>
                
                <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex items-center gap-6 text-indigo-brand/40 text-xs font-black uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gold-brand" /> {event.time}
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gold-brand" /> {event.date}
                      </div>
                    </div>
                    
                    <Link to={`/event/${event.id}`}>
                      <h2 className="font-serif text-4xl lg:text-6xl font-bold text-indigo-brand leading-none tracking-tighter group-hover:text-gold-brand transition-colors duration-500">
                        {event.title}
                      </h2>
                    </Link>
                    
                    <p className="text-indigo-brand/60 text-lg lg:text-xl font-medium leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-indigo-brand/80 font-bold">
                      <MapPin size={22} className="text-gold-brand" />
                      <span className="text-lg tracking-tight">{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex flex-wrap items-center gap-6 pt-10 border-t border-indigo-brand/5">
                    <Link 
                      to={`/event/${event.id}`}
                      className="bg-indigo-brand text-cream-brand px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-gold-brand transition-all shadow-2xl shadow-indigo-brand/10 active:scale-95 flex items-center gap-3"
                    >
                      Detayları Gör <ArrowRight size={20} />
                    </Link>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-24 text-center p-12 md:p-24 rounded-[3.5rem] bg-indigo-brand text-cream-brand relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none grayscale contrast-125">
             <img src="https://images.unsplash.com/photo-1541167760496-16295cb7c726?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="background" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Kendi Etkinliğinizi Planlayın</h2>
            <p className="text-cream-brand/60 max-w-xl mx-auto">
              Workshop alanlarımızı kiralamak veya iş birliği yapmak için bizimle iletişime geçebilirsiniz.
            </p>
            
          </div>
        </section>
      </div>
    </main>
  );
}
