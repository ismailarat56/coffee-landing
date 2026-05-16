import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { EVENTS } from '../data/mockData';
import { Calendar, MapPin, Clock, ArrowLeft, Users, Ticket, Share2, Info } from 'lucide-react';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS.find(e => e.id === id);

  if (!event) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold text-indigo-brand">Etkinlik bulunamadı</h2>
        <Link to="/events" className="text-gold-brand mt-4 inline-block font-bold">Etkinliklere dön</Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream-brand">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/events" className="flex items-center gap-2 text-indigo-brand font-bold mb-12 hover:text-gold-brand transition-colors w-fit group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Geri Dön
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white relative group">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute top-8 left-8 bg-gold-brand text-cream-brand px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                {event.type}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 bg-white p-6 rounded-[2rem] border border-indigo-brand/5 shadow-sm text-center space-y-2">
                <Users size={20} className="mx-auto text-gold-brand" />
                <p className="text-[10px] font-black text-indigo-brand/30 uppercase tracking-widest">Kapasite</p>
                <p className="font-bold text-indigo-brand">{event.capacity}</p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-[2rem] border border-indigo-brand/5 shadow-sm text-center space-y-2">
                <Ticket size={20} className="mx-auto text-gold-brand" />
                <p className="text-[10px] font-black text-indigo-brand/30 uppercase tracking-widest">Ücret</p>
                <p className="font-bold text-indigo-brand">{event.price}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gold-brand font-black text-xs uppercase tracking-[0.3em]">
                <div className="w-8 h-[2px] bg-gold-brand" /> {event.date} • {event.time}
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-indigo-brand leading-none tracking-tighter">
                {event.title}
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-indigo-brand/80 text-lg font-medium p-6 bg-white rounded-3xl border border-indigo-brand/5 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-indigo-brand/5 flex items-center justify-center text-gold-brand">
                  <MapPin size={24} />
                </div>
                <span>{event.location}</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose prose-indigo max-w-none">
                <p className="text-indigo-brand/70 text-xl leading-relaxed italic">
                  {event.description}
                </p>
              </div>

              <div className="p-8 bg-indigo-brand/5 rounded-[2.5rem] border border-indigo-brand/10 space-y-4">
                <div className="flex items-center gap-3 text-indigo-brand font-black text-xs uppercase tracking-widest">
                  <Info size={16} className="text-gold-brand" /> Katılım Detayları
                </div>
                <p className="text-indigo-brand/60 leading-relaxed font-medium">
                  {event.details}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Events Suggestion */}
        <section className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-serif text-3xl font-bold text-indigo-brand tracking-tight">Diğer <span className="text-gold-brand italic">Buluşmalar</span></h3>
            <Link to="/events" className="text-indigo-brand font-bold text-sm uppercase tracking-widest border-b-2 border-gold-brand pb-1 hover:text-gold-brand transition-colors">Tümünü Gör</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.filter(e => e.id !== event.id).map((e) => (
              <Link key={e.id} to={`/event/${e.id}`} className="group block bg-white rounded-[2rem] overflow-hidden shadow-lg border border-indigo-brand/5 hover:shadow-2xl transition-all">
                <div className="h-48 overflow-hidden relative">
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-indigo-brand/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {e.type}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-indigo-brand group-hover:text-gold-brand transition-colors line-clamp-1 mb-2">{e.title}</h4>
                  <div className="flex items-center gap-2 text-indigo-brand/40 text-[10px] font-black uppercase">
                    <Calendar size={12} className="text-gold-brand" /> {e.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
