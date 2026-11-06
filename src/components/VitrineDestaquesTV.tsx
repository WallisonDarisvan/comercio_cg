import React, { useState, useEffect } from 'react';
import {
  Star,
  MapPin,
  CheckCircle2,
  Grid,
  Columns,
  Globe,
  ArrowRight,
  Sparkles,
  Store as StoreIcon,
  Building2,
  Shuffle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Store } from '../data/mockData';

// Função utilitária de Fisher-Yates para rotação/embaralhamento imparcial dos cards
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

interface VitrineDestaquesTVProps {
  stores: Store[];
  onSelectStore: (store: Store) => void;
  onOpenRegister: () => void;
}

export const VitrineDestaquesTV: React.FC<VitrineDestaquesTVProps> = ({
  stores,
  onSelectStore,
  onOpenRegister,
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  // Ordem dinâmica e rotativa dos cards (troca a cada recarregamento e troca de categoria/página)
  const [shuffledStores, setShuffledStores] = useState<Store[]>(() => shuffleArray(stores));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Sincroniza e re-embaralha quando a lista de lojas recebida mudar (troca de categoria, filtro ou recarregamento)
  useEffect(() => {
    setShuffledStores(shuffleArray(stores));
    setCurrentPage(1);
  }, [stores]);

  const handleRotateOrder = () => {
    setShuffledStores(shuffleArray(stores));
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(shuffledStores.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStores =
    viewMode === 'grid'
      ? shuffledStores.slice(startIndex, startIndex + itemsPerPage)
      : shuffledStores;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const vitrineEl = document.getElementById('vitrine-lojas');
    if (vitrineEl) {
      vitrineEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsappDirect = (e: React.MouseEvent, store: Store) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Olá! Encontrei o estabelecimento ${store.name} no portal Comércio Campina e gostaria de mais informações!`
    );
    window.open(`https://wa.me/${store.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section className="py-6 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-[#0B3B60] text-[11px] sm:text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#F26522]" />
                DESTAQUES DA CIDADE
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Campina Grande & Região
              </span>
            </div>
            
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Vitrine de Comércios & Empresas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl">
              Encontre os melhores estabelecimentos da cidade, descubra produtos e serviços de qualidade e fale diretamente pelo WhatsApp.
            </p>
          </div>

          {/* View toggle (Grid / Carousel) & Shuffle Button */}
          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            <button
              onClick={handleRotateOrder}
              className="px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all bg-amber-50 hover:bg-amber-100 text-[#0B3B60] border border-amber-300 shadow-2xs active:scale-95 cursor-pointer min-h-[38px]"
              title="Trocar e embaralhar a ordem dos comércios"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#F26522]" />
              <span className="font-bold">Girar Vitrine</span>
            </button>

            <div className="flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors min-h-[38px] ${
                  viewMode === 'grid'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Visualização em Grade"
              >
                <Grid className="w-4 h-4" />
                <span className="hidden sm:inline">Grade</span>
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors min-h-[38px] ${
                  viewMode === 'carousel'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Visualização em Linha"
              >
                <Columns className="w-4 h-4" />
                <span className="hidden sm:inline">Carrossel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {stores.length === 0 ? (
          <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#F26522] flex items-center justify-center mx-auto mb-4">
              <StoreIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Nenhum comércio encontrado para estes filtros
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Tente buscar por termos mais amplos ou selecione outra categoria ou bairro de Campina Grande.
            </p>
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3B60] hover:bg-[#145388] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              Cadastre sua loja nesta categoria
            </button>
          </div>
        ) : (
          <>
            {/* Stores Display: Grid or Carousel */}
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7'
                : 'flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x touch-pan-x overscroll-x-contain'
            }
          >
            {currentStores.map((store) => (
              <div
                key={store.id}
                onClick={() => onSelectStore(store)}
                className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 active:scale-[0.99] transition-all duration-200 flex flex-col overflow-hidden group cursor-pointer ${
                  viewMode === 'carousel' ? 'w-[290px] sm:w-[360px] shrink-0 snap-start' : 'w-full'
                }`}
              >
                {/* Store Cover Image with Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={store.image}
                    alt={store.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Scrim for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Gradient Highlight Badge Tag */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F26522] to-amber-500 text-white text-[11px] font-extrabold shadow-md flex items-center gap-1.5 tracking-tight">
                      <Sparkles className="w-3 h-3 text-white fill-white" />
                      Destaque em Campina
                    </span>
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{store.rating.toFixed(1)}</span>
                    <span className="text-[10px] text-slate-300 font-normal">({store.reviewsCount})</span>
                  </div>

                  {/* Neighborhood Location Pill */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                    <span className="font-semibold">{store.neighborhood}</span>
                    <span className="text-white/60">·</span>
                    <span className="text-white/80 text-[11px] truncate max-w-[170px]">{store.category}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Store Title & Official Verified Badge */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0B3B60] transition-colors line-clamp-1">
                        {store.name}
                      </h3>
                      {store.isVerifiedTv && (
                        <span title="Empresa Verificada Comércio Campina" className="shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
                        </span>
                      )}
                    </div>

                    {/* Brief description (limite estrito de 2 linhas) */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-5 h-10 overflow-hidden mb-4">
                      {store.description}
                    </p>
                  </div>

                  {/* Clean card micro-footer indicating clickable site */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0B3B60] font-bold group-hover:text-[#F26522] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#F26522]" />
                      <span>Visitar site do estabelecimento</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#0B3B60] group-hover:text-[#F26522]" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Paginação Dinâmica com Troca e Rotação de Cards */}
          {viewMode === 'grid' && totalPages > 1 && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Página <span className="font-bold text-[#0B3B60]">{currentPage}</span> de{' '}
                <span className="font-bold text-[#0B3B60]">{totalPages}</span> · Mostrando{' '}
                <span className="font-bold text-slate-800">{startIndex + 1}</span> a{' '}
                <span className="font-bold text-slate-800">
                  {Math.min(startIndex + itemsPerPage, shuffledStores.length)}
                </span>{' '}
                de <span className="font-bold text-slate-800">{shuffledStores.length}</span> comércios
              </div>

              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
                  title="Página Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          currentPage === page
                            ? 'bg-[#0B3B60] text-white shadow-xs scale-105 ring-2 ring-[#0B3B60]/20'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-1 text-slate-400 text-xs font-bold">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
                  title="Próxima Página"
                >
                  <span className="hidden sm:inline">Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          </>
        )}

        {/* Trust banner below Vitrine */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0B3B60] to-[#145388] text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base leading-snug">
                Compre com a confiança e facilidade do comércio local
              </h4>
              <p className="text-xs text-blue-100 mt-0.5">
                Empresas com endereço físico em Campina Grande, atendimento humanizado e contato direto.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white text-[#0B3B60] hover:bg-slate-100 active:scale-95 text-xs font-bold transition-all whitespace-nowrap min-h-[44px] shrink-0 text-center flex items-center justify-center cursor-pointer shadow-xs"
          >
            Quero Cadastrar Minha Loja
          </button>
        </div>

      </div>
    </section>
  );
};
