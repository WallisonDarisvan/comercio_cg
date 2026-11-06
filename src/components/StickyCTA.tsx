import React, { useState } from 'react';
import { Sparkles, Tv, ArrowRight, X } from 'lucide-react';

interface StickyCTAProps {
  onOpenRegister: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onOpenRegister }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => {
          setIsDismissed(false);
          onOpenRegister();
        }}
        className="hidden md:flex fixed bottom-4 right-4 z-40 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-[#F26522] to-amber-500 text-white text-xs font-bold shadow-xl hover:scale-105 active:scale-95 transition-all items-center gap-2 border border-white/20 cursor-pointer"
        title="Cadastrar Loja na TV Borborema"
      >
        <Tv className="w-4 h-4" />
        <span>Anunciar na TV</span>
        <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] font-extrabold">50% OFF</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-[56px] md:bottom-0 left-0 right-0 z-30 bg-gradient-to-r from-[#0B3B60] via-[#0E4976] to-[#F26522] text-white shadow-2xl border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2.5 flex items-center justify-between gap-2">
        
        {/* Left message & Badge */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden min-w-0">
          <div className="hidden xs:flex w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/15 items-center justify-center shrink-0">
            <Tv className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 leading-tight truncate min-w-0">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-[9px] sm:text-xs font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 tracking-tight shrink-0 shadow-xs">
                50% OFF
              </span>
              <span className="text-xs sm:text-sm font-bold truncate">
                <span className="sm:hidden">Anuncie na TV e no Portal</span>
                <span className="hidden sm:inline">Quer sua loja na TV Borborema e no portal?</span>
              </span>
            </div>
            <span className="hidden lg:inline text-xs text-blue-100 font-normal">
              Inserções com QR Code + Presença de alta conversão para o comércio de Campina.
            </span>
          </div>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={onOpenRegister}
            className="px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-white text-[#0B3B60] hover:bg-amber-300 active:scale-95 text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-1 min-h-[36px] sm:min-h-[40px] whitespace-nowrap cursor-pointer"
          >
            <span className="sm:hidden">Cadastrar</span>
            <span className="hidden sm:inline">Cadastrar Empresa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 sm:p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            title="Minimizar aviso"
            aria-label="Minimizar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
