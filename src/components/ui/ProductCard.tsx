import { motion } from 'motion/react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { cn } from '../../lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-indigo-brand/5",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-cream-dark">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.bestSeller && (
          <div className="absolute top-4 left-4 bg-gold-brand text-cream-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-10 shadow-lg">
            En Çok Satan
          </div>
        )}
        <div className="absolute inset-0 bg-indigo-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button className="p-3 bg-cream-brand text-indigo-brand rounded-full hover:bg-gold-brand hover:text-cream-brand transition-colors transform translate-y-10 group-hover:translate-y-0 duration-300">
            <Eye size={20} />
          </button>
          <button className="p-3 bg-indigo-brand text-cream-brand rounded-full hover:bg-gold-brand transition-colors transform translate-y-10 group-hover:translate-y-0 delay-75 duration-300">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-gold-brand uppercase tracking-widest">{product.category}</span>
          <span className="font-bold text-indigo-brand">{product.price} TL</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-indigo-brand mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-indigo-brand/60 text-xs line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
