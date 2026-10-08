import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  ArrowRight,
  Store,
  CheckCircle2,
  ExternalLink,
  Globe,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useBusiness } from '../../contexts/BusinessContext';
import { DEKLogo } from '../common/DEKLogo';
import { TextReveal } from '../common/TextReveal';

interface HeroProps {
  onOpenOrderModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const { businesses } = useBusiness();
  const [activeRealCaseIndex, setActiveRealCaseIndex] = useState(0);

  // Los 4 casos reales solicitados (sin logos artificiales ni fotos IA)
  const realCases = [
    {
      name: 'Dulzuras de Belgis',
      url: 'https://dulzuras-de-belgis.vercel.app/',
      displayUrl: 'dulzuras-de-belgis.vercel.app',
      category: 'Pastelería & Repostería',
      tagline: 'Catálogo de pasteles artesanales y pedidos personalizados directo a WhatsApp',
      highlights: ['Catálogo con precios en vivo', 'Pedidos directos a WhatsApp', 'Cálculo de delivery'],
    },
    {
      name: 'Costa Atlántica',
      url: 'https://ejemplo-numero-2-de-costa-atlantica.vercel.app/',
      displayUrl: 'costa-atlantica.vercel.app',
      category: 'Restaurante & Mariscos',
      tagline: 'Menú digital gourmet con código QR para mesas y pedidos a cocina',
      highlights: ['Menú QR para mesas', 'Notas de cocina por plato', 'Cálculo de orden al instante'],
    },
    {
      name: 'Gorras de Alex',
      url: 'https://gorras-de-alex.vercel.app/#',
      displayUrl: 'gorras-de-alex.vercel.app',
      category: 'Moda Urbana & Accesorios',
      tagline: 'Tienda digital de gorras y colecciones urbanas exclusivas 24/7',
      highlights: ['Galería de modelos', 'Selector de compras ágil', 'Sin comisiones a apps'],
    },
    {
      name: 'Ferretería & Suministros (Sage)',
      url: 'http://ejemplo-3-sage.vercel.app/',
      displayUrl: 'ejemplo-3-sage.vercel.app',
      category: 'Ferretería & Materiales',
      tagline: 'Catálogo técnico de herramientas y suministros industriales',
      highlights: ['Catálogo industrial denso', 'Cotizaciones inmediatas', 'Gestión rápida de stock'],
    },
  ];

  const currentCase = realCases[activeRealCaseIndex];

