import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/mockData';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold">Ürün bulunamadı</h2>
        <Link to="/shop" className="text-gold-brand mt-4 inline-block">Mağazaya dön</Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream-brand">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/shop" className="flex items-center gap-2 text-indigo-brand font-bold mb-8 hover:text-gold-brand transition-colors w-fit">
          <ArrowLeft size={20} /> Geri Dön
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Product Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-2xl border-[12px] border-white group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            {product.bestSeller && (
              <div className="absolute top-8 left-8 bg-indigo-brand text-cream-brand px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                En Çok Sevilen
              </div>
            )}
          </motion.div>

          {/* Product Info Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold-brand font-bold uppercase tracking-[0.3em] text-sm">{product.category}</span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-indigo-brand leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-serif font-bold text-indigo-brand/90 italic">
                ₺{product.price.toLocaleString('tr-TR')}
              </p>
            </div>

            <p className="text-indigo-brand/70 text-lg leading-relaxed">
              {product.description}
              <br /><br />
              BeeBuCoffee kalitesiyle hazırlanan bu ürün, en taze haliyle paketlenerek kapınıza kadar ulaştırılır. Detaylı tadım notları ve demleme tavsiyeleri kutu içerisinde yer almaktadır.
            </p>

            <div className="flex gap-4">
              <button className="flex-1 bg-indigo-brand text-cream-brand py-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-gold-brand transition-all shadow-xl shadow-indigo-brand/20 active:scale-95 text-lg">
                <ShoppingCart size={24} /> Sepete Ekle
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-indigo-brand/10">
              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/50 border border-indigo-brand/5 shadow-sm">
                <Truck size={20} className="text-gold-brand" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-brand/60">Hızlı Teslimat</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/50 border border-indigo-brand/5 shadow-sm">
                <ShieldCheck size={20} className="text-gold-brand" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-brand/60">Güvenli Ödeme</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/50 border border-indigo-brand/5 shadow-sm">
                <RefreshCcw size={20} className="text-gold-brand" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-brand/60">Kolay İade</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Suggestion Section */}
        <section className="mt-32">
          <h3 className="font-serif text-3xl font-bold text-indigo-brand mb-12">İlginizi Çekebilir</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 opacity-70 hover:opacity-100 transition-opacity">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="block group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 border-2 border-transparent group-hover:border-gold-brand transition-all">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h4 className="font-bold text-indigo-brand group-hover:text-gold-brand transition-colors">{p.name}</h4>
                <p className="text-gold-brand font-serif italic text-sm">₺{p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
