import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  ExternalLink,
  CheckCircle2,
  Globe,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { TextReveal } from '../common/TextReveal';

export const TemplatesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Los 4 casos reales solicitados por el usuario (SIN fotos IA ni logos ficticios)
  const realProjects = [
    {
      id: 'dulzuras-de-belgis',
      name: 'Dulzuras de Belgis',
      url: 'https://dulzuras-de-belgis.vercel.app/',
      displayUrl: 'dulzuras-de-belgis.vercel.app',
      category: 'Repostería & Dulces',
      type: 'bakery',
      description:
        'Catálogo de pasteles artesanales, postres para ocasiones especiales y pedidos directos a WhatsApp con cálculo de delivery.',
      features: [
        'Catálogo visual de postres y pasteles',
        'Botón directo de pedidos por WhatsApp',
        'Sin comisiones sobre las ventas',
        'Optimizado para teléfonos móviles',
      ],
      techSpecs: ['Vercel Edge', 'Responsive Mobile-First', 'WhatsApp Webhook'],
    },
    {
      id: 'costa-atlantica',
      name: 'Costa Atlántica',
      url: 'https://ejemplo-numero-2-de-costa-atlantica.vercel.app/',
      displayUrl: 'costa-atlantica.vercel.app',
      category: 'Gastronomía & Mariscos',
      type: 'restaurant',
      description:
        'Menú digital gourmet con código QR para mesas, platos del chef, alérgenos y pedidos inmediatos a cocina por WhatsApp.',
      features: [
        'Menú interactivo con código QR',
        'Notas especiales de preparación y mesa',
        'Filtro por entradas, platos fuertes y bebidas',
        'Cálculo automático de pedido para cocina',
      ],
      techSpecs: ['QR Mesa HD', 'Cero Comisiones', 'Carta Digital'],
    },
    {
      id: 'gorras-de-alex',
      name: 'Gorras de Alex',
      url: 'https://gorras-de-alex.vercel.app/#',
      displayUrl: 'gorras-de-alex.vercel.app',
      category: 'Moda Urbana & Accesorios',
      type: 'fashion',
      description:
        'Tienda digital de gorras y accesorios urbanos con catálogo fotográfico, selector de modelos y compras directas.',
      features: [
        'Galería de gorras y colecciones exclusivas',
        'Selector de modelo y variantes',
        'Pedidos armados directamente a WhatsApp',
        'Carga instantánea en smartphones',
      ],
      techSpecs: ['Catálogo 24/7', 'Selector Tallas/Modelos', 'Ventas Directas'],
    },
    {
      id: 'ferreteria-sage',
      name: 'Ferretería & Suministros (Sage)',
      url: 'http://ejemplo-3-sage.vercel.app/',
      displayUrl: 'ejemplo-3-sage.vercel.app',
      category: 'Ferretería & Industrial',
      type: 'hardware',
      description:
        'Catálogo técnico de alta densidad para ferreterías y suministros industriales con códigos de producto y cotizaciones en línea.',
      features: [
        'Fichas técnicas y catálogo denso',
        'Búsqueda rápida de herramientas y materiales',
        'Botón de cotización directa a WhatsApp',
        'Panel autoadministrable de inventario',
      ],
      techSpecs: ['Búsqueda SKU', 'Cotizador en Línea', 'Soporte Mayorista'],
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'Todos los Casos Reales' },
    { id: 'bakery', label: 'Repostería' },
    { id: 'restaurant', label: 'Gastronomía' },
    { id: 'fashion', label: 'Moda & Gorras' },
    { id: 'hardware', label: 'Ferretería' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? realProjects
      : realProjects.filter((p) => p.type === selectedFilter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="proyectos"
      className="py-24 lg:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>03. PORTAFOLIO // CASOS REALES EN PRODUCCIÓN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
              <TextReveal text="Sitios web y catálogos en producción activa." />
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed font-normal">
            Negocios reales operando y facturando con la infraestructura D.E.K NovaCore. Haz clic en cualquiera para visitar su web en vivo.
          </p>
        </div>

        {/* Clean Filter Segmented Control */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer font-['Outfit'] ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-[#080D18] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Real Projects Grid (Sin logos artificiales, pura ingeniería y enlaces reales) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, pIndex) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl bg-[#080D18] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
              {/* Subtle tech grid background highlight on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/[0.03] rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/[0.07] transition-all" />

              <div className="space-y-6 relative z-10">
                {/* Top Bar: Sin logos artificiales, solo nombre limpio y estado en vivo */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        // PROYECTO 0{pIndex + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] group-hover:text-cyan-200 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Sitio en Vivo</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Real Features List */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Domain & Tech Specs Badge */}
                <div className="space-y-2 pt-1">
                  <div className="p-3 rounded-xl bg-[#05070B] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-2 truncate">
                      <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate text-cyan-200 font-semibold">{project.displayUrl}</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold shrink-0">
                      DESPLEGADO
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techSpecs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* External Link Action Button */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] relative z-10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold border border-cyan-400/30 text-cyan-300 bg-cyan-950/20 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400 hover:text-slate-950 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer font-['Outfit'] group/btn shadow-md active:scale-[0.99]"
                >
                  <span>Abrir Sitio Web Oficial en Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
