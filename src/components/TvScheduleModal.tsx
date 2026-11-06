import { X, Tv } from 'lucide-react';
import { TV_PROGRAMS } from '../data/mockData';

interface TvScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const TvScheduleModal: React.FC<TvScheduleModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col mt-auto sm:my-auto">
        
        {/* Mobile Drag Handle */}
        <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-20 w-10 h-1.5 bg-white/60 rounded-full pointer-events-none" />

        {/* Header */}
        <div className="p-4 sm:p-6 pt-5 sm:pt-6 bg-[#0B3B60] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Tv className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">Grade de Programação</h3>
                <span className="text-[10px] bg-emerald-500 text-white font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Canal 9.1 HD
                </span>
              </div>
              <p className="text-xs text-blue-100">TV Borborema · Campina Grande - PB</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Schedule List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 divide-y divide-slate-100">
          {TV_PROGRAMS.map((item) => (
            <div
              key={item.id}
              className={`pt-3 first:pt-0 flex items-start gap-3.5 p-3 rounded-2xl transition-colors ${
                item.isLiveNow ? 'bg-amber-500/10 border border-amber-300/60' : 'hover:bg-slate-50'
              }`}
            >
              <div className="w-20 shrink-0 text-center">
                <span className="font-mono font-bold text-xs sm:text-sm text-[#0B3B60] block">
                  {item.timeSlot}
                </span>
                {item.isLiveNow && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-rose-600 uppercase mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                    No Ar
                  </span>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <span className="text-[11px] text-slate-500">· {item.anchor}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 pb-safe bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs shrink-0">
          <span className="text-slate-500 text-center sm:text-left">
            Deseja sua marca exibida durante estes programas?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#F26522] hover:bg-[#ff7a3d] active:scale-95 text-white font-bold transition-all min-h-[44px] cursor-pointer"
          >
            Ver Planos de Mídia na TV
          </button>
        </div>

      </div>
    </div>
  );
};
