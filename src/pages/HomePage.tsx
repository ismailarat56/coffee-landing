import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { ArrowRight, Coffee, ShieldCheck, History, Award, PlayCircle, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ui/ProductCard';
import { useRef, useState, useEffect } from 'react';

function StatCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left space-y-1">
      <p className="text-3xl md:text-5xl font-black font-serif text-indigo-brand tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-[10px] text-indigo-brand/40 font-black uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const bestSellers = PRODUCTS.filter(p => p.bestSeller);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <main className="overflow-hidden bg-cream-brand" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,164,132,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full text-indigo-brand text-[10px] font-black tracking-[0.3em] border border-indigo-brand/5 shadow-2xl shadow-indigo-brand/5">
              <Sparkles size={14} className="text-gold-brand animate-pulse" />
              YEYY! YENİ SEZON HARMANLARI BURADA
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-indigo-brand leading-[1.1] tracking-tighter">
              Kahvenin <br />
              <span className="text-gold-brand italic relative inline-block pb-2 md:pb-4">
                En Saf
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C30 2 170 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span> <br /> 
              Haliyle Tanışın
            </h1>
            
            <p className="text-indigo-brand/60 text-lg md:text-2xl max-w-xl leading-relaxed font-medium">
              BeeBuCoffee ile çiftlikten fincana, her yudumda gerçek kahve deneyimini keşfedin. Artizan yöntemlerle kavrulan çekirdeklerimizle sabahlarınızı bir sanata dönüştürün.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link
                to="/shop"
                className="bg-indigo-brand text-cream-brand px-10 py-5 rounded-[2rem] font-bold flex items-center gap-4 hover:bg-gold-brand transition-all shadow-[0_20px_50px_rgba(40,40,70,0.2)] hover:shadow-gold-brand/30 active:scale-95 text-lg"
              >
                Hemen Keşfet <ArrowRight size={22} />
              </Link>
              <Link
                to="/menu"
                className="bg-white text-indigo-brand px-10 py-5 rounded-[2rem] font-bold flex items-center gap-4 border border-indigo-brand/5 hover:bg-indigo-brand/5 transition-all shadow-xl shadow-indigo-brand/5"
              >
                <PlayCircle size={22} className="text-gold-brand" /> Menümüzü Gör
              </Link>
            </div>

            <div className="flex items-center gap-12 pt-10 border-t border-indigo-brand/5">
              <StatCounter value={120} label="Kahve Çeşidi" suffix="+" />
              <StatCounter value={15} label="Bin Mutlu Müşteri" suffix="k+" />
              <StatCounter value={32} label="Yıllık Tecrübe" />
            </div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(40,40,70,0.2)] border-[20px] border-white group">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
                alt="Main Coffee Show" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-brand/40 to-transparent" />
            </div>

            {/* Optimized Floating Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 w-52 h-52 bg-white rounded-[3rem] p-6 flex flex-col items-center justify-center text-center shadow-[0_30px_60px_rgba(40,40,70,0.15)] z-20 border border-indigo-brand/5"
            >
              <div className="w-16 h-16 bg-gold-brand/10 rounded-2xl flex items-center justify-center text-gold-brand mb-4 rotate-3">
                <Sparkles size={32} fill="currentColor" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-tight text-indigo-brand leading-tight">
                2026'NIN <br /> <span className="text-gold-brand text-sm italic">EN İYİ</span> <br /> KAHVE DENEYİMİ
              </p>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gold-brand/20 rounded-full" />
            <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gold-brand/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
              <div className="space-y-6">
                <motion.img 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600&auto=format&fit=crop" 
                  className="rounded-[3rem] w-full h-80 object-cover shadow-2xl" 
                  alt="Cafe interior" 
                />
                <motion.img 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1541167760496-16295cb7c726?q=80&w=600&auto=format&fit=crop" 
                  className="rounded-[2.5rem] w-full h-60 object-cover shadow-2xl" 
                  alt="Barista working" 
                />
              </div>
              <div className="space-y-6 pt-20">
                <motion.img 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 }}
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop" 
                  className="rounded-[2.5rem] w-full h-60 object-cover shadow-2xl" 
                  alt="Coffee beans" 
                />
                <motion.img 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=600&auto=format&fit=crop" 
                  className="rounded-[3rem] w-full h-80 object-cover shadow-2xl" 
                  alt="Latte art" 
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cream-brand/30 rounded-full blur-3xl scale-125" />
            </div>
            
            <div className="lg:w-1/2 space-y-10">
              <span className="text-gold-brand font-black uppercase tracking-[0.4em] text-xs flex items-center gap-4">
                <div className="w-12 h-[2px] bg-gold-brand" /> HİKAYEMİZ
              </span>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-indigo-brand leading-[0.9] tracking-tighter">
                Tutkumuz Kahve, <br />
                <span className="text-gold-brand italic">İmzamız</span> Kalite
              </h2>
              <p className="text-indigo-brand/60 leading-relaxed text-xl font-medium">
                BeeBuCoffee olarak başladığımız bu yolculukta, her bir bardağın mükemmel olması için çekirdekten fincana kadar her adıma özen gösteriyoruz. Dünya üzerindeki en iyi çiftliklerden gelen aromalar...
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                <div className="p-8 rounded-[2.5rem] bg-cream-brand/50 border border-indigo-brand/5 shadow-sm space-y-4 hover:shadow-xl hover:bg-white transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gold-brand/10 flex items-center justify-center text-gold-brand">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="font-black text-indigo-brand text-lg">Sürdürülebilir</h4>
                  <p className="text-sm text-indigo-brand/60 leading-relaxed font-medium">Doğrudan ticaret ile yerel çiftçileri her adımda destekliyoruz.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-cream-brand/50 border border-indigo-brand/5 shadow-sm space-y-4 hover:shadow-xl hover:bg-white transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-brand/10 flex items-center justify-center text-indigo-brand">
                    <Coffee size={28} />
                  </div>
                  <h4 className="font-black text-indigo-brand text-lg">Taze Kavrum</h4>
                  <p className="text-sm text-indigo-brand/60 leading-relaxed font-medium">Haftalık periyotlarda butik tesisimizde taze kavuruyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - RE-CENTERED & BALANCED */}
      <section className="py-32 bg-indigo-brand text-cream-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-20">
            <div className="space-y-6">
              <span className="text-gold-brand font-black uppercase tracking-[0.5em] text-xs">ZAMAN TÜNELİ</span>
              <h2 className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tighter">1994'ten <span className="text-gold-brand italic">Bugüne</span></h2>
            </div>

            <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 before:absolute before:hidden md:before:block before:top-12 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-gold-brand/30 before:to-transparent">
              {/* Year 1994 */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                className="relative z-10 flex flex-col items-center gap-8 group max-w-[280px]"
              >
                <div className="w-24 h-24 rounded-full bg-white text-indigo-brand flex items-center justify-center font-serif text-2xl font-bold border-8 border-indigo-brand shadow-2xl group-hover:bg-gold-brand group-hover:text-white transition-all duration-500">
                  1994
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-gold-brand uppercase tracking-widest">Başlangıç</h4>
                  <p className="text-cream-brand/60 text-lg leading-relaxed font-light italic">İstanbul'un kalbinde, küçük bir workshop ile başlayan büyük rüya.</p>
                </div>
              </motion.div>

              {/* Year 2008 */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 flex flex-col items-center gap-8 group max-w-[280px]"
              >
                <div className="w-24 h-24 rounded-full bg-white text-indigo-brand flex items-center justify-center font-serif text-2xl font-bold border-8 border-indigo-brand shadow-2xl group-hover:bg-gold-brand group-hover:text-white transition-all duration-500">
                  2008
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-gold-brand uppercase tracking-widest">Ustalık</h4>
                  <p className="text-cream-brand/60 text-lg leading-relaxed font-light italic">Kendi butik kavurma tesisimizi açarak her aromaya hakim olduk.</p>
                </div>
              </motion.div>

              {/* Year 2026 */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 flex flex-col items-center gap-8 group max-w-[280px]"
              >
                <div className="w-24 h-24 rounded-full bg-white text-indigo-brand flex items-center justify-center font-serif text-2xl font-bold border-8 border-indigo-brand shadow-2xl group-hover:bg-gold-brand group-hover:text-white transition-all duration-500">
                  2026
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-gold-brand uppercase tracking-widest">Zirve</h4>
                  <p className="text-cream-brand/60 text-lg leading-relaxed font-light italic">Türkiye'nin dört bir yanında 50+ şube ve milyonlarca kahve severe ulaştık.</p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-12 italic text-cream-brand/30 text-xl font-light tracking-[0.2em] uppercase">"BİR FİNCAN KAHVE, BİN YILLIK HİKAYE."</div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-32 bg-cream-brand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="space-y-6">
              <span className="text-gold-brand font-black uppercase tracking-[0.4em] text-xs">EN ÇOK SEVİLENLER</span>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-indigo-brand leading-none tracking-tighter">Sizin <span className="text-gold-brand italic">Favorileriniz</span></h2>
              <p className="text-indigo-brand/50 max-w-xl text-xl font-medium">Topluluğumuz tarafından en çok puanlanan ve tercih edilen özel seçkilerimiz.</p>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 font-black text-indigo-brand hover:text-gold-brand transition-all text-sm uppercase tracking-widest bg-white px-8 py-4 rounded-2xl shadow-xl shadow-indigo-brand/5">
              TÜMÜNÜ GÖR <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-gold-brand" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {bestSellers.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-indigo-brand rounded-[4rem] p-16 md:p-32 text-center text-cream-brand relative overflow-hidden shadow-[0_50px_100px_rgba(40,40,70,0.3)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col items-center gap-12">
              <h2 className="font-serif text-5xl md:text-8xl font-bold max-w-4xl leading-[0.9] tracking-tighter">
                Her Sabah <br /> <span className="italic text-gold-brand">Bir Sanat</span> <br /> Başlar
              </h2>
              <p className="text-cream-brand/60 max-w-2xl text-xl md:text-2xl font-light leading-relaxed italic">
                Sizin için en doğru çekirdeği bulalım. <br className="hidden md:block" /> Hemen mağazamızı inceleyin ve yolculuğunuzu başlatın.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/shop" className="bg-gold-brand text-indigo-brand px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-white transition-all active:scale-95 shadow-2xl shadow-black/20 uppercase tracking-widest">
                  ALIVERİŞE BAŞLA
                </Link>
                <Link to="/explore" className="bg-white/10 backdrop-blur-xl border border-white/20 text-cream-brand px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-white/20 transition-all uppercase tracking-widest">
                  ŞUBELERİMİZ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
