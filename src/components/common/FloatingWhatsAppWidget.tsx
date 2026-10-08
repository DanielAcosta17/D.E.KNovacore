import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '50766952340';
  const displayPhone = '+507 6695-2340';

  const quickMessages = [
    {
      title: 'Quiero un sitio web para mi negocio',
      desc: 'Planes desde $180 pago único, sin comisiones.',
      msg: 'Hola D.E.K NovaCore, quiero información para crear el sitio web o catálogo digital de mi negocio.',
    },
    {
      title: 'Menú digital QR para restaurante/café',
      desc: 'Pedidos a cocina y WhatsApp.',
      msg: 'Hola D.E.K NovaCore, me interesa un menú digital QR para restaurante/cafetería.',
    },
    {
      title: 'Tienda de ropa, gorras o productos',
      desc: 'Catálogo con carrito y variantes.',
      msg: 'Hola D.E.K NovaCore, tengo una tienda y quiero catálogo digital con pedidos automáticos.',
    },
  ];

  const handleOpenWa = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none print:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#080D18]/95 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-5 text-white overflow-hidden relative"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
                    <MessageCircle className="w-5 h-5 fill-current text-slate-950" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#080D18] animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold font-['Outfit'] text-white">
                    Atención D.E.K NovaCore
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <span>En línea</span>
                    <span className="text-slate-500">·</span>
                    <span>{displayPhone}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
                aria-label="Cerrar widget de WhatsApp"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content & Quick Prompts */}
            <div className="py-3 space-y-2 relative z-10">
              <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                ¿En qué podemos ayudarte hoy? Haz clic en una opción o escríbenos directamente:
              </p>

              <div className="space-y-1.5 pt-1">
                {quickMessages.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOpenWa(item.msg)}
                    className="w-full text-left p-2.5 rounded-xl bg-[#05070B] hover:bg-emerald-950/40 border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="pr-2">
                      <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors font-['Outfit']">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {item.desc}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Open Button */}
            <div className="pt-2 border-t border-white/[0.08] relative z-10">
              <button
                onClick={() => handleOpenWa('Hola D.E.K NovaCore, deseo más información sobre sus servicios.')}
                className="btn-sheen w-full py-2.5 px-3 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 text-xs font-black rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer font-['Outfit']"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Abrir Chat Directo en WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative group p-3.5 rounded-2xl bg-[#080D18]/90 backdrop-blur-xl border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-600 shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all cursor-pointer flex items-center gap-2.5"
        title="Contactar por WhatsApp (+507 6695-2340)"
        aria-label="Abrir asistente de contacto por WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#080D18] animate-pulse" />
        </div>
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] font-mono text-emerald-400 group-hover:text-white/90 font-bold leading-none">
            WhatsApp Oficial
          </span>
          <span className="text-xs font-black font-['Outfit'] text-white leading-tight">
            +507 6695-2340
          </span>
        </div>
      </motion.button>
    </div>
  );
};
