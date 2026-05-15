import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingBag, MapPin, Menu, X, ChevronDown, UtensilsCrossed, BookOpen, Tag, Calendar, MessageSquare } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const EXPLORE_SUB_LINKS = [
  { name: 'Şubeler', path: '/explore', icon: MapPin },
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 bg-cream-brand border border-indigo-brand/10 p-2 overflow-hidden shadow-2xl rounded-[1.5rem]"
                >
                  <div className="grid grid-cols-1 gap-1">
                    {EXPLORE_SUB_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsExploreOpen(false)}
                          className="flex items-center gap-4 p-3 rounded-xl transition-all text-indigo-brand/80 hover:text-indigo-brand hover:bg-white group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover/item:bg-gold-brand group-hover/item:text-white transition-colors border border-indigo-brand/5">
                            <Icon size={16} />
                          </div>
                          <span className="text-sm font-bold tracking-tight">{link.name}</span>
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
            className="ml-4 bg-indigo-brand text-cream-brand px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase hover:bg-gold-brand transition-all shadow-lg active:scale-95"
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
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-cream-brand border-b border-indigo-brand/10 shadow-2xl md:hidden overflow-y-auto"
            style={{ height: 'calc(100vh - 80px)' }}
          >
            <div className="flex flex-col items-center justify-center p-8 gap-6 min-h-full">
              <div className="flex flex-col w-full max-w-sm gap-4">
                {[...navLinks, { name: 'İletişim', path: '/contact' }].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-center gap-4 text-2xl font-bold p-4 rounded-[2rem] transition-all w-full",
                      location.pathname === link.path ? "bg-indigo-brand text-cream-brand" : "text-indigo-brand hover:bg-indigo-brand/5 border border-indigo-brand/5 bg-white"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="w-full max-w-sm pt-8 border-t border-indigo-brand/10">
                <p className="text-center text-xs font-black text-indigo-brand/40 uppercase tracking-[0.3em] mb-6">Daha Fazla Keşfet</p>
                <div className="grid grid-cols-3 gap-3">
                  {EXPLORE_SUB_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-white border border-indigo-brand/5 text-center gap-2 text-indigo-brand hover:text-gold-brand active:scale-95 transition-all shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-brand/5 flex items-center justify-center text-gold-brand">
                        <link.icon size={20} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-tighter">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
