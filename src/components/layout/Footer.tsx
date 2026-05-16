import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-indigo-brand text-cream-brand pt-16 pb-8 border-t border-cream-brand/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-black tracking-tighter">
              BeeBu<span className="text-gold-brand">Coffee</span>
            </h3>
            <p className="text-cream-brand/70 max-w-xs text-sm leading-relaxed">
              Kahvenin en saf halini, ustalıkla harmanlanmış aromalarla masanıza getiriyoruz. 1994'ten beri aynı tutkuyla.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cream-brand/20 flex items-center justify-center hover:bg-gold-brand hover:border-gold-brand transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream-brand/20 flex items-center justify-center hover:bg-gold-brand hover:border-gold-brand transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream-brand/20 flex items-center justify-center hover:bg-gold-brand hover:border-gold-brand transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg border-b border-gold-brand w-fit pb-1">Hızlı Linkler</h4>
            <ul className="space-y-3 text-cream-brand/70 text-sm">
              <li><Link to="/" className="hover:text-gold-brand transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/shop" className="hover:text-gold-brand transition-colors">Mağaza</Link></li>
              <li><Link to="/explore" className="hover:text-gold-brand transition-colors">Şubelerimiz</Link></li>

              <li><Link to="/contact" className="hover:text-gold-brand transition-colors">İletişim</Link></li>
            </ul>
          </div>

 

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg border-b border-gold-brand w-fit pb-1">Bize Ulaşın</h4>
            <ul className="space-y-4 text-cream-brand/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-brand shrink-0" />
                <span>Merkez: Galata Mah. No:12, İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-brand shrink-0" />
                <span>+90 212 555 44 33</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-brand shrink-0" />
                <span>merhaba@beebucoffee.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-cream-brand/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-brand/40 italic">
          <p>© 2026 BeeBuCoffee Co. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream-brand">Gizlilik Politikası</a>
            <a href="#" className="hover:text-cream-brand">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
