import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageCircle,
  Clock,
  Database,
  Palette,
  RefreshCw,
  FileSpreadsheet,
} from 'lucide-react';
import { TextReveal } from '../common/TextReveal';

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'creation' | 'maintenance'>('creation');

  // Planes de Creación - Pagos de una vez (Pago único)
  const creationPlans = [
    {
      name: 'Plan Básico Emprendedor',
      tier: 'INICIO & CATALOGACIÓN',
      price: '15',
      currency: '$',
      paymentType: 'Pago Único (De una vez)',
      subtext: 'Sin pagos mensuales · Sin comisiones',
      idealFor: 'Pequeños comercios, reposteras y emprendedores que inician su presencia online.',
      description:
        'La solución esencial para digitalizar tus productos y recibir pedidos organizados en tu WhatsApp.',
      features: [
        '1 Catálogo Digital o Menú QR oficial',
        'Hasta 50 productos organizados con fotos',
        'Botón directo de pedidos a WhatsApp formateado',
        'Código QR de alta definición listo para imprimir',
        'Panel administrativo móvil para editar precios',
        'Soporte técnico directo de activación',
      ],
      cta: 'Hacer Pedido de este Plan',
      popular: false,
    },
    {
      name: 'Plan Pro Recomendado',
      tier: 'MÁS ELEGIDO POR NEGOCIOS',
      price: '29',
      currency: '$',
      paymentType: 'Pago Único (De una vez)',
      subtext: 'Inversión fija · 0% de comisiones por ventas',
      idealFor: 'Restaurantes, tiendas de ropa, ferreterías y negocios con catálogo activo.',
      description:
        'El estándar de alta conversión: productos ilimitados, carrito inteligente y sincronización Cloud.',
      features: [
        'Hasta 3 Sucursales o Catálogos activos',
        'Productos y categorías ilimitadas sin restricción',
        'Carrito de compras interactivo con subtotales',
        'Gestión de precios regulares y precios de oferta',
        'Base de datos PostgreSQL en Supabase',
        'Generador de código QR vectorial de alta escala',
        'Dominio web amigable y optimización para Google',
      ],
      cta: 'Hacer Pedido de este Plan',
      popular: true,
    },
    {
      name: 'Plan Full Suite Empresarial',
      tier: 'MÁXIMA CAPACIDAD',
      price: '49',
      currency: '$',
      paymentType: 'Pago Único (De una vez)',
      subtext: 'Suite completa para marcas consolidadas',
      idealFor: 'Franquicias, empresas con alto volumen de pedidos y catálogos extensos.',
      description:
        'Potencia corporativa sin límites, atención directa y asesoría en carga de inventario.',
      features: [
        'Negocios y sucursales ilimitadas desde 1 panel',
        'Historial de pedidos y métricas en tiempo real',
        'Módulo de pedidos directo a WhatsApp de tu equipo',
        'Asesoría de diseño y carga de catálogo inicial',
        'Infraestructura Cloud dedicada en Supabase',
        'Soporte técnico prioritario y entrega express',
      ],
      cta: 'Hacer Pedido de este Plan',
      popular: false,
    },
  ];

  // Servicios de Mantenimiento solicitados por el usuario
  const maintenanceServices = [
    {
      name: 'Respaldo & Exportación Supabase',
      price: '5',
      currency: '$',
      period: 'por servicio',
      badge: 'Básico',
      icon: Database,
      description: 'Exportación completa y copia de seguridad de tu base de datos en Supabase.',
      features: [
        'Exportación completa de datos en Supabase PostgreSQL',
        'Archivo de respaldo (.json / .csv) de productos, clientes y órdenes',
        'Auditoría y verificación de integridad de datos en la nube',
        'Entrega directa de los archivos de respaldo a tu correo o WhatsApp',
      ],
      cta: 'Solicitar Exportación ($5)',
      popular: false,
    },
    {
      name: 'Actualización & Rediseño Visual',
      price: '10',
      currency: '$',
      period: 'por servicio',
      badge: 'Recomendado',
      icon: Palette,
      description: 'Actualización de productos, precios y renovación visual de tu catálogo.',
      features: [
        'Actualización de inventario, nuevos productos y cambio de precios',
        'Cambio y refrescamiento de diseño (colores, portadas, tipografía y estilo)',
        'Optimización y compresión de nuevas imágenes de productos',
        'Incluye exportación y respaldo de datos en Supabase',
      ],
      cta: 'Solicitar Actualización ($10)',
      popular: true,
    },
    {
      name: 'Cambio Completo de Todo + Expansión',
      price: '20',
      currency: '$',
      period: 'por servicio',
      badge: 'Full Servicio',
      icon: RefreshCw,
      description: 'Transformación total de tu plataforma, rediseño integral y expansión de funciones.',
      features: [
        'Cambio completo de todo: estructura, diseño, banners y navegación',
        'Reestructuración de categorías, combos y secciones de temporada',
        'Regeneración de código QR en alta definición para mesas y flyers',
        'Actualización o cambio de números de WhatsApp de recepción',
        'Auditoría de velocidad y optimización de rendimiento móvil',
        'Carga masiva de nuevos productos con asesoría estratégica',
        'Respaldo total de datos y sincronización prioritaria en Supabase',
      ],
      cta: 'Solicitar Renovación Total ($20)',
      popular: false,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="precios"
      className="py-24 lg:py-32 bg-[#080D18] border-t border-white/[0.06] relative overflow-hidden bg-cosmic-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>04. TARIFAS TRANSPARENTES // PAGOS DE UNA VEZ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
              <TextReveal text="Precios claros sin mensualidades obligatorias." />
            </h2>
          </div>

          {/* Toggle between Creation Plans & Maintenance Services */}
          <div className="flex items-center p-1 rounded-xl bg-[#05070B] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('creation')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-['Outfit'] ${
                activeTab === 'creation'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Creación de Sitios (Pago Único)
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-['Outfit'] ${
                activeTab === 'maintenance'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mantenimiento ($5, $10, $20)
            </button>
          </div>
        </div>

        {/* Animated Plan & Service Tabs */}
        <AnimatePresence mode="wait">
          {activeTab === 'creation' ? (
            <motion.div
              key="creation"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            >
            {creationPlans.map((p, idx) => {
              const isPopular = p.popular;

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className={`relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group ${
                    isPopular
                      ? 'pricing-card-popular pricing-card-hover md:-translate-y-2'
                      : 'pricing-card-standard pricing-card-hover'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-slate-950 text-[11px] font-black uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(0,217,255,0.35)] font-['Outfit'] z-20">
                      <span>Más Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Tier Subtitle */}
                    <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-2 tracking-wider">
                      {p.tier}
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white font-['Outfit']">
                      {p.name}
                    </h3>

                    {/* Target Description */}
                    <div className="mt-3 p-3 rounded-xl bg-[#05070B] border border-white/[0.06] text-xs text-slate-300">
                      <span className="font-semibold text-white block mb-0.5">Para quién es:</span>
                      <span className="text-slate-400">{p.idealFor}</span>
                    </div>

                    {/* Price Tag */}
                    <div className="my-6 pt-5 pb-4 border-y border-white/[0.06]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-cyan-400 font-mono">{p.currency}</span>
                        <span className="text-5xl sm:text-6xl font-black text-white font-['Outfit'] tracking-tight tabular-nums">
                          {p.price}
                        </span>
                        <span className="text-xs text-cyan-300 font-mono font-bold ml-2">
                          Pago Único
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono mt-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{p.subtext}</span>
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-2 text-xs">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        Incluye:
                      </span>
                      {p.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-slate-300">
                          <div
                            className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                              isPopular
                                ? 'bg-cyan-500/20 text-cyan-300'
                                : 'bg-white/[0.06] text-slate-300'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA Button (Clean without sparkles) */}
                  <div className="pt-8 mt-8 border-t border-white/[0.06]">
                    <button
                      onClick={() => onSelectPlan && onSelectPlan(p.name)}
                      className={`w-full py-4 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-['Outfit'] active:scale-[0.98] ${
                        isPopular
                          ? 'btn-sheen bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 font-black shadow-[0_0_25px_rgba(0,217,255,0.25)]'
                          : 'bg-[#05070B] hover:bg-white/[0.05] text-white border border-white/[0.1] hover:border-cyan-400/40'
                      }`}
                    >
                      <span>{p.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-center text-slate-500 mt-2 font-mono">
                      Pago de una sola vez · Entrega rápida
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="maintenance"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {maintenanceServices.map((m, idx) => {
              const isPopular = m.popular;
              const Icon = m.icon;

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className={`relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group ${
                    isPopular
                      ? 'pricing-card-popular pricing-card-hover md:-translate-y-2'
                      : 'pricing-card-standard pricing-card-hover'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-slate-950 text-[11px] font-black uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(0,217,255,0.35)] font-['Outfit'] z-20">
                      <span>{m.badge}</span>
                    </div>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#05070B] border border-white/[0.08] flex items-center justify-center text-cyan-400 mb-4 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1 tracking-wider uppercase">
                      SERVICIO DE MANTENIMIENTO
                    </div>

                    <h3 className="text-2xl font-bold text-white font-['Outfit']">
                      {m.name}
                    </h3>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {m.description}
                    </p>

                    {/* Price Tag */}
                    <div className="my-6 pt-5 pb-4 border-y border-white/[0.06]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-cyan-400 font-mono">{m.currency}</span>
                        <span className="text-5xl sm:text-6xl font-black text-white font-['Outfit'] tracking-tight tabular-nums">
                          {m.price}
                        </span>
                        <span className="text-xs text-slate-400 font-mono ml-2">
                          {m.period}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-2 text-xs">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        Qué incluye este servicio:
                      </span>
                      {m.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-slate-300">
                          <div className="w-4 h-4 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-8 mt-8 border-t border-white/[0.06]">
                    <button
                      onClick={() => onSelectPlan && onSelectPlan(`Mantenimiento: ${m.name} ($${m.price})`)}
                      className={`w-full py-4 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-['Outfit'] active:scale-[0.98] ${
                        isPopular
                          ? 'btn-sheen bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 font-black shadow-[0_0_25px_rgba(0,217,255,0.25)]'
                          : 'bg-[#05070B] hover:bg-white/[0.05] text-white border border-white/[0.1] hover:border-cyan-400/40'
                      }`}
                    >
                      <span>{m.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-center text-slate-500 mt-2 font-mono">
                      Ejecución rápida y entrega garantizada
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

        {/* Guarantees Bar */}
        <div className="mt-14 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-[#05070B] border border-white/[0.05]">
            <Zap className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white font-['Outfit']">Pago Único</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Sin suscripciones forzadas</div>
          </div>
          <div className="p-4 rounded-xl bg-[#05070B] border border-white/[0.05]">
            <MessageCircle className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white font-['Outfit']">Pedidos en WhatsApp</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Trato directo con tu cliente</div>
          </div>
          <div className="p-4 rounded-xl bg-[#05070B] border border-white/[0.05]">
            <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white font-['Outfit']">Puesta en Marcha</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Entrega express en 48 horas</div>
          </div>
          <div className="p-4 rounded-xl bg-[#05070B] border border-white/[0.05]">
            <ShieldCheck className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white font-['Outfit']">Mantenimiento Opcional</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Ajustes solo cuando lo necesites</div>
          </div>
        </div>
      </div>
    </section>
  );
};
