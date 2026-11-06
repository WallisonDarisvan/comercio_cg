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

  const getCategoryIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110";
    switch (iconName) {
      case 'Utensils':
        return <Utensils className={iconClass} />;
      case 'ShoppingBag':
        return <ShoppingBag className={iconClass} />;
      case 'Smartphone':
        return <Smartphone className={iconClass} />;
      case 'Glasses':
        return <Glasses className={iconClass} />;
      case 'Car':
        return <Car className={iconClass} />;
      case 'Hammer':
        return <Hammer className={iconClass} />;
      default:
        return <Store className={iconClass} />;
    }
  };

  return (
    <section className="py-4 sm:py-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Search Bar + Neighborhood Select Box */}
        <div className="max-w-4xl mx-auto mb-3 sm:mb-6">
          <div className="bg-slate-100/70 p-1.5 sm:p-2.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            
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
                  className="absolute right-2 p-1 text-slate-400 hover:text-slate-600 rounded-md min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
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
                className="text-[#F26522] hover:underline font-semibold cursor-pointer py-1 px-1.5"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Categories Horizontal Carousel */}
        <div className="relative">
          {/* Categories with Prominent Neutral Icons */}
          <div
            ref={carouselRef}
            className="flex items-start justify-start sm:justify-center gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth snap-x snap-proximity touch-pan-x overscroll-x-contain"
          >
            {CATEGORIES.map((cat: Category) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className="group flex flex-col items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer snap-start active:scale-95 transition-all text-center focus:outline-none w-[74px] sm:w-24"
                >
                  {/* Prominent Neutral Icon Box */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0B3B60] text-white shadow-md shadow-[#0B3B60]/25 ring-2 ring-[#0B3B60]/20 scale-105'
                        : 'bg-slate-100/90 text-slate-700 border border-slate-200/80 hover:bg-slate-200/80 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {getCategoryIcon(cat.iconName)}
                  </div>

                  {/* Category Title */}
                  <div className="flex flex-col items-center min-h-[32px] justify-start">
                    <span
                      className={`text-[11px] sm:text-xs leading-tight transition-colors line-clamp-2 px-0.5 ${
                        isActive
                          ? 'text-[#0B3B60] font-bold'
                          : 'text-slate-600 group-hover:text-slate-900 font-medium'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
