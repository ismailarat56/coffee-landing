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
