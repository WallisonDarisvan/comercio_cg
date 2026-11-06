import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Star,
  CheckCircle2,
  Tag,
  Copy,
  Check,
  Instagram,
  ShieldCheck,
  ChevronRight,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { Store } from '../data/mockData';
import { recordStoreViewApi, recordStoreWhatsappClickApi } from '../services/api';

interface StoreWebsiteViewProps {
  store: Store;
  onBack: () => void;
  onOpenRegister?: () => void;
}

export const StoreWebsiteView: React.FC<StoreWebsiteViewProps> = ({
  store,
  onBack,
  onOpenRegister,
}) => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  useEffect(() => {
    if (store && store.id) {
      recordStoreViewApi(store.id);
    }
  }, [store.id]);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2500);
  };

  const handleOpenWhatsapp = (customMessage?: string) => {
    if (store && store.id) {
      recordStoreWhatsappClickApi(store.id);
    }
    const text = customMessage || `Olá! Estou acessando o site oficial da ${store.name} pelo portal Comércio Campina e gostaria de mais informações!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${store.whatsapp}?text=${encoded}`, '_blank');
  };

  const handleOpenMaps = () => {
    const query = encodeURIComponent(`${store.name}, ${store.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      
      {/* Hero Section do Estabelecimento com Botão de Retorno Integrado */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Full-width Cover Photo Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={store.image}
            alt={store.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-16 lg:pb-20 flex flex-col justify-between">
          
          {/* Botão de Retorno Integrado Diretamente na Hero */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-amber-300 transition-all py-2 px-3.5 sm:px-4 rounded-xl bg-black/50 hover:bg-black/75 active:scale-95 border border-white/20 backdrop-blur-md shadow-lg cursor-pointer min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Comércio Campina</span>
            </button>
          </div>

          <div className="max-w-3xl">
            
            {/* Highlight Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#F26522] to-amber-500 text-white text-xs font-bold shadow-md mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-white text-white" />
              <span>{store.tagTv}</span>
            </div>

            {/* Main Headline & Description */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {store.name}
            </h2>

            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
              {store.description}
            </p>

            {/* Ratings, Location & Hours Chips */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-bold text-white">{store.rating.toFixed(1)}</span>
                <span className="text-slate-400 text-xs">({store.reviewsCount} avaliações)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <MapPin className="w-4 h-4 text-[#F26522]" />
                <span>{store.neighborhood}, Campina Grande</span>
              </div>

              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Aberto</span>
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => handleOpenWhatsapp()}
                className="w-full sm:w-auto py-3 px-5 sm:px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-sm sm:text-base font-extrabold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Falar no WhatsApp Agora</span>
              </button>

              <button
                onClick={handleOpenMaps}
                className="flex-1 sm:flex-initial py-3 px-4 sm:px-5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all border border-white/20 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <Navigation className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Como Chegar</span>
              </button>

              <a
                href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
                className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all border border-white/15 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="truncate">{store.phone}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Diferencial Exclusivo TV Borborema & Cupom Promocional */}
      <section className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-y border-amber-500/20 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-amber-200/80 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F26522] to-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Tag className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#F26522] text-[11px] font-extrabold uppercase tracking-wider mb-1">
                  Oferta Exclusiva no Portal
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {store.offer}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Exclusivo para clientes que entrarem em contato pelo portal Comércio Campina.
                </p>
              </div>
            </div>

            {store.discountCoupon && (
              <div className="w-full lg:w-auto bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Cupom da TV:</span>
                  <span className="text-base sm:text-lg font-mono font-black text-[#0B3B60] tracking-wider">
                    {store.discountCoupon}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyCoupon(store.discountCoupon!)}
                  className="py-2 px-3.5 rounded-lg bg-[#0B3B60] hover:bg-[#145388] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[38px]"
                >
                  {copiedCoupon ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
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
        </div>
      </section>

      {/* 5. Conteúdo do Site: Sobre, Diferenciais e Galeria */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* Bloco 1: Diferenciais & Destaques */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
              Por que escolher a {store.name}
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Diferenciais & Garantias do Estabelecimento
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {store.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0B3B60]/30 hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0B3B60] flex items-center justify-center font-bold text-sm shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1">
                    {highlight}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Compromisso e padrão de qualidade verificado para consumidores de Campina Grande.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 2: Apresentação da Loja & Estrutura */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3B60] text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              EMPRESA CERTIFICADA EM CAMPINA GRANDE
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Atendimento com Credibilidade e Excelência
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {store.description} Localizada no coração do bairro {store.neighborhood}, a empresa conta com equipe especializada, ambiente preparado para receber os clientes e canais de resposta imediata via WhatsApp.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">Horário de Funcionamento:</span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">{store.openingHours}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">Programa de TV Parceiro:</span>
                <span className="text-xs font-bold text-[#F26522] mt-0.5 block">{store.featuredInShow}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => handleOpenWhatsapp(`Olá! Gostaria de consultar os produtos e serviços da ${store.name}!`)}
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer min-h-[42px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Solicitar Catálogo no WhatsApp</span>
              </button>

              <button
                onClick={handleOpenMaps}
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer min-h-[42px]"
              >
                <MapPin className="w-4 h-4 text-[#F26522]" />
                <span>Ver Rota no Mapa</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md border border-slate-200">
              <img
                src={store.image}
                alt={store.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs">
                <span className="font-bold block">{store.name}</span>
                <span className="text-slate-300 text-[11px]">{store.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 3: Informações de Contato, Localização & Redes Sociais */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-[#0B3B60] uppercase tracking-wider block mb-1">
              Canais Oficiais
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Localização & Contato Direto
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* WhatsApp */}
            <div
              onClick={() => handleOpenWhatsapp()}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
              </div>
              <span className="text-xs font-bold text-slate-500 block uppercase">WhatsApp Oficial</span>
              <span className="text-sm font-extrabold text-slate-900 block mt-0.5">Mensagem Instantânea</span>
              <span className="text-xs text-emerald-600 font-semibold mt-2 inline-flex items-center gap-1">
                Iniciar conversa <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Telefone */}
            <a
              href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-500 block uppercase">Telefone Fixo / Loja</span>
              <span className="text-sm font-extrabold text-slate-900 block mt-0.5">{store.phone}</span>
              <span className="text-xs text-blue-600 font-semibold mt-2 inline-flex items-center gap-1">
                Ligar agora <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Instagram */}
            <div
              onClick={() => {
                const handle = store.instagram.replace('@', '');
                window.open(`https://instagram.com/${handle}`, '_blank');
              }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-pink-500 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-500 block uppercase">Instagram da Loja</span>
              <span className="text-sm font-extrabold text-slate-900 block mt-0.5">{store.instagram}</span>
              <span className="text-xs text-pink-600 font-semibold mt-2 inline-flex items-center gap-1">
                Ver novidades <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Endereço */}
            <div
              onClick={handleOpenMaps}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-500 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-500 block uppercase">Endereço Físico</span>
              <span className="text-xs font-extrabold text-slate-900 block mt-0.5 line-clamp-2 leading-tight">
                {store.address}
              </span>
              <span className="text-xs text-[#F26522] font-semibold mt-2 inline-flex items-center gap-1">
                Abrir GPS <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

          </div>
        </div>

      </main>

      {/* 6. Establishment Website Footer */}
      <footer className="mt-auto bg-slate-900 text-white border-t border-slate-800 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span className="font-bold text-white">{store.name}</span> · {store.category}
            <p className="mt-0.5">
              Empresa participante do guia comercial oficial Comércio Campina · Campina Grande - PB.
            </p>
          </div>

          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all cursor-pointer min-h-[40px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Portal Geral</span>
          </button>
        </div>
      </footer>

    </div>
  );
};
