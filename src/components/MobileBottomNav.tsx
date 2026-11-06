import React from 'react';
import { Home, Tv, Store, PlusCircle } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenRegister: () => void;
  totalStoresCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
  onOpenRegister,
  totalStoresCount,
}) => {
  return (
    <nav
      aria-label="Navegação móvel inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe"
    >
      <div className="grid grid-cols-4 items-center h-15 px-2">
        
        {/* Tab 1: Início */}
        <button
          onClick={() => onNavigate('inicio')}
          className={`flex flex-col items-center justify-center py-1 transition-transform active:scale-90 min-h-[44px] min-w-[44px] ${
            activeSection === 'inicio' ? 'text-[#0B3B60]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className={`w-5 h-5 ${activeSection === 'inicio' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Início</span>
        </button>

        {/* Tab 2: TV Ao Vivo */}
        <button
          onClick={() => onNavigate('tv-ao-vivo')}
          className={`relative flex flex-col items-center justify-center py-1 transition-transform active:scale-90 min-h-[44px] min-w-[44px] ${
            activeSection === 'tv-ao-vivo' ? 'text-rose-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <Tv className={`w-5 h-5 ${activeSection === 'tv-ao-vivo' ? 'stroke-[2.5]' : 'stroke-2'}`} />
            <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Ao Vivo</span>
        </button>

        {/* Tab 3: Vitrine Lojas */}
        <button
          onClick={() => onNavigate('vitrine-lojas')}
          className={`relative flex flex-col items-center justify-center py-1 transition-transform active:scale-90 min-h-[44px] min-w-[44px] ${
            activeSection === 'vitrine-lojas' ? 'text-[#0B3B60]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <Store className={`w-5 h-5 ${activeSection === 'vitrine-lojas' ? 'stroke-[2.5]' : 'stroke-2'}`} />
            <span className="absolute -top-1 -right-2 px-1 py-0.2 rounded-full bg-amber-500 text-white font-extrabold text-[8px] leading-tight">
              {totalStoresCount}
            </span>
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Lojas</span>
        </button>

        {/* Tab 4: Anunciar (Highlighted Action Button) */}
        <button
          onClick={onOpenRegister}
          className="flex flex-col items-center justify-center py-1 text-[#F26522] transition-transform active:scale-90 min-h-[44px] min-w-[44px]"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#F26522] to-amber-500 text-white flex items-center justify-center shadow-xs">
            <PlusCircle className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-[#F26522] mt-0.5">Anunciar</span>
        </button>

      </div>
    </nav>
  );
};
