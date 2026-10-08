import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import {
  MessageCircle,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { useBusiness } from '../../contexts/BusinessContext';
import { TextReveal } from '../common/TextReveal';

interface ContactSectionProps {
  onOpenOrderModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenOrderModal }) => {
  const { createServiceRequest } = useBusiness();
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: 'general',
    contactName: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.contactName || !formData.phone) {
      setErrorMsg('Por favor completa todos los campos requeridos.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      await createServiceRequest({
        businessName: formData.businessName,
        businessType: formData.businessType,
        contactName: formData.contactName,
        phone: formData.phone,
        plan: 'Plan Pro',
        notes: formData.notes,
      });
      setSubmitted(true);
      setFormData({
        businessName: '',
        businessType: 'general',
        contactName: '',
        phone: '',
        notes: '',
      });
    } catch (err) {
      setErrorMsg('Ocurrió un error al enviar. Por favor contáctanos por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
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
      id="contacto"
      className="py-24 lg:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 ambient-glow-cyan rounded-full pointer-events-none blur-3xl opacity-25" />
      <div className="absolute bottom-10 left-10 w-80 h-80 ambient-glow-blue rounded-full pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Powerful Editorial Statement */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>05. CONTACTO & COMIENZO DE PROYECTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit']">
            <TextReveal text="Si necesitas una presencia digital profesional, aquí es donde debes comenzar." />
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Creamos tu sitio web o menú digital con precisión milimétrica. Escríbenos directamente o déjanos los datos de tu empresa.
          </p>
        </div>

        {/* 2-Column High-End Layout: Direct Channels + Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Priority Channels */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-5"
          >
            {/* WhatsApp Card */}
            <motion.a
              variants={itemVariants}
              href="https://wa.me/50766952340?text=Hola%20D.E.K%20NovaCore,%20deseo%20crear%20el%20sitio%20web%20o%20cat%C3%A1logo%20para%20mi%20negocio"
              target="_blank"
              rel="noreferrer"
              className="p-7 rounded-2xl bg-[#080D18] border border-white/[0.08] hover:border-emerald-400/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#05070B] border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  CANAL PRIORITARIO // RESPUESTA INMEDIATA
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-300 transition-colors">
                  WhatsApp Oficial de Atención
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Coordina los requerimientos, despeja dudas técnicas y activa tu catálogo en menos de 24 horas.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  +507 6695-2340
                </span>
                <span className="text-xs text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 font-['Outfit']">
                  Abrir chat <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              variants={itemVariants}
              href="mailto:danielacostaperez17@gmail.com"
              className="p-7 rounded-2xl bg-[#080D18] border border-white/[0.08] hover:border-cyan-400/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#05070B] border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
                  PROPUESTAS CORPORATIVAS
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  Correo Electrónico
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Para licitaciones, solicitudes de facturación formal o integraciones a medida.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300 truncate max-w-[200px]">
                  danielacostaperez17@gmail.com
                </span>
                <span className="text-xs text-cyan-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 font-['Outfit']">
                  Escribir <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-[#080D18] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Aceptando nuevos proyectos este mes · Cupos de desarrollo activos</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#080D18] border border-white/[0.08] shadow-2xl relative"
          >
            <div className="mb-6 space-y-1">
              <h3 className="text-2xl font-bold text-white font-['Outfit']">
                Solicita una cotización para tu negocio
              </h3>
              <p className="text-xs text-slate-400">
                Completa el formulario y nos pondremos en contacto contigo de inmediato con una propuesta adaptada a tu rubro.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Outfit']">
                  ¡Solicitud Enviada con Éxito!
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Hemos registrado tus datos. Nuestro equipo te contactará por WhatsApp en breve con la propuesta y el demo inicial.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-cyan-300 hover:text-white underline cursor-pointer"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Nombre de tu Negocio *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Pastelería Dolce Vita"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border border-white/[0.08] focus:border-cyan-400 text-white text-xs placeholder:text-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Rubro o Industria
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) =>
                        setFormData({ ...formData, businessType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border border-white/[0.08] focus:border-cyan-400 text-white text-xs outline-none transition-colors"
                    >
                      <option value="general">Comercio General</option>
                      <option value="restaurant">Restaurante / Gastronomía</option>
                      <option value="bakery">Pastelería & Repostería</option>
                      <option value="fashion">Boutique & Ropa</option>
                      <option value="hardware">Ferretería & Técnico</option>
                      <option value="services">Servicios Profesionales</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Tu Nombre o Encargado *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.contactName}
                      onChange={(e) =>
                        setFormData({ ...formData, contactName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border border-white/[0.08] focus:border-cyan-400 text-white text-xs placeholder:text-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Número de WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. +507 6695-2340"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border border-white/[0.08] focus:border-cyan-400 text-white text-xs placeholder:text-slate-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Detalles o requerimientos adicionales (opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos cuántos productos manejas, si requieres código QR impreso o integración de delivery..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border border-white/[0.08] focus:border-cyan-400 text-white text-xs placeholder:text-slate-600 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-sheen w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 text-xs font-black rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-['Outfit'] active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Enviando Solicitud...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Enviar Solicitud Inmediata</span>
                      </>
                    )}
                  </button>

                  {onOpenOrderModal && (
                    <button
                      type="button"
                      onClick={onOpenOrderModal}
                      className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center gap-1.5 cursor-pointer font-['Outfit']"
                    >
                      <span>Abrir formulario detallado</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
