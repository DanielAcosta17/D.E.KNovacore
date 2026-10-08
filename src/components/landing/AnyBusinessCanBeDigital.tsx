import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Smartphone,
  MessageSquare,
  QrCode,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { TextReveal } from '../common/TextReveal';

interface AnyBusinessCanBeDigitalProps {
  onOpenOrderModal?: () => void;
}

export const AnyBusinessCanBeDigital: React.FC<AnyBusinessCanBeDigitalProps> = ({
  onOpenOrderModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const businessTypes = [
    {
      id: 'food',
      title: 'Repostería & Comida Casera',
      subtitle: 'Desde pasteles personalizados hasta bandejas de catering',
      pain: 'Enviar 40 fotos por chat que llenan la memoria del cliente y responder "¿qué precio tiene?" 50 veces al día.',
      solution:
        'Tu cliente abre tu catálogo web con fotos deliciosas, selecciona el sabor y tamaño, y te manda el pedido ya calculado con fecha de entrega.',
      sampleOrder: 'Hola! Quiero 1x Pastel Red Velvet (Mediano) + 6x Cupcakes de Chocolate. Total: $28.00. Entrega: Sábado 4:00 PM.',
      metrics: '3x más pedidos procesados sin perder tiempo en chats',
    },
    {
      id: 'restaurant',
      title: 'Restaurantes, Cafés & Food Trucks',
      subtitle: 'Menú digital moderno para mesas y delivery',
      pain: 'Cartas de papel manchadas, altos costos de reimpresión y pagarle hasta el 30% de comisiones a aplicaciones de delivery.',
      solution:
        'Código QR en cada mesa y enlace para tus redes. El comensal pide desde su propio teléfono directo a tu cocina o barra sin pagar comisiones.',
      sampleOrder: 'Mesa #4: 2x Hamburguesas Doble Queso + 1x Papas Rústicas + 2x Bebidas. Total: $22.50. Pago: Yappy/Efectivo.',
      metrics: '0% comisiones a terceros y rotación de mesa más rápida',
    },
    {
      id: 'fashion',
      title: 'Tiendas de Ropa, Gorras & Accesorios',
      subtitle: 'Boutiques urbanas y marcas independientes',
      pain: 'Clientes que preguntan si hay disponibilidad de talla o color y se van porque tardas en contestar.',
      solution:
        'Catálogo visual 24/7 donde el cliente filtra por modelo, talla o color y te envía el pedido listo para despachar o retirar.',
      sampleOrder: 'Pedido: 1x Gorra NY Negra Edición Especial (Talla Única) + 1x Camiseta Oversize (Talla L). Total: $45.00.',
      metrics: 'Ventas nocturnas y de fin de semana en automático',
    },
    {
      id: 'hardware',
      title: 'Ferreterías, Repuestos & Talleres',
      subtitle: 'Catálogos densos con especificaciones técnicas',
      pain: 'Cotizaciones largas por teléfono, códigos de parte confundidos y pérdida de ventas frente a grandes cadenas.',
      solution:
        'Catálogo técnico rápido donde mecánicos, constructores y clientes encuentran repuestos por código o marca y cotizan en 1 clic.',
      sampleOrder: 'Cotización: 2x Taladro Percutor 650W + 1x Caja de Brocas para Concreto. Total: $84.00. Retiro en sucursal.',
      metrics: 'Cotizaciones al instante y atención comercial ágil',
    },
    {
      id: 'services',
      title: 'Barberías, Salones & Servicios',
      subtitle: 'Estética, clínicas, consultorios y profesionales',
      pain: 'Clientes confundidos con los precios de cada servicio o llamando en horarios donde estás atendiendo a otra persona.',
      solution:
        'Tarifario web transparente con fotos de tus trabajos anteriores y botón directo para solicitar cita o consultar al WhatsApp.',
      sampleOrder: 'Cita: Corte Degradado + Arreglo de Barba con Toalla Caliente. Día: Viernes 5:00 PM. Cliente: Carlos R.',
      metrics: 'Agenda más llena con clientes informados y decididos',
    },
  ];

  const current = businessTypes[activeCategory];

  return (
    <section
      id="cualquier-negocio"
      className="py-24 lg:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] ambient-glow-blue rounded-full pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Sleek Typography */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>TRANSFORMACIÓN ACCESIBLE // PARA TODO TIPO DE COMERCIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit']">
            <TextReveal text="Cualquier negocio puede ser digital." />
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No necesitas ser una multinacional ni gastar miles de dólares. Si tienes productos o servicios y atiendes clientes, hoy mismo puedes tener tu propia web profesional y recibir pedidos por WhatsApp.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {businessTypes.map((biz, idx) => {
            const isSelected = activeCategory === idx;
            return (
              <button
                key={biz.id}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer font-['Outfit'] ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-[#080D18] text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/20'
                }`}
              >
                {biz.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Comparison Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: The Transformation (Before vs After) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                    Rubro Seleccionado
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                    {current.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{current.subtitle}</p>
                </div>

                {/* Before Box */}
                <div className="p-6 rounded-2xl bg-[#080D18] border border-rose-500/20 relative overflow-hidden group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                        El problema habitual (Sin web)
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {current.pain}
                      </p>
                    </div>
                  </div>
                </div>

                {/* After Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#080D18] to-[#0B1528] border border-cyan-400/30 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                        Con tu solución D.E.K NovaCore
                      </div>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {current.solution}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold font-mono">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{current.metrics}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Guarantees Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/[0.06]">
              <div className="p-3 rounded-xl bg-[#080D18] border border-white/[0.06] text-center">
                <span className="block text-base font-black text-cyan-300 font-['Outfit']">48 Horas</span>
                <span className="text-[10px] text-slate-400 font-mono">Entrega rápida</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D18] border border-white/[0.06] text-center">
                <span className="block text-base font-black text-cyan-300 font-['Outfit']">0% Comisión</span>
                <span className="text-[10px] text-slate-400 font-mono">Tus ventas son tuyas</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D18] border border-white/[0.06] text-center col-span-2 sm:col-span-1">
                <span className="block text-base font-black text-cyan-300 font-['Outfit']">Pago Único</span>
                <span className="text-[10px] text-slate-400 font-mono">Sin mensualidades fijas</span>
              </div>
            </div>
          </div>

          {/* Right: Realistic WhatsApp Order Simulator */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 rounded-2xl bg-[#080D18] border border-white/[0.08] shadow-2xl relative">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block font-['Outfit']">
                      Así recibes tus pedidos
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Directo a tu WhatsApp: +507 6695-2340
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  EN VIVO
                </span>
              </div>

              {/* Chat Simulation Bubble with synchronized transition */}
              <div className="p-4 rounded-2xl bg-[#05070B] border border-white/[0.08] space-y-3 font-mono text-xs overflow-hidden">
                <div className="text-[10px] text-slate-500 text-center">
                  Mensaje entrante del cliente · Hace un momento
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-100 space-y-2 leading-relaxed"
                  >
                    <div className="font-bold text-emerald-300 flex items-center justify-between">
                      <span>🛒 Nuevo Pedido desde tu Web Oficial:</span>
                      <span className="text-[10px] text-emerald-400 font-mono">EN VIVO</span>
                    </div>
                    <div className="text-slate-300 text-[11px] whitespace-pre-line bg-black/30 p-2.5 rounded-lg border border-emerald-500/10">
                      {current.sampleOrder}
                    </div>
                    <div className="text-[10px] text-emerald-400 pt-1 border-t border-emerald-500/20 font-sans">
                      ✓ Todos los datos listos: producto, cantidad, total y detalles. Sin pérdidas de tiempo.
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="p-4 rounded-xl bg-[#05070B] border border-white/[0.06] text-xs text-slate-300 space-y-2">
                <div className="font-bold text-white flex items-center gap-1.5 font-['Outfit']">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  ¿Por qué vende más que un simple PDF o Instagram?
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Porque tu cliente compra con un carrito rápido en su teléfono sin esperar a que le respondas qué cuesta cada cosa. La compra es inmediata.
                </p>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <button
                onClick={() => onOpenOrderModal && onOpenOrderModal()}
                className="w-full py-4 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 cursor-pointer font-['Outfit'] active:scale-95 transition-all"
              >
                <span>Digitalizar mi Negocio Ahora</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <div className="mt-2 text-center text-[10px] font-mono text-slate-500">
                Atención directa por WhatsApp al +507 6695-2340
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
