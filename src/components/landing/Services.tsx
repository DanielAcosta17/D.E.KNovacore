import React from 'react';
import { motion, type Variants } from 'motion/react';
import {
  Globe,
  Layers,
  UtensilsCrossed,
  MessageSquare,
  Database,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { SpotlightCard } from '../common/SpotlightCard';
import { TextReveal } from '../common/TextReveal';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'web',
      icon: Globe,
      number: '01',
      title: 'Desarrollo de Sitios Web de Alta Conversión',
      subtitle: 'Presencia digital exclusiva y rendimiento ultra veloz',
      description:
        'Diseñamos y programamos sitios web corporativos y comerciales con arquitectura moderna, optimización SEO avanzada y adaptación visual a la identidad de tu marca.',
      deliverables: [
        'Arquitectura 100% responsiva (iPhone, Android, Desktop)',
        'Tiempos de carga inferiores a 1 segundo',
        'Optimización técnica de metadatos para buscadores',
      ],
      metric: '99+ Puntuación en Rendimiento Web',
      span: 'lg:col-span-2',
      glowColor: 'rgba(0, 217, 255, 0.14)',
    },
    {
      id: 'catalogs',
      icon: Layers,
      number: '02',
      title: 'Catálogos Digitales Interactivos',
      subtitle: 'Galería de productos organizada y siempre actualizada',
      description:
        'Presenta todo tu inventario con fotografías en alta fidelidad, buscador en tiempo real, etiquetas de oferta, especificaciones y gestión de productos agotados.',
      deliverables: [
        'Búsqueda predictiva instantánea y filtros por categoría',
        'Etiquetas de precio regular y precio promocional',
        'Modo sin inventario con activación en 1 clic',
      ],
      metric: '5x Más rapidez para cerrar ventas',
      span: 'lg:col-span-1',
      glowColor: 'rgba(37, 99, 255, 0.14)',
    },
    {
      id: 'menus',
      icon: UtensilsCrossed,
      number: '03',
      title: 'Menús Digitales QR Gastronómicos',
      subtitle: 'Restaurantes, cafeterías, reposterías y bares',
      description:
        'Permite a tus comensales escanear el código QR desde su mesa, explorar el menú con fotos apetitosas y enviar su orden detallada con notas directas a cocina.',
      deliverables: [
        'Generador de código QR vectorial listo para imprimir',
        'Instrucciones especiales para cocina y mesa',
        'Cálculo automático de subtotales y costos de envío',
      ],
      metric: 'Cero costos de reimpresión de cartas físicas',
      span: 'lg:col-span-1',
      glowColor: 'rgba(14, 165, 233, 0.14)',
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      number: '04',
      title: 'Comercio WhatsApp Directo & Carrito Inteligente',
      subtitle: '0% comisiones a terceros · Trato directo con tu cliente',
      description:
        'Tus clientes agregan productos a un carrito interactivo y con un solo toque el pedido se redacta ordenado con cliente, dirección, productos, totales y canal directo.',
      deliverables: [
        'Mensaje pre-formateado listo para confirmar pedido',
        'Sin retenciones ni comisiones por transacción',
        'Geolocalización integrada para entregas y delivery',
      ],
      metric: '100% De las ganancias directo a tu cuenta',
      span: 'lg:col-span-1',
      glowColor: 'rgba(16, 185, 129, 0.14)',
    },
    {
      id: 'cloud',
      icon: Database,
      number: '05',
      title: 'Infraestructura Cloud & PostgreSQL en Supabase',
      subtitle: 'Tu catálogo respaldado en bases de datos empresariales',
      description:
        'Panel de administración protegido para que agregues nuevos productos, edites precios y consultes pedidos desde tu móvil sin requerir conocimientos técnicos.',
      deliverables: [
        'Base de datos relacional PostgreSQL con Supabase',
        'Panel autoadministrable intuitivo sin código',
        'Sincronización de pedidos y productos en tiempo real',
      ],
      metric: 'Disponibilidad Cloud garantizada 24/7',
      span: 'lg:col-span-1',
      glowColor: 'rgba(59, 130, 246, 0.14)',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
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
      id="servicios"
      className="py-24 lg:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 ambient-glow-blue rounded-full pointer-events-none blur-3xl opacity-30" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 ambient-glow-cyan rounded-full pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>01. CAPACIDADES & SOLUCIONES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
              <TextReveal text="Todo lo que tu marca requiere para dominar el entorno digital." />
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed font-normal">
            Creamos plataformas sólidas, rápidas e intuitivas adaptadas a las necesidades reales de tu rubro comercial.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`${item.span} group flex flex-col`}
              >
                <SpotlightCard
                  spotlightColor={item.glowColor}
                  className="h-full p-8 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Top Row: Index number and Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-white/[0.08] flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-105 group-hover:border-cyan-400/40 group-hover:text-cyan-300 transition-all">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">
                        {item.number}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-cyan-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-cyan-400/90 font-mono">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 pt-2">
                      {item.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantitative Metric Callout */}
                  <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.metric}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
