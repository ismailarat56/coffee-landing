import { motion } from 'motion/react';
import { Tag, Sparkles, Clock, ArrowRight } from 'lucide-react';

const CAMPAIGNS = [
  {
    id: 1,
    title: 'Sabah Neşesi: %20 İndirim',
    description: 'Hergün 08:00 - 10:00 saatleri arasında tüm sıcak kahvelerde geçerli özel indirim.',
    dateRange: 'Süresiz',
    image: 'https://images.unsplash.com/photo-1541167760496-16295cb7c726?q=80&w=800&auto=format&fit=crop',
    color: 'bg-gold-brand'
  },
  {
    id: 2,
    title: 'Yeni Üyelere Özel İlk Kahve Bizden',
    description: 'Artisan & Brew ailesine katılan tüm yeni üyelerimize ilk siparişlerinde diledikleri bir içecek hediye.',
    dateRange: '31 Mayıs\'a kadar',
    image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=800&auto=format&fit=crop',
    color: 'bg-indigo-brand'
  },
  {
    id: 3,
    title: 'Mağaza Alışverişlerinde Ücretsiz Kargo',
    description: 'Termos ve aksesuar alışverişlerinizde 1500 TL ve üzeri siparişlerde kargo ücreti ödemeyin.',
    dateRange: 'Haziran sonuna kadar',
    image: 'https://images.unsplash.com/photo-1517554558204-bc6750059c25?q=80&w=800&auto=format&fit=crop',
    color: 'bg-indigo-brand'
  }
];

export default function CampaignsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream-brand">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-16 space-y-4">
          <span className="text-gold-brand font-bold uppercase tracking-[0.4em] text-sm flex items-center gap-2">
            <Tag size={16} /> Kampanyalar
          </span>
          <h1 className="font-serif text-5xl font-bold text-indigo-brand">Size Özel <span className="text-gold-brand italic">Fırsatlar</span></h1>
          <p className="text-indigo-brand/60 text-lg">
            Kahve tutkunuzu daha keyifli hale getirecek güncel kampanyalarımızı buradan takip edebilirsiniz.
          </p>
        </header>

        <div className="space-y-12">
          {CAMPAIGNS.map((campaign, idx) => (
            <motion.div 
              key={campaign.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col md:flex-row rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-indigo-brand/5 min-h-[400px]",
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-brand/20 to-transparent" />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-3 text-gold-brand font-bold text-xs uppercase tracking-widest">
                  <Sparkles size={16} /> Aktif Kampanya
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-brand leading-tight">
                  {campaign.title}
                </h2>
                <p className="text-indigo-brand/60 leading-relaxed text-lg">
                  {campaign.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-brand/40 uppercase tracking-widest bg-indigo-brand/5 w-fit px-4 py-2 rounded-full">
                  <Clock size={14} className="text-gold-brand" /> Geçerlilik: {campaign.dateRange}
                </div>
                <button className="flex items-center gap-3 text-indigo-brand font-bold hover:text-gold-brand transition-colors group mt-4">
                  Kampanyaya Katıl <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-24 bg-indigo-brand rounded-[3rem] p-12 md:p-20 text-center text-cream-brand">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Fırsatları Kaçırmayın!</h2>
            <p className="text-cream-brand/60">
              E-bültenimize kaydolun, yeni kampanyalardan ve etkinliklerden ilk siz haberdar olun.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-1 bg-white/10 border border-white/20 p-4 rounded-full outline-none focus:bg-white/20 transition-all text-white placeholder:text-white/40"
              />
              <button className="bg-gold-brand text-indigo-brand px-8 py-4 rounded-full font-bold hover:bg-white transition-all shrink-0">
                Abone Ol
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

import { cn } from '../lib/utils';
