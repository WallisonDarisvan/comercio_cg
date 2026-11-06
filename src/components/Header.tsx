import React from 'react';
import { Menu, PlusCircle, Search } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenRegister: () => void;
  onFocusSearch: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenRegister,
  onFocusSearch,
  onOpenAdmin,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-18 flex items-center justify-between gap-2 sm:gap-6">
        
        {/* Left: Hamburger & Brand */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <button
            onClick={onOpenMenu}
            className="p-2 -ml-1 text-slate-700 hover:text-slate-950 active:bg-slate-100 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <a href="#" className="flex items-center gap-2 text-decoration-none group">
            {/* Visual Icon Mark */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0B3B60] to-[#145388] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-sm sm:text-lg tracking-tighter text-amber-400">CC</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-extrabold tracking-tight text-[#0B3B60] leading-none">
                Comércio<span className="text-[#F26522]">Campina</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wide">
                Guia da cidade de Campina Grande
              </span>
            </div>
          </a>
        </div>

        {/* Center / Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Quick Search Trigger button */}
          <button
            onClick={onFocusSearch}
            className="flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-600 bg-slate-100/90 hover:bg-slate-200/80 active:scale-95 rounded-xl transition-all min-h-[44px] min-w-[44px]"
            title="Buscar comércios em Campina Grande"
            aria-label="Buscar lojas"
          >
            <Search className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">Buscar</span>
          </button>

          {/* Admin Area Shortcut Button */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#0B3B60] bg-slate-100 hover:bg-slate-200/80 active:scale-95 rounded-xl transition-all min-h-[44px] cursor-pointer"
            title="Área Administrativa do Portal"
          >
            <span className="hidden md:inline">Painel Admin</span>
            <span className="md:hidden">Admin</span>
          </button>

          {/* Primary CTA: Register Business / Advertise */}
          <button
            onClick={onOpenRegister}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#F26522] to-[#ff7a3d] hover:brightness-105 active:scale-95 rounded-xl shadow-xs transition-all min-h-[44px] whitespace-nowrap cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 shrink-0" />
            <span>Anunciar</span>
          </button>
        </div>

      </div>
    </header>
  );
};
