/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { CommercialHeroBanner } from './components/CommercialHeroBanner';
import { SearchAndCategories } from './components/SearchAndCategories';
import { VitrineDestaquesTV } from './components/VitrineDestaquesTV';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';
import { StoreWebsiteView } from './components/StoreWebsiteView';
import { MerchantRegistrationModal } from './components/MerchantRegistrationModal';
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
import {
  fetchBannersApi,
  fetchStoresApi,
  fetchLeadsApi,
  updateBannersApi,
  createLeadApi,
} from './services/api';

export default function App() {
  // Banners state (persisted in localStorage)
  const [banners, setBanners] = useState<CommercialBanner[]>(() => {
    try {
      const saved = localStorage.getItem('comercio_campina_banners');
      if (saved) {
        const parsed: CommercialBanner[] = JSON.parse(saved);
        // Filtra banners legados que faziam alusão à TV
        const filtered = parsed.filter(
          (b) => b.id !== 'banner-tv-borborema-aovivo' && b.merchantId !== 'tv-borborema-live'
        );
        return filtered.length > 0 ? filtered : INITIAL_BANNERS;
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Carregar dados da API (PostgreSQL) se disponível, mantendo fallback resiliente
  useEffect(() => {
    let isMounted = true;
    async function syncWithApi() {
      try {
        const [apiBanners, apiStores, apiLeads] = await Promise.all([
          fetchBannersApi(),
          fetchStoresApi(),
          fetchLeadsApi(),
        ]);
        if (!isMounted) return;
        if (apiBanners && apiBanners.length > 0) {
          setBanners(apiBanners);
          localStorage.setItem('comercio_campina_banners', JSON.stringify(apiBanners));
        }
        if (apiStores && apiStores.length > 0) {
          setStores(apiStores);
          localStorage.setItem('comercio_campina_stores', JSON.stringify(apiStores));
        }
        if (apiLeads && apiLeads.length > 0) {
          setLeads(apiLeads);
          localStorage.setItem('comercio_campina_leads', JSON.stringify(apiLeads));
        }
      } catch (err) {
        console.warn('Backend offline ou inacessível, utilizando dados locais/cache.');
      }
    }
    syncWithApi();
    return () => {
      isMounted = false;
    };
  }, []);

  // Sync state to localStorage & API
  const handleUpdateBanners = (newBanners: CommercialBanner[]) => {
    setBanners(newBanners);
    localStorage.setItem('comercio_campina_banners', JSON.stringify(newBanners));
    updateBannersApi(newBanners).catch(() => {});
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
    createLeadApi(newLead).catch(() => {});
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
        <div id="busca-categorias">
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
        </div>

        {/* 4. Vitrine de Empresas Recomendadas */}
        <div id="vitrine-lojas">
          <VitrineDestaquesTV
            stores={filteredStores}
            onSelectStore={(store) => setSelectedStore(store)}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        </div>
      </main>

      {/* 5. Barra Flutuante de Conversão (Sticky CTA) */}
      <StickyCTA onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* 6. Navegação Móvel Inferior Ergonômica (Mobile Bottom Nav) */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
        totalStoresCount={filteredStores.length}
      />

      {/* Footer */}
      <Footer
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Modals & Interactive Drawers */}
      <MerchantRegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLeadSubmitted={handleLeadSubmitted}
      />

      <DrawerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onSelectNeighborhood={(n) => setSelectedNeighborhood(n)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

    </div>
  );
}
