import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Sparkles,
  Store,
  ChevronDown,
  ShoppingBag,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { useBusiness } from '../../contexts/BusinessContext';
import { useCart } from '../../contexts/CartContext';
import { DEKLogo } from './DEKLogo';

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const {
    businesses,
    activeView,
    goToLanding,
    goToAdmin,
  } = useBusiness();
  const { totalItems, openCart } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [examplesDropdownOpen, setExamplesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [logoClickCount, setLogoClickCount] = useState(0);

  const handleLogoClick = () => {
    setLogoClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        goToAdmin();
        return 0;
      }
      setTimeout(() => setLogoClickCount(0), 1200);
      return next;
    });
    goToLanding();
  };

  const getBusinessUrl = (biz: { websiteUrl?: string; slug: string }) => {
    if (biz.websiteUrl && biz.websiteUrl.trim()) {
      const trimmed = biz.websiteUrl.trim();
      return trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
    }
    return biz.slug.startsWith('http') ? biz.slug : `https://${biz.slug}.vercel.app`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section spy
      const sections = ['inicio', 'servicios', 'proceso', 'proyectos', 'precios', 'contacto'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setExamplesDropdownOpen(false);
    if (activeView !== 'landing') {
      goToLanding();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'precios', label: 'Precios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05070B]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-3'
            : 'bg-transparent border-b border-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark / Logo */}
            <div
              onClick={handleLogoClick}
              title="D.E.K NovaCore (Triple clic para acceso de gestión)"
              className="cursor-pointer select-none transition-transform duration-200 active:scale-95 flex items-center gap-3"
            >
              <DEKLogo size="sm" variant="horizontal" animated={true} showSubtitle={true} />
            </div>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <div className="flex items-center px-2 py-1 rounded-full bg-[#080D18]/80 border border-white/[0.06] backdrop-blur-md">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavTab"
                          className="absolute inset-0 rounded-full bg-white/[0.08] border border-cyan-400/30 shadow-[0_0_12px_rgba(0,217,255,0.15)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Verified Client Sites Dropdown */}
              <div className="relative ml-2">
                <button
                  onClick={() => setExamplesDropdownOpen(!examplesDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080D18]/80 text-slate-300 hover:text-white border border-white/[0.06] hover:border-cyan-400/30 text-xs transition-all cursor-pointer backdrop-blur-md"
                >
                  <Store className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sitios en Vivo</span>
                  <ChevronDown
                    className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                      examplesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {examplesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      onMouseLeave={() => setExamplesDropdownOpen(false)}
                      className="absolute top-full right-0 mt-2.5 w-72 bg-[#080D18]/95 rounded-2xl shadow-2xl border border-white/[0.1] py-2 z-50 backdrop-blur-2xl"
                    >
                      <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-between border-b border-white/[0.06] font-mono">
                        <span>Catálogos & Sitios Oficiales</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      {businesses.length === 0 ? (
                        <div className="px-3.5 py-4 text-center text-xs text-slate-400">
                          Sin negocios creados aún. Accede al administrador para crear el primero.
                        </div>
                      ) : (
                        <div className="mt-1 divide-y divide-white/[0.04] max-h-64 overflow-y-auto">
                          {businesses.map((biz) => {
                            const targetUrl = getBusinessUrl(biz);
                            return (
                              <a
                                key={biz.id}
                                href={targetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setExamplesDropdownOpen(false)}
                                className="w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between gap-3 hover:bg-white/[0.04] transition-colors cursor-pointer group"
                              >
                                <div className="flex items-center gap-2.5 truncate">
                                  <img
                                    src={biz.logoUrl}
                                    alt={biz.name}
                                    className="w-6 h-6 rounded-md object-cover border border-white/10 shrink-0"
                                  />
                                  <div className="truncate">
                                    <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                                      {biz.name}
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-mono truncate">
                                      {biz.websiteUrl ? biz.websiteUrl.replace(/^https?:\/\//i, '') : `${biz.slug}.vercel.app`}
                                    </div>
                                  </div>
                                </div>
                                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-2.5">
              {/* Cart Icon */}
              {(activeView === 'public_store' || totalItems > 0) && (
                <button
                  onClick={openCart}
                  className="relative p-2 rounded-xl bg-[#080D18] text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                  title="Abrir Carrito"
                >
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 text-slate-950 text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                      {totalItems}
                    </span>
                  )}
                </button>
              )}

              {/* Primary Action Button */}
              <button
                onClick={() => {
                  if (onOpenOrderModal) onOpenOrderModal();
                }}
                className="btn-sheen hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 text-xs font-bold rounded-xl shadow-[0_0_20px_rgba(0,217,255,0.25)] transition-all cursor-pointer font-['Outfit'] active:scale-95"
              >
                <span>Hacer Pedido</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menú de navegación"
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Cinematic Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#05070B]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            {/* Ambient Lighting in Mobile Menu */}
            <div className="absolute top-1/4 right-0 w-72 h-72 ambient-glow-cyan rounded-full pointer-events-none blur-3xl opacity-30" />

            {/* Links Stagger */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-mono block">
                Navegación
              </span>
              <div className="space-y-2">
                {navLinks.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left py-3 text-2xl font-black text-white hover:text-cyan-300 transition-colors font-['Outfit'] flex items-center justify-between border-b border-white/[0.05]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 opacity-60" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Actions Bottom */}
            <div className="space-y-4 pt-6">
              <button
                onClick={() => {
                  if (onOpenOrderModal) onOpenOrderModal();
                  setMobileMenuOpen(false);
                }}
                className="btn-sheen w-full py-4 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 font-black rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 cursor-pointer font-['Outfit'] active:scale-95"
              >
                <span>Hacer Pedido para mi Negocio</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-mono">
                <span>D.E.K NovaCore</span>
                <span className="text-cyan-400">+507 6695-2340</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
