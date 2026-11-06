import React from 'react';
import { Menu, LogIn, Store } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenMerchantAuth: () => void;
  isMerchantLoggedIn?: boolean;
  merchantStoreName?: string;
  onOpenMerchantDashboard?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenMerchantAuth,
  isMerchantLoggedIn = false,
  merchantStoreName,
  onOpenMerchantDashboard,
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

        {/* Right Control: Login / Painel Exclusivo do Comerciante */}
        <div className="flex items-center">
          {isMerchantLoggedIn ? (
            <button
              onClick={onOpenMerchantDashboard}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#0B3B60] bg-amber-50 border border-amber-300/80 hover:bg-amber-100 active:scale-95 rounded-xl shadow-xs transition-all min-h-[40px] sm:min-h-[44px] cursor-pointer"
              title="Abrir o painel exclusivo da minha loja"
            >
              <Store className="w-4 h-4 shrink-0 text-[#F26522]" />
              <span className="truncate max-w-[120px] sm:max-w-[170px]">
                {merchantStoreName || 'Minha Loja'}
              </span>
            </button>
          ) : (
            <button
              onClick={onOpenMerchantAuth}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0B3B60] to-[#124d7c] hover:brightness-110 active:scale-95 rounded-xl shadow-xs transition-all min-h-[40px] sm:min-h-[44px] whitespace-nowrap cursor-pointer"
              title="Fazer Login ou Cadastrar Loja"
            >
              <LogIn className="w-4 h-4 shrink-0 text-amber-300" />
              <span>Entrar</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
