import { motion } from 'motion/react';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

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

              <div className="bg-indigo-brand rounded-[4rem] overflow-hidden flex-grow aspect-square md:aspect-auto min-h-[400px] shadow-2xl border border-white/10 relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524813636034-3158c313cb10?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-indigo-brand/40" />
                
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 overflow-hidden">
                  {/* Stable Turkey Silhouette */}
                  <svg viewBox="0 0 1000 500" className="w-full h-full text-white/10 opacity-60 group-hover:opacity-80 transition-opacity">
                    <path 
                      fill="currentColor"
                      d="M185.35,321.13c-0.63-0.56-1.39-2.91-1.69-5.21c-0.45-3.48,0.51-5.32,3.31-6.31c2.18-0.77,5.55-2.28,7.5-3.35c2.39-1.31,4.35,0.73,6.34,6.61c0.77,2.27,1.83,4.13,2.37,4.13c0.53,0,1.52,2.02,2.2,4.49c1,3.61,2.05,4.72,3.95,4.14c1.19-0.36,6.37-6.07,11.52-12.69c8.29-10.66,10.22-12.72,13.62-14.54c5.07-2.73,8.02-3.38,15.7-3.46c6.16-0.07,10.2-0.57,12.98-1.62c4.14-1.57,11.53-7.53,15.93-12.83c1.76-2.12,3.2-4.14,3.2-4.5c0-1.74,13.06,1,23.36,4.92c10.37,3.94,22.18,9,26.24,11.24s12.59,7.66,19.01,12.04c10.45,7.12,17.2,10.74,27.18,14.57c15.2,5.83,27.02,7.24,53.48,6.37c15.2-0.5,23.23,0.06,29.98,2c11,3.16,33.09,1.14,40.42-3.69c1.94-1.28,3.53-2.14,3.53-1.9c0,0.24-4.86,3.65-10.8,7.57c-5.94,3.92-12.6,9.15-14.81,11.62c-3.13,3.5-4.21,6.58-10.65,30.34c-4.48,16.5-7.79,23.86-9.67,21.5c-0.42-0.53,0.18-2.61,1.34-4.63c1.16-2,1.35-4.32,0.41-5.15c-0.93-0.83-5.32,0.67-9.76,3.33c-10.15,6.1-12.82,14.65-7.14,23.01c2.14,3.15,2.02,3.77-0.78,4.19c-11.45,1.73-15.54,6.72-20.73,25.29c-3.33,11.96-7.05,17.47-16.14,23.95c-7,5-8,6.23-8,10c0,5.7-8.39,11.89-14.28,10.54c-2.31-0.53-6.26-2.34-8.77-4.01c-6.1-4.06-12.33-14.63-12.33-20.93c0-3.37-4.24-5.69-12.58-6.88c-7.23-1.04-8.52-1.74-9.31-5.07c-0.65-2.73-2.07-5-3.14-5.04c-1.08-0.04-1.95,1.37-1.95,3.13c0,2.15-0.89,3.19-2.58,3.02c-1.35-0.14-3.51-1.39-4.81-2.77s-3.52-2.51-4.81-2.77s-3.52-2.51-4.94-2.51c-4.52,0-9.69,7.63-11.23,16.56c-0.63,3.67-1.59,6.72-2.14,6.77s-1-4.31-1-9.7c0-11-2.13-16.89-8.47-23.4l-5.62-5.78l-5.3,0.67c-13.06,1.66-26.68-7.79-28.78-20.01c-0.53-3.13-1.63-5.21-2.45-4.62c-0.83,0.59-1,2.69-0.38,4.67c0.88,2.83,0.56,3.64-0.97,2.44c-1.08-0.84-2.36,0.3-2.84,2.54c-1.12,5.21-11.21,11-19.16,11c-12.32,0-15.69,5.78-14.61,25.07c0.35,6.38,0.3,13.84-0.12,16.57c-1,6.58-12.44,17.43-16,15.19c-1-0.63-1.81-4.24-1.81-8c0-5-2.03-8.82-5.67-10.74c-4.13-2.17-5.18-12.38-1.53-14.94c0.86-0.61,4.3,0.22,7.64,1.83c5.3,2.55,6.07,2.37,6.07-1.42c0-8.62,11.53-29.35,16.57-30.13c2.23-0.35,3.22-1.28,2.2-2.09c-1.46-1.15-1.12-10.51,0.5-13.56c1.1-2.07,10-14.07,10-13.43c0,0.21-2.61,1.15-5.81,2.07s-6.3,2.49-6.9,3.48c-0.6,0.99-1.5,1.2-2,0.47C186.2,323.01,186.2,321.89,185.35,321.13z" 
                    />
                  </svg>
                  
                  {/* Istanbul Marker */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute top-[32%] left-[24%] -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gold-brand rounded-full animate-ping absolute -inset-0 opacity-50" />
                      <div className="w-10 h-10 bg-gold-brand rounded-full flex items-center justify-center text-indigo-brand shadow-2xl relative z-10">
                        <MapPin size={20} fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12 text-center text-white z-10">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-brand mb-2">Genel Merkezimiz</p>
                  <h5 className="font-serif text-3xl font-bold">Beyoğlu, İstanbul</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
