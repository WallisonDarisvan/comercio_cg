/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef } from 'react';
import { Header } from './components/Header';
import { CommercialHeroBanner } from './components/CommercialHeroBanner';
import { SearchAndCategories } from './components/SearchAndCategories';
import { VitrineDestaquesTV } from './components/VitrineDestaquesTV';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';
import { StoreWebsiteView } from './components/StoreWebsiteView';
import { MerchantRegistrationModal } from './components/MerchantRegistrationModal';
import { TvScheduleModal } from './components/TvScheduleModal';
import { DrawerMenu } from './components/DrawerMenu';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AdminDashboard } from './components/admin/AdminDashboard';
import {
  STORES_DATA,
  Store,
  INITIAL_BANNERS,
  CommercialBanner,
  INITIAL_LEADS,
  LeadSubmission,
} from './data/mockData';

export default function App() {
  // Banners state (persisted in localStorage)
  const [banners, setBanners] = useState<CommercialBanner[]>(() => {
    try {
      const saved = localStorage.getItem('comercio_campina_banners');
      if (saved) {
        const parsed: CommercialBanner[] = JSON.parse(saved);
        const mapped = parsed.map((b) =>
          b.mediaUrl?.includes('@TVBorborema/live')
            ? { ...b, mediaType: 'image' as const, mediaUrl: '/src/assets/images/campina_tech_store_1793926202240.jpg' }
            : b
        );
        const hasLiveBanner = mapped.some((b) => b.id === 'banner-tv-borborema-aovivo');
        if (!hasLiveBanner) {
          const liveBanner = INITIAL_BANNERS.find((b) => b.id === 'banner-tv-borborema-aovivo');
          if (liveBanner) {
            return [...mapped, liveBanner];
          }
        }
        return mapped;
      }
      return INITIAL_BANNERS;
    } catch {
      return INITIAL_BANNERS;
    }
  });

  // Stores state (persisted in localStorage)
  const [stores, setStores] = useState<Store[]>(() => {
    try {
      const saved = localStorage.getItem('comercio_campina_stores');
      return saved ? JSON.parse(saved) : STORES_DATA;
    } catch {
      return STORES_DATA;
    }
  });

  // Leads state (persisted in localStorage)
  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('comercio_campina_leads');
      return saved ? JSON.parse(saved) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  // Admin View State
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Search & Filters state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Todos os Bairros');
  const [activeSection, setActiveSection] = useState('inicio');

  // Modals & Drawers state
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync state to localStorage
  const handleUpdateBanners = (newBanners: CommercialBanner[]) => {
    setBanners(newBanners);
    localStorage.setItem('comercio_campina_banners', JSON.stringify(newBanners));
  };

  const handleUpdateStores = (newStores: Store[]) => {
    setStores(newStores);
    localStorage.setItem('comercio_campina_stores', JSON.stringify(newStores));
  };

  const handleUpdateLeads = (newLeads: LeadSubmission[]) => {
    setLeads(newLeads);
    localStorage.setItem('comercio_campina_leads', JSON.stringify(newLeads));
  };

  const handleLeadSubmitted = (newLead: LeadSubmission) => {
    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem('comercio_campina_leads', JSON.stringify(updated));
  };

  const handleFocusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInputRef.current.focus();
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectStoreById = (storeId: string) => {
    const found = stores.find((s) => s.id === storeId);
    if (found) {
      setSelectedStore(found);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Filtered stores computation
  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      // Category filter
      if (selectedCategory !== 'all' && store.categoryId !== selectedCategory) {
        return false;
      }

      // Neighborhood filter
      if (
        selectedNeighborhood !== 'Todos os Bairros' &&
        store.neighborhood.toLowerCase() !== selectedNeighborhood.toLowerCase()
      ) {
        return false;
      }

      // Search term filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = store.name.toLowerCase().includes(query);
        const matchesCategory = store.category.toLowerCase().includes(query);
        const matchesDesc = store.description.toLowerCase().includes(query);
        const matchesOffer = store.offer.toLowerCase().includes(query);
        const matchesNeighborhood = store.neighborhood.toLowerCase().includes(query);
        const matchesShow = store.featuredInShow.toLowerCase().includes(query);

        return (
          matchesName ||
          matchesCategory ||
          matchesDesc ||
          matchesOffer ||
          matchesNeighborhood ||
          matchesShow
        );
      }

      return true;
    });
  }, [stores, searchTerm, selectedCategory, selectedNeighborhood]);

  // If Admin Area is active, render full Admin Dashboard
  if (isAdminOpen) {
    return (
      <AdminDashboard
        banners={banners}
        stores={stores}
        leads={leads}
        onUpdateBanners={handleUpdateBanners}
        onUpdateStores={handleUpdateStores}
        onUpdateLeads={handleUpdateLeads}
        onCloseAdmin={() => setIsAdminOpen(false)}
      />
    );
  }

  // If an establishment is selected, display its dedicated website view (not a modal)
  if (selectedStore) {
    return (
      <StoreWebsiteView
        store={selectedStore}
        onBack={() => {
          setSelectedStore(null);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#F26522]/20 selection:text-[#0B3B60] pb-24 md:pb-0">
      
      {/* 1. Header Fixo & Identidade Co-Branded */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onFocusSearch={handleFocusSearch}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 2. Banner Rotativo Comercial dos Lojistas Patrocinadores */}
        <CommercialHeroBanner
          banners={banners}
          onSelectStoreById={handleSelectStoreById}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 3. Barra de Busca Inteligente & Categorias */}
        <SearchAndCategories
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedNeighborhood={selectedNeighborhood}
          onSelectNeighborhood={setSelectedNeighborhood}
          searchRef={searchInputRef}
          totalResults={filteredStores.length}
        />

        {/* 4. Vitrine da TV ("Destaques Recomendados no Ar") */}
        <div id="vitrine-lojas">
          <VitrineDestaquesTV
            stores={filteredStores}
            onSelectStore={(store) => setSelectedStore(store)}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        </div>
      </main>

      {/* 6. Barra Flutuante de Conversão (Sticky CTA) */}
      <StickyCTA onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* 7. Navegação Móvel Inferior Ergonômica (Mobile Bottom Nav) */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
        totalStoresCount={filteredStores.length}
      />

      {/* Footer */}
      <Footer
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Modals & Interactive Drawers */}
      <MerchantRegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLeadSubmitted={handleLeadSubmitted}
      />

      <TvScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(false)}
      />

      <DrawerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onSelectNeighborhood={(n) => setSelectedNeighborhood(n)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

    </div>
  );
}
