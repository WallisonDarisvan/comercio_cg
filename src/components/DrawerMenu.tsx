import React from 'react';
import {
  X,
  Tv,
  Store,
  Calendar,
  PlusCircle,
  MessageCircle,
  Instagram,
  Youtube,
  MapPin,
  Radio,
  Shield,
} from 'lucide-react';
import { NEIGHBORHOODS } from '../data/mockData';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSchedule: () => void;
  onOpenRegister: () => void;
  onSelectNeighborhood: (neighborhood: string) => void;
  onOpenAdmin: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  onClose,
  onOpenSchedule,
  onOpenRegister,
  onSelectNeighborhood,
  onOpenAdmin,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 left-0 max-w-xs sm:max-w-sm w-full bg-white shadow-2xl flex flex-col z-10">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-br from-[#0B3B60] to-[#124d7c] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-extrabold text-amber-400">
              CC
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight block leading-tight">
                Comércio<span className="text-[#F26522]">Campina</span>
              </span>
              <span className="text-[11px] text-blue-200 flex items-center gap-1">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> TV Borborema Oficial
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 text-slate-800">
          
          {/* Main Navigation Links */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 px-1">
              Navegação Principal
            </span>
            <nav className="space-y-1">
              <a
                href="#tv-ao-vivo"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-sm font-semibold transition-colors min-h-[44px]"
              >
                <Tv className="w-4 h-4 text-rose-600" />
                <span>TV Borborema Ao Vivo</span>
                <span className="ml-auto text-[10px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.5 rounded">
                  NO AR
                </span>
              </a>

              <a
                href="#vitrine-lojas"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-sm font-semibold transition-colors min-h-[44px]"
              >
                <Store className="w-4 h-4 text-[#0B3B60]" />
                <span>Vitrine de Lojas Recomendadas</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenSchedule();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-sm font-semibold transition-colors min-h-[44px] text-left"
              >
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>Grade de Programação da TV</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenAdmin();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-sm font-semibold transition-colors min-h-[44px] text-left text-slate-700"
              >
                <Shield className="w-4 h-4 text-[#0B3B60]" />
                <span>Área Administrativa (Gestão)</span>
              </button>
            </nav>
          </div>

          {/* Business Banner CTA */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
            <span className="text-[10px] font-extrabold uppercase text-[#F26522] tracking-wide block mb-1">
              Para Comerciantes de Campina
            </span>
            <h4 className="text-xs font-bold text-slate-900 mb-1">
              Cadastre sua Empresa com 50% OFF
            </h4>
            <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
              Garanta sua vaga na TV Borborema e multiplique seus clientes com anúncios na TV aberta e no portal.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="w-full py-2 px-3 rounded-xl bg-[#F26522] hover:bg-[#ff7a3d] text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-1.5 min-h-[40px]"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Aderir aos Planos Fundadores</span>
            </button>
          </div>

          {/* Quick Neighborhood Filter Links */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 px-1">
              Bairros de Campina Grande
            </span>
            <div className="flex flex-wrap gap-1.5">
              {NEIGHBORHOODS.map((neighborhood) => (
                <button
                  key={neighborhood}
                  onClick={() => {
                    onSelectNeighborhood(neighborhood);
                    onClose();
                  }}
                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {neighborhood}
                </button>
              ))}
            </div>
          </div>

          {/* Official TV Borborema Contacts */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 px-1">
              Canais Oficiais TV Borborema
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/5583999990909"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-emerald-700 hover:underline font-medium min-h-[36px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Redação: (83) 99999-0909</span>
              </a>

              <a
                href="https://instagram.com/tvborboremaoficial"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-pink-700 hover:underline font-medium min-h-[36px]"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram: @tvborboremaoficial</span>
              </a>

              <a
                href="https://youtube.com/@tvborborema"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-red-700 hover:underline font-medium min-h-[36px]"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>YouTube: TV Borborema Ao Vivo</span>
              </a>
            </div>
          </div>

        </div>

        {/* Drawer Footer with safe padding */}
        <div className="p-4 pb-safe bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 text-center">
          <span>Comércio Campina © 2026 · Emissora SBT Campina Grande - PB</span>
        </div>

      </div>
    </div>
  );
};
