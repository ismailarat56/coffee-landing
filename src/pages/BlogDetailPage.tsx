import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-brand">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-serif font-bold text-indigo-brand">Yazı Bulunamadı</h2>
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold-brand font-bold hover:underline">
            <ArrowLeft size={20} /> Bloga Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 min-h-screen bg-white">
      <article>
        {/* Header Section */}
        <header className="container mx-auto px-4 md:px-8 mb-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-indigo-brand/40 font-bold text-sm uppercase tracking-widest hover:text-gold-brand transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Geri Dön
          </Link>
          
          <div className="max-w-4xl space-y-6">
            <span className="bg-gold-brand/10 text-gold-brand px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest inline-block">
              {post.category}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-indigo-brand leading-[1.1] tracking-tighter">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-indigo-brand/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-brand rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                  {post.author[0]}
                </div>
                <div>
                  <p className="text-xs font-black text-indigo-brand uppercase tracking-wider">{post.author}</p>
                  <p className="text-[10px] text-indigo-brand/40 font-bold uppercase tracking-widest">Yazar</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="flex items-center gap-2.5 text-[10px] font-black text-indigo-brand/40 uppercase tracking-widest">
                  <Calendar size={16} className="text-gold-brand" /> {post.date}
                </span>
                <span className="flex items-center gap-2.5 text-[10px] font-black text-indigo-brand/40 uppercase tracking-widest">
                  <MessageCircle size={16} className="text-gold-brand" /> 12 Yorum
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image - Espressolab Style prominence */}
        <div className="container mx-auto px-4 md:px-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-brand/20 to-transparent" />
          </motion.div>
        </div>

        {/* Content Section - High Readability */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-12 gap-16">
            {/* Sidebar Share Actions */}
            <aside className="lg:col-span-1 hidden lg:block sticky top-40 h-fit">
              <div className="flex flex-col gap-6">
                <button className="w-12 h-12 rounded-2xl border border-indigo-brand/5 flex items-center justify-center text-indigo-brand/40 hover:bg-gold-brand hover:text-white hover:border-gold-brand transition-all shadow-sm group">
                  <Share2 size={20} className="group-hover:scale-110 transition-transform" />
                </button>
                <div className="w-px h-16 bg-gradient-to-b from-indigo-brand/5 to-transparent mx-auto" />
              </div>
            </aside>

            {/* Main Article Body */}
            <div className="lg:col-span-11">
              <div 
                className="prose prose-xl prose-indigo max-w-none text-indigo-brand/80 leading-[1.8] font-medium
                prose-headings:font-serif prose-headings:text-indigo-brand prose-headings:font-bold
                prose-h3:text-3xl md:prose-h3:text-4xl prose-h3:mt-16 prose-h3:mb-8
                prose-p:mb-10 prose-p:text-lg md:prose-p:text-xl
                prose-blockquote:border-l-8 prose-blockquote:border-gold-brand prose-blockquote:bg-cream-brand/20 prose-blockquote:p-10 prose-blockquote:rounded-r-[2.5rem] prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-indigo-brand
                prose-strong:text-indigo-brand prose-strong:font-black"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags and Footer Meta */}
              <div className="mt-20 pt-12 border-t border-indigo-brand/5 flex flex-wrap gap-4">
                {['Kahve', 'BeeBu', 'Artizan', 'Kültür'].map(tag => (
                  <span key={tag} className="px-6 py-3 bg-gray-50 text-indigo-brand/40 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gold-brand hover:text-white transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Profile Box */}
              <div className="mt-24 p-12 bg-[#FDFCFB] rounded-[4rem] border border-indigo-brand/5 flex flex-col md:flex-row gap-10 items-center md:items-start shadow-sm">
                <div className="w-28 h-28 bg-indigo-brand rounded-[2.5rem] flex items-center justify-center text-white text-5xl font-serif font-bold shrink-0 shadow-xl">
                  {post.author[0]}
                </div>
                <div className="space-y-6 text-center md:text-left">
                  <div className="space-y-1">
                    <p className="text-gold-brand font-black text-xs uppercase tracking-[0.3em]">YAZAR HAKKINDA</p>
                    <h4 className="text-3xl font-serif font-bold text-indigo-brand">{post.author}</h4>
                  </div>
                  <p className="text-indigo-brand/60 text-lg leading-relaxed max-w-2xl font-medium italic">
                    BeeBuCoffee'nin hikaye anlatıcısı ve kahve tutkunu. Her fincanın arkasındaki emeği ve sanatı kelimelere dökmeyi seviyor.
                  </p>
                  <div className="flex justify-center md:justify-start gap-8 pt-4">
                    {['Instagram', 'Linkedin', 'Twitter'].map(social => (
                      <span key={social} className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-brand/40 cursor-pointer hover:text-gold-brand transition-colors">
                        {social}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Recommended Articles Section */}
      <section className="mt-40 py-40 bg-[#FDFCFB] border-t border-indigo-brand/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="text-gold-brand font-black uppercase tracking-[0.4em] text-xs">DAHA FAZLA OKU</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-indigo-brand">İlginizi Çekebilecek <span className="text-gold-brand italic">Diğer Yazılar</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3).map((recommended) => (
              <Link key={recommended.slug} to={`/blog/${recommended.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                  <img src={recommended.image} alt={recommended.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-indigo-brand/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-indigo-brand group-hover:text-gold-brand transition-colors duration-300 leading-tight">
                  {recommended.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
