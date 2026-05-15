import { motion } from 'motion/react';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { BRANCHES } from '../data/mockData';

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: 'Müşteri Hizmetleri',
    value: '444 0 782',
    description: 'Hafta içi 09:00 - 18:00 arası her türlü sorunuz için hizmetinizdeyiz.',
    action: 'Hemen Ara',
    href: 'tel:4440782',
    color: 'bg-indigo-brand'
  },
  {
    icon: Mail,
    title: 'E-Posta',
    value: 'destek@beebucoffee.com',
    description: 'Tüm sorularınız ve iş birlikleri için 24 saat içinde dönüş yapıyoruz.',
    action: 'E-posta Gönder',
    href: 'mailto:destek@beebucoffee.com',
    color: 'bg-gold-brand'
  },
  {
    icon: MessageSquare,
    title: 'Sosyal Medya',
    value: '@beebucoffee',
    description: 'Yeni sezon çekirdekleri ve duyurular için bizi takip edin.',
    action: 'Profilimiz',
    href: '#',
    color: 'bg-indigo-brand'
  }
];

const SOCIAL_LINKS = [
  { icon: Instagram, name: 'Instagram', href: '#' },
  { icon: Facebook, name: 'Facebook', href: '#' },
  { icon: Twitter, name: 'Twitter', href: '#' },
  { icon: Youtube, name: 'Youtube', href: '#' },
];

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream-brand">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-20 space-y-4">
          <span className="text-gold-brand font-black uppercase tracking-[0.5em] text-xs flex items-center gap-4">
            <div className="w-12 h-px bg-gold-brand" /> BİZE ULAŞIN
          </span>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-indigo-brand leading-none tracking-tighter">
            Bir Kahve <br /> <span className="text-gold-brand italic">Kadar</span> Yakınız
          </h1>
          <p className="text-indigo-brand/60 text-xl font-medium max-w-xl">
            Deneyiminizi paylaşmak, iş birliği yapmak veya sadece merhaba demek için buradayız.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {CONTACT_METHODS.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(40,40,70,0.05)] border border-indigo-brand/5 hover:border-gold-brand/30 transition-all group flex flex-col items-center text-center"
            >
              <div className={cn(
                "w-20 h-20 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-xl group-hover:rotate-12 transition-transform duration-500",
                method.color
              )}>
                <method.icon size={36} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-indigo-brand mb-3">{method.title}</h3>
              <p className="text-gold-brand font-black text-lg mb-4 tracking-tight">{method.value}</p>
              <p className="text-indigo-brand/50 text-base mb-8 leading-relaxed font-medium">{method.description}</p>
              <div className="mt-auto flex items-center gap-3 text-indigo-brand font-black text-sm uppercase tracking-widest bg-cream-brand px-6 py-3 rounded-full group-hover:bg-gold-brand group-hover:text-white transition-all">
                {method.action} <ArrowUpRight size={18} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <section className="space-y-8">
              <h2 className="font-serif text-4xl font-bold text-indigo-brand tracking-tight">Sosyal Dünyamız</h2>
              <p className="text-indigo-brand/60 leading-relaxed text-xl font-medium">
                Kahve kültürünü birlikte büyütüyoruz. Günlük dozda estetik ve kahve kokusu için sosyal medya hesaplaralarımız.
              </p>
              <div className="flex flex-wrap gap-6">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a 
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={social.name}
                    href={social.href}
                    className="w-20 h-20 bg-white text-indigo-brand rounded-3xl flex items-center justify-center hover:bg-gold-brand hover:text-white transition-all shadow-[0_15px_30px_rgba(40,40,70,0.08)] border border-indigo-brand/5 group"
                  >
                    <social.icon size={32} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </section>

            <section className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(40,40,70,0.1)] border border-indigo-brand/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="font-serif text-3xl font-bold text-indigo-brand mb-8 tracking-tight">Hızlı Mesaj Gönder</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Adınız" className="bg-cream-brand/50 border border-indigo-brand/5 p-5 rounded-3xl outline-none focus:ring-4 focus:ring-gold-brand/20 w-full font-medium transition-all" />
                  <input type="email" placeholder="E-posta" className="bg-cream-brand/50 border border-indigo-brand/5 p-5 rounded-3xl outline-none focus:ring-4 focus:ring-gold-brand/20 w-full font-medium transition-all" />
                </div>
                <input type="text" placeholder="Konu" className="bg-cream-brand/50 border border-indigo-brand/5 p-5 rounded-3xl outline-none focus:ring-4 focus:ring-gold-brand/20 w-full font-medium transition-all" />
                <textarea placeholder="Mesajınız" rows={4} className="bg-cream-brand/50 border border-indigo-brand/5 p-5 rounded-3xl outline-none focus:ring-4 focus:ring-gold-brand/20 w-full resize-none font-medium transition-all" />
                <button className="w-full bg-indigo-brand text-cream-brand py-6 rounded-3xl font-black text-lg uppercase tracking-[0.2em] hover:bg-gold-brand transition-all shadow-xl shadow-indigo-brand/20 active:scale-95">
                  GÖNDER
                </button>
              </form>
            </section>
          </div>

          <div className="space-y-8 h-full">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-4xl font-bold text-indigo-brand tracking-tight">Genel Merkez</h2>
              <div className="w-12 h-12 bg-gold-brand/10 rounded-full flex items-center justify-center text-gold-brand">
                <MapPin size={24} />
              </div>
            </div>
            
            <div className="flex flex-col gap-8 h-full">
              <div className="bg-white p-8 rounded-[3rem] border border-indigo-brand/5 shadow-xl space-y-4">
                <h4 className="font-black text-indigo-brand uppercase tracking-widest text-xs opacity-40">Adres Bilgisi</h4>
                <p className="text-xl font-medium text-indigo-brand/80 leading-relaxed italic">
                  Galata Mah. Serdar-ı Ekrem Sokak No: 12, P.K. 34421 Beyoğlu / İstanbul
                </p>
              </div>

              <div className="bg-white rounded-[4rem] overflow-hidden flex-grow aspect-square md:aspect-auto min-h-[400px] shadow-2xl border border-indigo-brand/10 relative group p-2">
                <div className="w-full h-full rounded-[3.5rem] overflow-hidden relative bg-indigo-brand/5 flex items-center justify-center">
                  <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-opacity p-8 flex items-center justify-center">
                    <img 
                      src="https://wsrv.nl/?url=www.ismailbasoglu.com.tr/wp-content/uploads/2014/09/SnapCrab_No-0000-e1409569320125.jpg" 
                      alt="Türkiye Haritası" 
                      className="w-full h-auto max-h-full object-contain rounded-3xl shadow-sm mix-blend-multiply"
                    />
                    
                    {/* Only Istanbul Marker for HQ */}
                    <div className="absolute z-20 group -translate-x-1/2 -translate-y-1/2" style={{ left: '19%', top: '24%' }}>
                      <div className="relative flex items-center justify-center transition-all duration-300">
                        <div className="absolute -inset-2 bg-gold-brand rounded-full animate-ping opacity-60" />
                        <div className="w-12 h-12 rounded-full flex items-center justify-center border-[3px] shadow-xl transition-colors relative z-10 bg-gold-brand border-white">
                          <MapPin size={20} className="text-white" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay text */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-8 left-8 right-8 text-center text-indigo-brand z-10 pointer-events-none">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-brand mb-2">Genel Merkezimiz</p>
                    <h5 className="font-serif text-3xl font-bold">Beyoğlu, İstanbul</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
