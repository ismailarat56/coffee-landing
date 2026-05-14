import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingBag, MapPin, Menu, X, ChevronDown, UtensilsCrossed, BookOpen, Tag, Calendar, MessageSquare } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const EXPLORE_SUB_LINKS = [
  { name: 'Menü', path: '/menu', icon: UtensilsCrossed },
  { name: 'Blog', path: '/blog', icon: BookOpen },
  { name: 'Kampanyalar', path: '/campaigns', icon: Tag },
  { name: 'Etkinlikler', path: '/events', icon: Calendar },
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

  const navLinks = [
    { name: 'Mağaza', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Menü', path: '/menu' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-cream-brand/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-indigo-brand rounded-2xl flex items-center justify-center text-gold-brand transition-all group-hover:rotate-12 group-hover:bg-gold-brand group-hover:text-indigo-brand shadow-lg">
            <Coffee size={28} />
          </div>
          <span className="font-serif text-2xl font-black tracking-tighter text-indigo-brand">
            BeeBu<span className="text-gold-brand">Coffee</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold tracking-wide transition-colors hover:text-gold-brand uppercase",
                location.pathname === link.path ? "text-gold-brand" : "text-indigo-brand/80"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Explore Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className={cn(
                "flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors hover:text-gold-brand cursor-pointer uppercase",
                isExploreOpen || location.pathname === '/explore' ? "text-gold-brand" : "text-indigo-brand/80"
              )}
            >
              Keşfet <ChevronDown size={14} className={cn("transition-transform duration-300", isExploreOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isExploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(40,40,70,0.15)] border border-indigo-brand/5 p-3 overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-1">
                    {EXPLORE_SUB_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsExploreOpen(false)}
                          className="flex items-center gap-4 p-4 rounded-2xl transition-all text-indigo-brand hover:text-gold-brand hover:bg-indigo-brand/5 group/item"
                        >
                          <div className="w-9 h-9 rounded-xl bg-indigo-brand/5 flex items-center justify-center group-hover/item:bg-gold-brand group-hover/item:text-white transition-colors">
                            <Icon size={18} />
                          </div>
                          <span className="text-sm font-bold">{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/contact"
            className="bg-indigo-brand text-cream-brand px-8 py-2.5 rounded-full text-sm font-bold hover:bg-gold-brand transition-all shadow-lg shadow-indigo-brand/10 hover:shadow-gold-brand/20 active:scale-95 ml-4"
          >
            İletişim
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-indigo-brand p-2 bg-indigo-brand/5 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-cream-brand border-b border-indigo-brand/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 text-xl font-bold p-4 rounded-2xl transition-all",
                    location.pathname === link.path ? "bg-gold-brand text-cream-brand" : "text-indigo-brand/70 hover:bg-indigo-brand/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="py-4">
                <p className="px-4 text-[10px] font-black text-indigo-brand/30 uppercase tracking-[0.2em] mb-4">Keşfedin</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {EXPLORE_SUB_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center justify-center p-6 rounded-[2rem] bg-white border border-indigo-brand/5 text-center gap-3 text-indigo-brand hover:text-gold-brand active:scale-95 transition-all shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-brand/5 flex items-center justify-center">
                        <link.icon size={20} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-tighter">{link.name}</span>
                    </Link>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-indigo-brand text-cream-brand py-5 rounded-2xl font-black text-center text-lg uppercase tracking-widest shadow-xl shadow-indigo-brand/20 flex items-center justify-center gap-3"
                >
                  <MessageSquare size={20} /> İLETİŞİM
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
