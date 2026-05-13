import { motion } from 'motion/react';
import { UtensilsCrossed, Coffee, IceCream, Pizza } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ui/ProductCard';

export default function MenuPage() {
  const coffeeCategories = [
    { id: 'coffee', name: 'Sıcak Kahveler', icon: Coffee },
    { id: 'cold', name: 'Soğuk Kahveler', icon: IceCream },
    { id: 'bakery', name: 'Fırın & Pasta', icon: Pizza },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream-brand">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-16 space-y-4">
          <span className="text-gold-brand font-bold uppercase tracking-[0.4em] text-sm flex items-center gap-2">
            <UtensilsCrossed size={16} /> Keşfet
          </span>
          <h1 className="font-serif text-5xl font-bold text-indigo-brand">Mükemmellik <span className="text-gold-brand italic">Menüsü</span></h1>
          <p className="text-indigo-brand/60 text-lg">
            Özenle seçilmiş çekirdeklerden, taze fırın ürünlerimize kadar her lezzet damaklarınızda iz bırakmak için tasarlandı.
          </p>
        </header>

        {coffeeCategories.map((category) => (
          <section key={category.id} className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-brand rounded-2xl flex items-center justify-center text-gold-brand shadow-lg">
                <category.icon size={24} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-indigo-brand">{category.name}</h2>
              <div className="flex-1 h-[1px] bg-indigo-brand/10 ml-4 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.filter(p => 
                category.id === 'coffee' ? p.category === 'coffee' && !p.name.toLowerCase().includes('iced') && !p.name.toLowerCase().includes('cold') :
                category.id === 'cold' ? (p.category === 'coffee' && (p.name.toLowerCase().includes('iced') || p.name.toLowerCase().includes('cold'))) :
                false
              ).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
            
            {category.id === 'bakery' && (
              <div className="bg-white p-12 rounded-[3rem] text-center border-2 border-dashed border-indigo-brand/10">
                <p className="text-indigo-brand/40 font-bold uppercase tracking-widest italic">Çok yakında taze fırın ürünlerimizle buradayız!</p>
              </div>
            )}
          </section>
        ))}

        <section className="bg-indigo-brand rounded-[3rem] p-12 text-cream-brand flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold">Özel Bir Talebiniz mi Var?</h3>
            <p className="text-cream-brand/60">Alerjen bilgilerimiz ve özel siparişleriniz için ekiplerimize danışabilirsiniz.</p>
          </div>
          <button className="bg-gold-brand text-cream-brand px-10 py-4 rounded-full font-bold hover:bg-white hover:text-indigo-brand transition-all">
            Besin Tablosunu İncele
          </button>
        </section>
      </div>
    </main>
  );
}
