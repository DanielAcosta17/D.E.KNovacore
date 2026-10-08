import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { TextReveal } from '../common/TextReveal';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Idea & Diagnóstico',
      phase: 'FASE 1 // ESTRATEGIA',
      icon: Lightbulb,
      duration: 'Día 1',
      summary:
        'Analizamos tu rubro comercial, tu inventario de productos o menú actual y definimos las categorías clave junto con el número de WhatsApp oficial de recepción de pedidos.',
      deliverables: [
        'Estructura de categorías y subcategorías',
        'Configuración de número de WhatsApp para pedidos',
        'Definición de costos de delivery y horarios',
      ],
    },
    {
      step: '02',
      title: 'Diseño de Marca & UX',
      phase: 'FASE 2 // ARQUITECTURA VISUAL',
      icon: Palette,
      duration: 'Día 1 - 2',
      summary:
        'Personalizamos la interfaz según los colores, logotipo y fotografías de tu negocio. Cuidamos cada detalle visual para que tu catálogo transmita prestigio y apetencia.',
      deliverables: [
        'Adaptación completa de paleta cromática y logotipo',
        'Optimización visual de portadas y fotografías',
        'Plantilla específica para tu industria (Gourmet, Moda, etc.)',
      ],
    },
    {
      step: '03',
      title: 'Desarrollo & Base de Datos',
      phase: 'FASE 3 // INGENIERÍA',
      icon: Code2,
      duration: 'Día 2',
      summary:
        'Montamos tu catálogo en el motor reactivo de D.E.K NovaCore conectado a Supabase PostgreSQL. Activamos el carrito de compras y las notas especiales de cocina o pedido.',
      deliverables: [
        'Carga inicial de productos con precios y descripciones',
        'Formateo automático de tickets para WhatsApp',
        'Pruebas de velocidad y respuesta móvil',
      ],
    },
    {
      step: '04',
      title: 'Lanzamiento & Código QR',
      phase: 'FASE 4 // DESPLIEGUE',
      icon: Rocket,
      duration: 'Día 3 · En Vivo',
      summary:
        'Tu sitio web o menú digital queda publicado en la nube y listo para recibir clientes. Te entregamos tu enlace oficial y el código QR en alta resolución para tu local o redes.',
      deliverables: [
        'Enlace web personalizado activo 24/7',
        'Código QR vectorial listo para imprimir en mesas y flyers',
        'Acceso al panel administrativo para actualizar precios',
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
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
      id="proceso"
      className="py-24 lg:py-32 bg-[#080D18] border-t border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>02. METODOLOGÍA DE EJECUCIÓN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
              <TextReveal text="Del concepto a clientes comprando en tu WhatsApp." />
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed font-normal">
            Flujo ágil de 4 etapas ordenadas para poner tu negocio en internet sin demoras ni complejidades técnicas.
          </p>
        </div>

        {/* Process Roadmap Flow */}
        <div className="mt-14 relative">
          {/* Animated Glowing Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-600/20 via-cyan-400/40 to-blue-600/20 -translate-y-12 pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStep === idx;

              return (
                <motion.div
                  key={stage.step}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-[#0B1220] border-cyan-400/50 shadow-[0_10px_35px_rgba(0,217,255,0.12)]'
                      : 'bg-[#05070B] border-white/[0.08] hover:border-white/[0.18]'
                  }`}
                >
                  <div className="space-y-5">
                    {/* Step Node indicator with number */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(0,217,255,0.3)]'
                            : 'bg-[#080D18] border border-white/[0.08] text-slate-400 group-hover:text-cyan-400'
                        }`}
                      >
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black font-['Outfit'] text-white/20 group-hover:text-cyan-400/40 transition-colors">
                          {stage.step}
                        </span>
                        <div className="text-[10px] font-mono text-cyan-400 font-semibold block">
                          {stage.duration}
                        </div>
                      </div>
                    </div>

                    {/* Step Title */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                        {stage.phase}
                      </div>
                      <h3 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-cyan-200 transition-colors">
                        {stage.title}
                      </h3>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {stage.summary}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                      {stage.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-500'}>
                      {idx === stages.length - 1 ? 'LANZAMIENTO FINAL' : 'SIGUIENTE PASO'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
