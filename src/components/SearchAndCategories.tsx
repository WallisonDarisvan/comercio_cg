import React, { useRef } from 'react';
import {
  Search,
  X,
  MapPin,
  Utensils,
  ShoppingBag,
  Smartphone,
  Glasses,
  Car,
  Hammer,
  Store,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CATEGORIES, NEIGHBORHOODS, Category } from '../data/mockData';

interface SearchAndCategoriesProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  selectedNeighborhood: string;
  onSelectNeighborhood: (neighborhood: string) => void;
  searchRef?: React.RefObject<HTMLInputElement | null>;
  totalResults: number;
}

export const SearchAndCategories: React.FC<SearchAndCategoriesProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedNeighborhood,
  onSelectNeighborhood,
  searchRef,
  totalResults,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Glasses':
        return <Glasses className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Car':
        return <Car className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Hammer':
        return <Hammer className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Store className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <section className="py-6 sm:py-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar + Neighborhood Select Box */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-6">
          <div className="bg-slate-100/70 p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            
            {/* Search Input */}
            <div className="relative flex-1 flex items-center">
              <Search className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="O que você procura em Campina Grande?"
                className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-white rounded-xl text-base sm:text-sm text-slate-900 placeholder:text-slate-400 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#0B3B60] focus:border-transparent transition-all shadow-xs min-h-[44px]"
              />
              {searchTerm && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 rounded-md min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Neighborhood Filter Dropdown */}
            <div className="relative sm:w-52 shrink-0 flex items-center">
              <MapPin className="absolute left-3.5 w-4 h-4 text-[#F26522] pointer-events-none" />
              <select
                value={selectedNeighborhood}
                onChange={(e) => onSelectNeighborhood(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 sm:py-3 bg-white rounded-xl text-xs sm:text-sm font-medium text-slate-700 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#0B3B60] transition-all cursor-pointer shadow-xs appearance-none min-h-[44px]"
              >
                {NEIGHBORHOODS.map((neighborhood) => (
                  <option key={neighborhood} value={neighborhood}>
                    {neighborhood}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>

          </div>

          {/* Search meta info */}
          <div className="mt-2 flex items-center justify-between px-1 text-[11px] sm:text-xs text-slate-500">
            <span>
              Mostrando <strong className="text-slate-900 font-semibold">{totalResults}</strong> comércios na cidade
            </span>
            {(searchTerm || selectedCategory !== 'all' || selectedNeighborhood !== 'Todos os Bairros') && (
              <button
                onClick={() => {
                  onSearchChange('');
                  onSelectCategory('all');
                  onSelectNeighborhood('Todos os Bairros');
                }}
                className="text-[#F26522] hover:underline font-semibold cursor-pointer"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Categories Horizontal Carousel */}
        <div className="relative">
          {/* Scroll arrow buttons for desktop */}
          <button
            onClick={() => scrollCarousel('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-700 hover:text-[#0B3B60] hover:scale-105 transition-all cursor-pointer"
            aria-label="Rolar categorias para esquerda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollCarousel('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-700 hover:text-[#0B3B60] hover:scale-105 transition-all cursor-pointer"
            aria-label="Rolar categorias para direita"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Touch-Friendly Horizontal Carousel with Smooth Physics */}
          <div
            ref={carouselRef}
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1 px-0.5 scroll-smooth snap-x snap-proximity"
          >
            {CATEGORIES.map((cat: Category) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all min-h-[44px] cursor-pointer snap-start active:scale-95 ${
                    isActive
                      ? 'bg-[#0B3B60] text-white shadow-sm shadow-[#0B3B60]/20'
                      : 'bg-slate-100/90 hover:bg-slate-200/70 text-slate-700 border border-slate-200/60'
                  }`}
                >
                  <span className={`p-1 rounded-lg ${isActive ? 'bg-white/20 text-white' : cat.color}`}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
