import { motion } from 'motion/react';
import { ArrowRight, Coffee, ShieldCheck, History, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ui/ProductCard';

export default function HomePage() {
  const bestSellers = PRODUCTS.filter(p => p.bestSeller);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cream-brand to-cream-brand/50 z-[-1]" />
        
        {/* Background Animation Element */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold-brand/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-brand/5 px-4 py-2 rounded-full text-indigo-brand text-xs font-bold tracking-widest border border-indigo-brand/10">
              <span className="w-2 h-2 bg-gold-brand rounded-full animate-ping" />
              YENİ SEZON HARMANLARI GELDİ
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-indigo-brand leading-[1.1]">
              Kahvenin <span className="text-gold-brand italic">En Saf</span> Haliyle Tanışın
            </h1>
            
            <p className="text-indigo-brand/70 text-lg md:text-xl max-w-lg leading-relaxed">
              Bizim için kahve sadece bir içecek değil, bir sanat. Her çekirdeğin hikayesini fincanınıza taşıyoruz.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="bg-indigo-brand text-cream-brand px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gold-brand transition-all shadow-xl shadow-indigo-brand/20 active:scale-95"
              >
                Mağazayı Karıştır <ArrowRight size={20} />
              </Link>
              <Link
                to="/explore"
                className="border-2 border-indigo-brand/20 text-indigo-brand px-8 py-4 rounded-full font-bold hover:bg-indigo-brand/5 transition-all"
              >
                Bizi Keşfet
              </Link>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold font-serif">120+</p>
                <p className="text-xs text-indigo-brand/50 font-bold uppercase tracking-wide">Kahve Çeşidi</p>
              </div>
              <div className="w-[1px] h-10 bg-indigo-brand/10" />
              <div className="space-y-1">
                <p className="text-2xl font-bold font-serif">15k</p>
                <p className="text-xs text-indigo-brand/50 font-bold uppercase tracking-wide">Mutlu Müşteri</p>
              </div>
              <div className="w-[1px] h-10 bg-indigo-brand/10" />
              <div className="space-y-1">
                <p className="text-2xl font-bold font-serif">28</p>
                <p className="text-xs text-indigo-brand/50 font-bold uppercase tracking-wide">Yıllık Tecrübe</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
                alt="Main Coffee Show" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Artistic Floating Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-brand rounded-2xl flex items-center justify-center p-6 text-cream-brand shadow-xl z-20 hidden md:flex">
              <div className="text-center">
                <Award size={40} className="mx-auto mb-2 opacity-50" />
                <p className="text-xs font-bold uppercase tracking-tight italic">Tüm Zamanların En Çok Tercih Edileni</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover shadow-lg" alt="Cafe interior" />
                <img src="https://images.unsplash.com/photo-1541167760496-16295cb7c726?q=80&w=600&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover shadow-lg" alt="Barista working" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover shadow-lg" alt="Coffee beans" />
                <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=600&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover shadow-lg" alt="Latte art" />
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <span className="text-gold-brand font-bold uppercase tracking-[0.3em] text-sm flex items-center gap-3">
                <div className="w-10 h-[2px] bg-gold-brand" /> Hakkımızda
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Tutkumuz Kahve, <br />İmzamız <span className="text-indigo-brand">Kalite</span></h2>
              <p className="text-indigo-brand/70 leading-relaxed text-lg">
                Artisan & Brew olarak başladığımız bu yolculukta, her bir bardağın mükemmel olması için çekirdekten fincana kadar her adıma özen gösteriyoruz. Dünya üzerindeki en iyi çiftliklerden doğrudan tedarik edilen çekirdeklerimizi, kendi kavurma merkezimizde ideal profillerinde hazırlıyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gold-brand/10 flex items-center justify-center text-gold-brand shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-brand">Sürdürülebilir Kaynak</h4>
                    <p className="text-xs text-indigo-brand/60">Doğrudan ticaret ile çiftçiyi destekliyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-indigo-brand/10 flex items-center justify-center text-indigo-brand shrink-0">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-brand">Taze Kavrum</h4>
                    <p className="text-xs text-indigo-brand/60">Haftalık periyotlarda taze kavuruyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-indigo-brand text-cream-brand relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="text-gold-brand font-bold uppercase tracking-[0.3em] text-sm">Zaman Tüneli</span>
            <h2 className="font-serif text-5xl font-bold">1994'ten Bugüne</h2>
            <div className="relative space-y-12 after:absolute after:left-[17px] after:top-2 after:bottom-2 after:w-[2px] after:bg-gold-brand/30">
              <div className="flex gap-8 items-start relative z-10 text-left pl-12">
                <div className="absolute left-0 w-9 h-9 rounded-full bg-gold-brand flex items-center justify-center shadow-lg shadow-gold-brand/20">
                  <span className="text-[10px] font-bold">1994</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">İlk Adım</h4>
                  <p className="text-cream-brand/60 mt-1">İstanbul'un tarihi sokaklarında küçük bir dükkan ve büyük bir hayalle başladık.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start relative z-10 text-left pl-12">
                <div className="absolute left-0 w-9 h-9 rounded-full bg-gold-brand flex items-center justify-center">
                  <span className="text-[10px] font-bold">2008</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Ustalık Dönemi</h4>
                  <p className="text-cream-brand/60 mt-1">Kendi kavurma tesisimizi kurarak aromaların kontrolünü tamamen elimize aldık.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start relative z-10 text-left pl-12">
                <div className="absolute left-0 w-9 h-9 rounded-full bg-gold-brand flex items-center justify-center">
                  <span className="text-[10px] font-bold">2026</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Gelecek</h4>
                  <p className="text-cream-brand/60 mt-1">Türkiye genelinde 50+ şubemiz ve binlerce sadık kahve severimizle büyüyoruz.</p>
                </div>
              </div>
            </div>
            <div className="pt-8 italic text-cream-brand/40">"Hikayemiz her sabah yeniden demleniyor."</div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section - Dynamic Carousel Feel */}
      <section className="py-24 bg-cream-brand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-gold-brand font-bold uppercase tracking-[0.3em] text-sm">Göz Atın</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">En Çok Satanlar</h2>
              <p className="text-indigo-brand/60 max-w-md">Topluluğumuz tarafından en çok puanlanan ve tercih edilen ürünlerimizi keşfedin.</p>
            </div>
            <Link to="/shop" className="group flex items-center gap-3 font-bold text-indigo-brand hover:text-gold-brand transition-colors underline-offset-8 underline">
              Tüm Ürünleri Gör <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gold-brand rounded-[3rem] p-12 md:p-20 text-center text-cream-brand relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="font-serif text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
                Her Sabah Bir <span className="italic text-cream-brand/60">Yolculuk</span> Başlar
              </h2>
              <p className="text-cream-brand/80 max-w-lg text-lg">
                Hemen mağazamıza göz atın ve sabahınıza eşlik edecek o mükemmel çekirdeği bulun.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/shop" className="bg-cream-brand text-indigo-brand px-10 py-4 rounded-full font-bold hover:bg-cream-dark transition-all active:scale-95 shadow-xl shadow-black/10">
                  Şimdi Alışverişe Başla
                </Link>
                <Link to="/explore" className="bg-transparent border-2 border-cream-brand/20 backdrop-blur-sm text-cream-brand px-10 py-4 rounded-full font-bold hover:bg-cream-brand/10 transition-all">
                  Bayilerimizi Gör
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
