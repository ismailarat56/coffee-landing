import { motion } from 'motion/react';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ExternalLink } from 'lucide-react';

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: 'Müşteri Hizmetleri',
    value: '444 0 782',
    description: 'Hafta içi 09:00 - 18:00 arası hizmetinizdeyiz.',
    action: 'Hemen Ara',
    href: 'tel:4440782'
  },
  {
    icon: Mail,
    title: 'E-Posta',
    value: 'destek@artisanbrew.com',
    description: 'Tüm sorularınız için 24 saat içinde dönüş yapıyoruz.',
    action: 'E-posta Gönder',
    href: 'mailto:destek@artisanbrew.com'
  },
  {
    icon: MessageSquare,
    title: 'Sosyal Medya',
    value: '@artisanbrew',
    description: 'Yeni ürünler ve duyurular için bizi takip edin.',
    action: 'Profilimiz',
    href: '#'
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
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-16 space-y-4">
          <span className="text-gold-brand font-bold uppercase tracking-[0.4em] text-sm flex items-center gap-2">
            <MessageSquare size={16} /> İletişim
          </span>
          <h1 className="font-serif text-5xl font-bold text-indigo-brand">Bize <span className="text-gold-brand italic">Ulaşın</span></h1>
          <p className="text-indigo-brand/60 text-lg">
            Deneyiminizi paylaşmak, iş birliği yapmak veya sadece merhaba demek için buradayız.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {CONTACT_METHODS.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-indigo-brand/5 hover:border-gold-brand/30 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-brand rounded-2xl flex items-center justify-center text-gold-brand mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <method.icon size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-indigo-brand mb-2">{method.title}</h3>
              <p className="text-gold-brand font-bold mb-4">{method.value}</p>
              <p className="text-indigo-brand/50 text-sm mb-6 leading-relaxed">{method.description}</p>
              <div className="flex items-center gap-2 text-indigo-brand font-bold text-sm">
                {method.action} <ExternalLink size={14} className="text-gold-brand" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-indigo-brand">Sosyal Dünyamız</h2>
              <p className="text-indigo-brand/60 leading-relaxed text-lg">
                Kahve kültürünü birlikte büyütüyoruz. Günlük dozda estetik ve kahve kokusu için sosyal medya hesaplarımıza göz atın.
              </p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="w-16 h-16 bg-cream-brand text-indigo-brand rounded-2xl flex items-center justify-center hover:bg-indigo-brand hover:text-white transition-all shadow-sm border border-indigo-brand/5"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </section>

            <section className="bg-white p-10 rounded-[3rem] shadow-2xl border border-indigo-brand/5">
              <h3 className="font-serif text-2xl font-bold text-indigo-brand mb-6">Hızlı Mesaj Gönder</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Adınız" className="bg-cream-brand p-4 rounded-2xl outline-none focus:ring-2 focus:ring-gold-brand w-full" />
                  <input type="email" placeholder="E-posta" className="bg-cream-brand p-4 rounded-2xl outline-none focus:ring-2 focus:ring-gold-brand w-full" />
                </div>
                <input type="text" placeholder="Konu" className="bg-cream-brand p-4 rounded-2xl outline-none focus:ring-2 focus:ring-gold-brand w-full" />
                <textarea placeholder="Mesajınız" rows={4} className="bg-cream-brand p-4 rounded-2xl outline-none focus:ring-2 focus:ring-gold-brand w-full resize-none" />
                <button className="w-full bg-indigo-brand text-cream-brand py-4 rounded-2xl font-bold hover:bg-gold-brand transition-colors">
                  Gönder
                </button>
              </form>
            </section>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-3xl font-bold text-indigo-brand">Şubelerimiz</h2>
              <Link to="/explore" className="text-indigo-brand font-bold text-sm underline underline-offset-4 hover:text-gold-brand">Tüm Haritayı Gör</Link>
            </div>
            <div className="bg-cream-brand rounded-[3rem] overflow-hidden aspect-square shadow-inner border border-indigo-brand/10 relative p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin size={48} className="mx-auto text-gold-brand opacity-20" />
                <p className="text-indigo-brand/40 font-bold uppercase tracking-widest text-xs">Harita Görünümü Keşfet Sayfasında Aktiftir</p>
                <Link to="/explore" className="inline-block bg-indigo-brand text-cream-brand px-8 py-3 rounded-full font-bold">Haritayı Aç</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Link } from 'react-router-dom';
