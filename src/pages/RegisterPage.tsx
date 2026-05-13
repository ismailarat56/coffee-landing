import { motion } from 'motion/react';
import { UserPlus } from 'lucide-react';

export default function RegisterPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-indigo-brand/5 shadow-indigo-brand/10"
        >
          <div className="w-16 h-16 bg-gold-brand/10 rounded-2xl flex items-center justify-center text-gold-brand mx-auto mb-6">
            <UserPlus size={32} />
          </div>
          <h1 className="font-serif text-3xl font-bold text-indigo-brand text-center mb-8">Müşteri Kaydı</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-indigo-brand/50 uppercase mb-2">Ad Soyad</label>
              <input type="text" className="w-full bg-cream-brand border border-indigo-brand/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-gold-brand transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-indigo-brand/50 uppercase mb-2">E-Posta</label>
              <input type="email" className="w-full bg-cream-brand border border-indigo-brand/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-gold-brand transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-indigo-brand/50 uppercase mb-2">Şifre</label>
              <input type="password" className="w-full bg-cream-brand border border-indigo-brand/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-gold-brand transition-all" />
            </div>
            <button className="w-full bg-indigo-brand text-cream-brand py-4 rounded-xl font-bold hover:bg-gold-brand transition-colors mt-4">
              Kayıt Ol
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
