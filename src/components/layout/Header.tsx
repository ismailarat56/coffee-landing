import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingBag, MapPin, Menu, X, ChevronDown, UtensilsCrossed, BookOpen, Tag, Calendar, MessageSquare } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const EXPLORE_SUB_LINKS = [
  { name: 'Bayilerimiz', path: '/explore', icon: MapPin },
  { name: 'Menü', path: '/menu', icon: UtensilsCrossed },
  { name: 'Blog', path: '/blog', icon: BookOpen },
  { name: 'Kampanyalar', path: '/campaigns', icon: Tag },
  { name: 'Etkinlikler', path: '/events', icon: Calendar },
  { name: 'İletişim', path: '/contact', icon: MessageSquare },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-cream-brand/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-brand rounded-full flex items-center justify-center text-cream-brand transition-transform group-hover:rotate-12">
            <Coffee size={24} />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-indigo-brand">
            Artisan<span className="text-gold-brand">&</span>Brew
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-brand",
              location.pathname === '/' ? "text-gold-brand font-bold" : "text-indigo-brand/70"
            )}
          >
            Ana Sayfa
          </Link>
          <Link
            to="/shop"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-brand",
              location.pathname === '/shop' ? "text-gold-brand font-bold" : "text-indigo-brand/70"
            )}
          >
            Mağaza
          </Link>

          {/* Explore Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-brand cursor-pointer",
                isExploreOpen || location.pathname === '/explore' ? "text-gold-brand font-bold" : "text-indigo-brand/70"
              )}
            >
              Keşfet <ChevronDown size={14} className={cn("transition-transform", isExploreOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isExploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-56 bg-white rounded-2xl shadow-2xl border border-indigo-brand/5 p-2 overflow-hidden"
                >
                  <div className="grid grid-cols-1">
                    {EXPLORE_SUB_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsExploreOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl transition-colors text-indigo-brand hover:bg-gold-brand/5 hover:text-gold-brand group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-indigo-brand/5 flex items-center justify-center group-hover/item:bg-gold-brand/10 group-hover/item:text-gold-brand">
                            <Icon size={16} />
                          </div>
                          <span className="text-sm font-semibold">{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/register"
            className="bg-indigo-brand text-cream-brand px-6 py-2 rounded-full text-sm font-semibold hover:bg-gold-brand transition-colors active:scale-95"
          >
            Giriş Yap
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-indigo-brand p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream-brand border-b border-indigo-brand/10 shadow-xl md:hidden overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col p-6 gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 text-lg font-medium p-3 rounded-lg transition-colors",
                  location.pathname === '/' ? "bg-gold-brand/10 text-gold-brand" : "text-indigo-brand/70 hover:bg-indigo-brand/5"
                )}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 text-lg font-medium p-3 rounded-lg transition-colors",
                  location.pathname === '/shop' ? "bg-gold-brand/10 text-gold-brand" : "text-indigo-brand/70 hover:bg-indigo-brand/5"
                )}
              >
                Mağaza
              </Link>
              
              <div className="py-2">
                <p className="px-3 text-[10px] font-bold text-indigo-brand/30 uppercase tracking-widest mb-2">Keşfet</p>
                <div className="grid grid-cols-2 gap-2">
                  {EXPLORE_SUB_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-indigo-brand/5 text-center gap-2 text-indigo-brand hover:text-gold-brand active:scale-95 transition-all"
                    >
                      <link.icon size={20} />
                      <span className="text-xs font-bold">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <hr className="border-indigo-brand/10 my-4" />
              <Link 
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full bg-indigo-brand text-cream-brand py-4 rounded-xl font-bold text-center"
              >
                Giriş Yap / Kayıt Ol
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
