import React from 'react';
import { MapPin, Phone, Mail, Instagram, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenSchedule?: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRegister,
  onOpenAdmin,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Purpose */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B3B60] to-[#145388] flex items-center justify-center text-amber-400 font-extrabold text-base border border-white/10">
                CC
              </div>
              <span className="text-lg font-extrabold text-white">
                Comércio<span className="text-[#F26522]">Campina</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              O maior portal e guia de conexão entre consumidores e os comércios locais de Campina Grande - PB.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700">
                Guia Comercial Oficial
              </span>
              <span className="text-[11px] text-amber-400 font-semibold bg-amber-400/10 px-2 py-1 rounded-lg border border-amber-400/20">
                Campina Grande - PB
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#vitrine-lojas" className="hover:text-[#F26522] transition-colors">
                  Vitrine de Empresas Recomendadas
                </a>
              </li>
              <li>
                <a href="#busca-categorias" className="hover:text-[#F26522] transition-colors">
                  Categorias de Comércio
                </a>
              </li>
              <li>
                <button onClick={onOpenRegister} className="text-[#F26522] font-semibold hover:underline text-left cursor-pointer">
                  Cadastrar Loja com 50% OFF
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="text-slate-400 hover:text-white transition-colors text-left flex items-center gap-1.5 pt-1 cursor-pointer">
                  <Shield className="w-3.5 h-3.5 text-slate-500" />
                  <span>Área Administrativa (Gestão)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Business & Local Growth */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Para Empreendedores
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <span className="block text-slate-200 font-semibold">Presença Digital Local:</span>
                Sua empresa em destaque para milhares de clientes de Campina Grande todos os dias.
              </li>
              <li>
                <span className="block text-slate-200 font-semibold">Conversão Direta no WhatsApp:</span>
                Os consumidores entram em contato imediato pelo WhatsApp da sua equipe comercial.
              </li>
              <li>
                <span className="block text-slate-200 font-semibold">Selo de Verificação:</span>
                Garantia de procedência, endereço físico e credibilidade para seu negócio.
              </li>
            </ul>
          </div>

          {/* Headquarters & Contacts */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Atendimento Comércio Campina
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                <span>Campina Grande - PB</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Comercial: (83) 99999-0909</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contato@comerciocampina.siteflash.pro</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                title="Instagram Comércio Campina"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <p>
            © 2026 Comércio Campina. Todos os direitos reservados. Feito com orgulho na Rainha da Borborema.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1">
            <span>Conectando negócios e consumidores com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>em Campina Grande</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
