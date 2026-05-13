import { motion } from 'motion/react';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Çekirdekten Fincana: Sürdürülebilirliğin Öyküsü',
    excerpt: 'Çiftliklerimizden masanıza gelen kahvenin adil ticaret ve doğa dostu yöntemlerle olan yolculuğu.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    author: 'Deniz Eren',
    date: '12 Mayıs 2026',
    category: 'Sürdürülebilirlik'
  },
  {
    id: 2,
    title: 'Evde Mükemmel V60 Demleme Rehberi',
    excerpt: 'Doğru sıcaklık, doğru öğütme ve o meşhur döküş tekniği ile kahvenizi profesyonelleştirin.',
    image: 'https://images.unsplash.com/photo-1544666107-160fa1f9745e?q=80&w=800&auto=format&fit=crop',
    author: 'Mert Aksoy',
    date: '08 Mayıs 2026',
    category: 'Demleme Rehberi'
  },
  {
    id: 3,
    title: 'Indigo ve Altın: Marka Renklerimizin Hikayesi',
    excerpt: 'Artisan & Brew kimliğini oluşturan indigo mavisi ve altın sarısının temsil ettiği değerler.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
    author: 'Selin Yılmaz',
    date: '01 Mayıs 2026',
    category: 'Marka Hikayesi'
  }
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-gold-brand font-bold uppercase tracking-[0.4em] text-sm flex items-center gap-2">
              <BookOpen size={16} /> Okuma Köşesi
            </span>
            <h1 className="font-serif text-5xl font-bold text-indigo-brand">Kahve <span className="text-gold-brand italic">Kültürü</span></h1>
            <p className="text-indigo-brand/60 max-w-lg">Markamızın kalbinden, kahve tarlalarından ve baristalarımızın sırlarından haberler.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-indigo-brand text-cream-brand px-6 py-3 rounded-full text-sm font-bold">Tümü</button>
            <button className="border border-indigo-brand/10 text-indigo-brand/60 px-6 py-3 rounded-full text-sm font-bold hover:bg-indigo-brand/5">Haberler</button>
            <button className="border border-indigo-brand/10 text-indigo-brand/60 px-6 py-3 rounded-full text-sm font-bold hover:bg-indigo-brand/5">Rehberler</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-indigo-brand px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] font-bold text-indigo-brand/40 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold-brand" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={12} className="text-gold-brand" /> {post.author}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-indigo-brand leading-tight group-hover:text-gold-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-indigo-brand/60 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-2 flex items-center gap-2 text-indigo-brand font-bold group-hover:translate-x-2 transition-transform">
                  Devamını Oku <ArrowRight size={18} className="text-gold-brand" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Brand Story Highlight */}
        <section className="mt-32 bg-cream-dark rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gold-brand/5 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-2xl space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-indigo-brand uppercase">1994'ten <span className="text-gold-brand italic">Sonsuza</span></h2>
            <div className="space-y-6 text-indigo-brand/70 text-lg leading-relaxed">
              <p>
                Artisan & Brew, sadece kahve satmak için değil, kahveye olan saygıyı yeniden tanımlamak için kuruldu. İstanbul'un tarih kokan dar sokaklarında başlayan bu hikaye, bugün sınırları aşan bir tutkuya dönüştü.
              </p>
              <p>
                Bizim için her çekirdek bir hikaye anlatır; toprağından, yağmurundan, çiftçisinin ellerinden taşınan bir hikaye. Görevimiz ise bu hikayeyi en doğru notalarla sizin fincanınıza ulaştırmak.
              </p>
            </div>
            <button className="border-2 border-indigo-brand text-indigo-brand px-10 py-4 rounded-full font-bold hover:bg-indigo-brand hover:text-cream-brand transition-all">
              Tarihimizin Derinlikleri
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
