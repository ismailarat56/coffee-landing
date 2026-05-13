import { motion } from 'motion/react';
import { Calendar, MapPin, Music, Coffee as CoffeeIcon, Clock } from 'lucide-react';

const EVENTS = [
  {
    id: 1,
    title: 'Akustik Gece: Caz & Kahve',
    location: 'İstanbul, Beşiktaş Şubesi',
    date: '20 Mayıs 2026',
    time: '20:00',
    type: 'Konser',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Latte Art Workshop',
    location: 'Antalya, Lara Şubesi',
    date: '24 Mayıs 2026',
    time: '14:00',
    type: 'Workshop',
    icon: CoffeeIcon,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Demleme Teknikleri Eğitimi',
    location: 'Kahramanmaraş, Indigo Şubesi',
    date: '02 Haziran 2026',
    time: '11:00',
    type: 'Eğitim',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1544666107-160fa1f9745e?q=80&w=800&auto=format&fit=crop'
  }
];

export default function EventsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-16 space-y-4">
          <span className="text-gold-brand font-bold uppercase tracking-[0.4em] text-sm flex items-center gap-2">
            <Calendar size={16} /> Etkinlikler
          </span>
          <h1 className="font-serif text-5xl font-bold text-indigo-brand">Indigo <span className="text-gold-brand italic">Buluşmaları</span></h1>
          <p className="text-indigo-brand/60 text-lg">
            Şubelerimizde gerçekleşecek konserler, atölye çalışmaları ve özel tadım etkinlikleri ile sosyal bir kahve deneyimi yaşayın.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-indigo-brand/5 hover:shadow-2xl transition-shadow group"
            >
              <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-indigo-brand/5 text-indigo-brand px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <event.icon size={12} className="text-gold-brand" /> {event.type}
                    </span>
                    <div className="flex items-center gap-2 text-indigo-brand/40 text-xs font-bold uppercase">
                      <Clock size={14} className="text-gold-brand" /> {event.time}
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-indigo-brand group-hover:text-gold-brand transition-colors">{event.title}</h2>
                  <div className="flex flex-col sm:flex-row gap-6 mt-4">
                    <div className="flex items-center gap-3 text-indigo-brand/60">
                      <Calendar size={18} className="text-gold-brand" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-indigo-brand/60">
                      <MapPin size={18} className="text-gold-brand" />
                      <span className="font-semibold">{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="bg-indigo-brand text-cream-brand px-8 py-3 rounded-full font-bold hover:bg-gold-brand transition-all flex-1 sm:flex-none">
                    Bilet Al / Kaydol
                  </button>
                  <button className="border border-indigo-brand/10 text-indigo-brand px-8 py-3 rounded-full font-bold hover:bg-indigo-brand/5 transition-all flex-1 sm:flex-none">
                    Detaylar
                  </button>
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
            <button className="bg-white text-indigo-brand px-12 py-4 rounded-full font-bold hover:bg-gold-brand hover:text-white transition-all shadow-xl">
              İş Birliği Formu
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
