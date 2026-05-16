import { motion } from 'motion/react';
import { ShoppingCart, Eye, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(40,40,70,0.05)] hover:shadow-[0_20px_60px_rgba(40,40,70,0.12)] transition-all border border-indigo-brand/5",
        className
      )}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-cream-dark">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.bestSeller && (
          <div className="absolute top-6 left-6 bg-gold-brand text-cream-brand px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg shadow-gold-brand/20">
            En Çok Sevilen
          </div>
        )}
        <div className="absolute inset-0 bg-indigo-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <div className="p-4 bg-cream-brand text-indigo-brand rounded-full shadow-2xl transform scale-50 group-hover:scale-100 duration-500">
            <Eye size={24} />
          </div>
        </div>
      </Link>

      <div className="p-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-black text-gold-brand uppercase tracking-[0.2em]">{product.category}</span>
          <span className="font-serif font-black text-indigo-brand text-lg">₺{product.price}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl font-bold text-indigo-brand mb-3 line-clamp-1 group-hover:text-gold-brand transition-colors">{product.name}</h3>
        </Link>
        <p className="text-indigo-brand/60 text-xs line-clamp-2 leading-relaxed mb-6 font-medium">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-indigo-brand/5">
          <button className="flex-1 bg-indigo-brand text-cream-brand py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gold-brand transition-all active:scale-95">
            <ShoppingCart size={16} /> Sepete Ekle
          </button>
        </div>
      </div>
    </motion.div>
  );
}
