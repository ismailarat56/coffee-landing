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
          <section key={category.id} className="mb-24">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <div className="w-16 h-16 bg-white border border-indigo-brand/10 rounded-[2rem] flex items-center justify-center text-gold-brand shadow-[0_20px_40px_rgba(40,40,70,0.08)]">
                <category.icon size={28} />
              </div>
              <h2 className="font-serif text-4xl font-bold text-indigo-brand">{category.name}</h2>
              <div className="w-24 h-[2px] bg-gold-brand/40 mt-2" />
            </div>

            <div className="flex flex-wrap justify-center gap-16 lg:gap-24">
              {PRODUCTS.filter(p => 
                category.id === 'coffee' ? p.category === 'coffee' && !p.name.toLowerCase().includes('iced') && !p.name.toLowerCase().includes('cold') :
                category.id === 'cold' ? (p.category === 'coffee' && (p.name.toLowerCase().includes('iced') || p.name.toLowerCase().includes('cold'))) :
                category.id === 'bakery' ? p.category === 'bakery' :
                false
              ).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-[calc(50%-4rem)] lg:w-[calc(25%-6rem)] min-w-[280px] max-w-[320px]"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-indigo-brand rounded-[3rem] p-12 text-cream-brand flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold">Özel Bir Talebiniz mi Var?</h3>
            <p className="text-cream-brand/60">Alerjen bilgilerimiz ve özel siparişleriniz için ekiplerimize danışabilirsiniz.</p>
          </div>
          
        </section>
      </div>
    </main>
  );
}
