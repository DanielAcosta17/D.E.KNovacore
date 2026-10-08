import React from 'react';
import {
  Sparkles,
  MessageCircle,
  Mail,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useBusiness } from '../../contexts/BusinessContext';
import { DEKLogo } from './DEKLogo';

interface FooterProps {
  onOpenOrderModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  const { businesses, goToLanding, goToAdmin } = useBusiness();

  const businessTypes = [
    'Gastronomía & Bares',
    'Pastelerías & Reposterías',
    'Boutiques & Moda',
    'Ferreterías & Técnicos',
    'Salones de Belleza',
    'Servicios Profesionales',
    'Supermercados Locales',
  ];

  return (
    <footer className="bg-[#05070B] text-slate-300 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 ambient-glow-blue rounded-full pointer-events-none blur-3xl opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.06]">
          {/* Brand & Mission (Col 1 - 5) */}
          <div className="lg:col-span-5 space-y-5">
            <div
              onClick={goToLanding}
              className="cursor-pointer inline-block select-none transition-opacity hover:opacity-95"
            >
              <DEKLogo size="md" variant="horizontal" animated={true} showSubtitle={true} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Agencia de desarrollo web y plataformas de catálogo digital. Impulsamos comercios con interfaces de alta conversión, código QR y pedidos directos por WhatsApp.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-300 font-mono">
              <span className="inline-flex items-center gap-1.5 bg-[#080D18] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> PostgreSQL Cloud
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#080D18] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Direct
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#080D18] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 0% Comisiones
              </span>
            </div>
          </div>

          {/* Navigation Links (Col 2 - 2) */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              Navegación
            </span>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-cyan-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan-300 transition-colors">
                  Servicios & Soluciones
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-cyan-300 transition-colors">
                  Proceso de Trabajo
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-cyan-300 transition-colors">
                  Proyectos & Plantillas
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-cyan-300 transition-colors">
                  Planes & Tarifas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-300 transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Industries (Col 3 - 2) */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              Sectores
            </span>
            <div className="flex flex-col gap-2">
              {businessTypes.map((type) => (
                <span key={type} className="text-slate-400 text-xs">
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Quick CTA & Official Channels (Col 4 - 3) */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              Activación Inmediata
            </span>
            <p className="text-slate-400 leading-relaxed">
              ¿Listo para dar el siguiente paso? Abre tu catálogo o menú digital hoy mismo.
            </p>
            <button
              onClick={() => onOpenOrderModal && onOpenOrderModal()}
              className="btn-sheen w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer font-['Outfit']"
            >
              <span>Hacer Pedido de Sitio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/50766952340?text=Hola%20D.E.K%20NovaCore,%20quiero%20m%C3%A1s%20informaci%C3%B3n"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#080D18] hover:bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-emerald-400 text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +507 6695-2340</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Hidden Admin Access */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-bold text-slate-300 font-['Outfit']">D.E.K NovaCore</span>
            <span>· Todos los derechos reservados.</span>
            {/* Discrete Secret Admin Link */}
            <span
              onClick={goToAdmin}
              title="Panel Administrativo (Ctrl+Shift+A)"
              className="ml-1 opacity-20 hover:opacity-100 cursor-pointer text-slate-500 hover:text-cyan-400 select-none text-[10px] transition-opacity"
            >
              ●
            </span>
          </div>

          <div className="text-[11px] text-cyan-400/90 font-mono tracking-wider">
            TECNOLOGÍA · PRECISIÓN · ELEGANCIA
          </div>
        </div>
      </div>
    </footer>
  );
};