  const handleScrollToProjects = () => {
    const el = document.getElementById('proyectos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToWhyAnyBusiness = () => {
    const el = document.getElementById('cualquier-negocio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Cinematic variants
  const logoVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const headlineVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const subtitleVariant: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const ctaVariant: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const showcaseVariant: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 bg-[#05070B] bg-cosmic-grid"
    >
      {/* Controlled ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] ambient-glow-blue rounded-full pointer-events-none blur-3xl opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] ambient-glow-cyan rounded-full pointer-events-none blur-3xl opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo Entry */}
          <motion.div
            variants={logoVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <div className="p-1 rounded-2xl bg-gradient-to-b from-cyan-400/20 via-blue-600/10 to-transparent shadow-[0_0_25px_rgba(0,217,255,0.12)]">
              <DEKLogo size="lg" variant="symbol" animated={true} />
            </div>

            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080D18]/90 border border-white/[0.08] text-[11px] font-mono text-slate-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold text-white">D.E.K NovaCore</span>
              <span className="text-slate-600">/</span>
              <span className="text-cyan-400">Desarrollo Web & Soluciones Digitales</span>
            </div>
          </motion.div>

          {/* Headline con TextReveal para transiciones cinematográficas en las letras */}
          <motion.div
            variants={headlineVariant}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-['Outfit']">
              <TextReveal text="Tu negocio merece estar en Internet" />{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                con máxima distinción.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariant}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Sitios web profesionales, catálogos digitales interactivos y menús QR con pedidos ordenados directos a WhatsApp. Pagos únicos, sin comisiones mensuales y con base de datos en Supabase.
          </motion.p>

          {/* CTAs (Sin estrellas ni adornos infantiles) */}
          <motion.div
            variants={ctaVariant}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                if (onOpenOrderModal) onOpenOrderModal();
              }}
              className="btn-sheen w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 text-sm font-black rounded-xl shadow-[0_0_30px_rgba(0,217,255,0.25)] transition-all flex items-center justify-center gap-2.5 cursor-pointer font-['Outfit'] active:scale-[0.98]"
            >
              <span>Hacer Pedido para mi Negocio</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={handleScrollToWhyAnyBusiness}
              className="w-full sm:w-auto px-7 py-4 bg-[#080D18] text-slate-300 hover:text-white hover:bg-[#0B1220] border border-white/[0.1] hover:border-cyan-400/50 text-sm font-bold rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-['Outfit'] active:scale-[0.98]"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>¿Cómo funciona para mi negocio?</span>
            </button>

            <button
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-6 py-4 bg-transparent text-slate-400 hover:text-white border border-transparent hover:border-white/[0.1] text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-['Outfit']"
            >
              <Store className="w-4 h-4 text-slate-400" />
              <span>Ver Casos Reales en Vivo</span>
            </button>
          </motion.div>

          {/* Trust Guarantees */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-200">0% Comisiones por venta</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-200">Pedidos directos a WhatsApp (+507 6695-2340)</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-200">Código QR vectorial incluido</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-200">Base de datos PostgreSQL en Supabase</span>
            </div>
          </div>
        </div>

        {/* Real Live Showcase Frame (Sin logos artificiales, pura interfaz web real) */}
        <motion.div
          variants={showcaseVariant}
          initial="hidden"
          animate="visible"
          className="mt-16 sm:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-400/25 via-white/[0.08] to-transparent shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <div className="relative rounded-xl overflow-hidden bg-[#080D18] border border-white/[0.08]">
              {/* Browser Header Bar */}
              <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#05070B] border-b border-white/[0.06] text-xs gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <div className="flex items-center gap-1.5 ml-2 bg-[#080D18] px-3 py-1 rounded-md border border-white/[0.06] text-[11px] font-mono text-cyan-300">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    <span>https://{currentCase.displayUrl}</span>
                  </div>
                </div>

                {/* Real Case Selector Tabs */}
                <div className="flex flex-wrap items-center gap-1 bg-[#080D18] p-1 rounded-lg border border-white/[0.06]">
                  {realCases.map((rc, idx) => (
                    <button
                      key={rc.name}
                      onClick={() => setActiveRealCaseIndex(idx)}
                      className={`px-3 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                        activeRealCaseIndex === idx
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-bold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {rc.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Real Project Preview Canvas with smooth transition */}
              <div className="p-8 sm:p-10 bg-gradient-to-br from-[#080D18] via-[#05070B] to-[#0B1220] flex flex-col justify-between min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRealCaseIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="text-left space-y-1">
                        <div className="inline-flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                            {currentCase.category}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                            ● EN PRODUCCIÓN
                          </span>
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                          {currentCase.name}
                        </div>
                      </div>

                      <a
                        href={currentCase.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 text-cyan-300 hover:text-slate-950 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400 border border-cyan-400/30 text-xs font-bold font-mono transition-all group/link shadow-md"
                      >
                        <span>Abrir Sitio Real en Vivo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover/link:text-slate-950 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>

                    <p className="text-sm text-slate-300 max-w-xl text-left leading-relaxed">
                      {currentCase.tagline}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
                      {currentCase.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-3 rounded-xl bg-[#05070B] border border-white/[0.06] text-xs text-slate-300 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Status Bar */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Desplegado y funcionando en la web</span>
                  </div>

                  <button
                    onClick={() => onOpenOrderModal && onOpenOrderModal()}
                    className="btn-sheen px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all cursor-pointer font-['Outfit'] active:scale-95"
                  >
                    Quiero un sitio web para mi negocio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
