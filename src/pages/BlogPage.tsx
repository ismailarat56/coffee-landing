import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-[#FDFCFB]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <span className="text-gold-brand font-black uppercase tracking-[0.4em] text-xs">BLOG</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-indigo-brand">Kahveye Dair <span className="text-gold-brand italic">Her Şey</span></h1>
          <div className="w-24 h-1 bg-gold-brand/30 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full border border-gray-100"
            >
              <Link to={`/blog/${post.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-indigo-brand text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-black text-indigo-brand/30 uppercase tracking-widest">
                    <Calendar size={14} className="text-gold-brand/60" /> {post.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                  <div className="flex items-center gap-2 text-[10px] font-black text-indigo-brand/30 uppercase tracking-widest">
                    <User size={14} className="text-gold-brand/60" /> {post.author}
                  </div>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-indigo-brand mb-6 leading-[1.2] group-hover:text-gold-brand transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-indigo-brand/50 leading-relaxed line-clamp-3 text-base font-medium mb-10">
                  {post.excerpt}
                </p>

                <div className="mt-auto border-t border-gray-50 pt-8">
                  <Link to={`/blog/${post.slug}`} className="flex items-center gap-3 text-indigo-brand font-black text-xs uppercase tracking-[0.2em] group/btn">
                    <span className="relative overflow-hidden inline-block">
                      DEVAMINI OKU
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-brand transform translate-x-[-105%] group-hover/btn:translate-x-0 transition-transform duration-500" />
                    </span>
                    <ArrowRight size={18} className="text-gold-brand group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Brand Story Highlight */}
        <section className="mt-32 bg-cream-brand rounded-[3rem] p-12 md:p-24 overflow-hidden relative border border-indigo-brand/5 shadow-inner">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gold-brand/5 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-2xl space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-indigo-brand uppercase">1994'ten <span className="text-gold-brand italic">Sonsuza</span></h2>
            <div className="space-y-6 text-indigo-brand/70 text-lg leading-relaxed">
              <p>
                BeeBuCoffee, sadece kahve satmak için değil, kahveye olan saygıyı yeniden tanımlamak için kuruldu. İstanbul'un tarih kokan dar sokaklarında başlayan bu hikaye, bugün sınırları aşan bir tutkuya dönüştü.
              </p>
              <p>
                Bizim için her çekirdek bir hikaye anlatır; toprağından, yağmurundan, çiftçisinin ellerinden taşınan bir hikaye. Görevimiz ise bu hikayeyi en doğru notalarla sizin fincanınıza ulaştırmak.
              </p>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
