import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Package, Coffee, Thermometer, Box } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ui/ProductCard';
import { cn } from '../lib/utils';

type Category = 'all' | 'coffee' | 'thermos' | 'accessory';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'Tümü', icon: Package },
    { id: 'coffee', name: 'Kahveler', icon: Coffee },
    { id: 'thermos', name: 'Termoslar', icon: Thermometer },
    { id: 'accessory', name: 'Aksesuarlar', icon: Box },
  ] as const;

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl font-bold text-indigo-brand">Mağaza</h1>
            <p className="text-indigo-brand/60 max-w-md">Özel harman kahvelerimizden profesyonel ekipmanlarımıza kadar ihtiyacınız olan her şey burada.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-brand/40" size={20} />
            <input 
              type="text" 
              placeholder="Ürün ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-indigo-brand/10 pl-12 pr-4 py-3 rounded-2xl focus:ring-2 focus:ring-army-brand outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm transition-all shrink-0 active:scale-95",
                  isActive 
                    ? "bg-gold-brand text-cream-brand shadow-lg shadow-gold-brand/20" 
                    : "bg-white text-indigo-brand/70 hover:bg-indigo-brand/5 border border-indigo-brand/10"
                )}
              >
                <Icon size={18} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center space-y-4 bg-white rounded-3xl border-2 border-dashed border-indigo-brand/10">
                <div className="w-20 h-20 bg-indigo-brand/5 rounded-full flex items-center justify-center mx-auto text-indigo-brand/40">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-indigo-brand">Ürün Bulunamadı</h3>
                <p className="text-indigo-brand/50">Aramanıza veya seçtiğiniz kategoriye uygun ürün bulunmuyor.</p>
                <button 
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="text-gold-brand font-bold underline"
                >
                  Sıfırla ve Göz Atmaya Devam Et
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
