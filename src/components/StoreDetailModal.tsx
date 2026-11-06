import React, { useState } from 'react';
import {
  X,
  Star,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Tv,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Tag,
  ShieldCheck,
  Instagram,
} from 'lucide-react';
import { Store } from '../data/mockData';

interface StoreDetailModalProps {
  store: Store | null;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const StoreDetailModal: React.FC<StoreDetailModalProps> = ({
  store,
  onClose,
  onOpenRegister,
}) => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  if (!store) return null;

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2500);
  };

  const handleOpenWhatsapp = () => {
    const msg = encodeURIComponent(
      `Olá! Encontrei a ${store.name} no portal Comércio Campina / TV Borborema e quero aproveitar a oferta especial!`
    );
    window.open(`https://wa.me/${store.whatsapp}?text=${msg}`, '_blank');
  };

  const handleOpenMaps = () => {
    const query = encodeURIComponent(`${store.name}, ${store.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Content (Bottom Sheet on Mobile, Centered Card on Desktop) */}
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col mt-auto sm:my-auto">
        
        {/* Mobile Drag Handle */}
        <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-20 w-10 h-1.5 bg-white/70 rounded-full pointer-events-none" />

        {/* Header Cover Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900 shrink-0">
          <img
            src={store.image}
            alt={store.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>

          {/* TV Endorsement Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F26522] to-amber-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5 fill-white text-white" />
              {store.tagTv}
            </span>
          </div>

          {/* Floating Store Info */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-amber-300 font-semibold">{store.category}</span>
              <span className="text-white/40">·</span>
              <span className="text-xs text-slate-200">{store.neighborhood} - Campina Grande</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight flex items-center gap-2">
              {store.name}
              {store.isVerifiedTv && (
                <CheckCircle2 className="w-5 h-5 text-blue-400 fill-white" />
              )}
            </h2>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-slate-700">
          
          {/* Quick Metrics & TV Show Mention */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{store.rating.toFixed(1)}</span>
              </div>
              <span className="text-slate-500">({store.reviewsCount} avaliações no portal)</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#0B3B60] font-semibold">
              <Tv className="w-3.5 h-3.5 text-[#F26522]" />
              <span>Programa: {store.featuredInShow}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Sobre o Estabelecimento
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {store.description}
            </p>
          </div>

          {/* Coupon / Special Offer Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F26522] uppercase tracking-wide mb-1">
              <Tag className="w-4 h-4 text-[#F26522]" />
              <span>Oferta Especial da TV Borborema</span>
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-3">
              {store.offer}
            </p>

            {store.discountCoupon && (
              <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-amber-300 shadow-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Cupom de Desconto:</span>
                  <span className="font-mono font-bold text-base text-[#0B3B60] tracking-wider">
                    {store.discountCoupon}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyCoupon(store.discountCoupon!)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    copiedCoupon
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-500 hover:bg-amber-600 text-white'
                  }`}
                >
                  {copiedCoupon ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Cupom</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Diferenciais & Facilidades
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {store.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Opening Hours */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Endereço em Campina Grande:</strong>
                <span className="text-slate-600">{store.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Horário de Funcionamento:</strong>
                <span className="text-slate-600">{store.openingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Action Footer with safe padding */}
        <div className="p-3 sm:p-4 pb-safe bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 shrink-0">
          <button
            onClick={handleOpenMaps}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 active:scale-95 text-slate-700 text-xs font-semibold transition-all min-h-[44px] cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#F26522]" />
            <span>Traçar Rota no Mapa</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button
            onClick={handleOpenWhatsapp}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md transition-all min-h-[44px] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp Agora</span>
          </button>
        </div>

      </div>
    </div>
  );
};
