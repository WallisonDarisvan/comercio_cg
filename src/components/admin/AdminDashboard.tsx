import React, { useState } from 'react';
import {
  Shield,
  ArrowLeft,
  LayoutDashboard,
  Layers,
  Store,
  Inbox,
  Plus,
  Trash2,
  Edit2,
  Eye,
  EyeOff,
  DollarSign,
  TrendingUp,
  MessageCircle,
  Search,
  X,
  Lock,
  LogOut,
  Sparkles,
} from 'lucide-react';
import {
  CommercialBanner,
  Store as StoreType,
  LeadSubmission,
  CATEGORIES,
  NEIGHBORHOODS,
} from '../../data/mockData';

interface AdminDashboardProps {
  banners: CommercialBanner[];
  stores: StoreType[];
  leads: LeadSubmission[];
  onUpdateBanners: (banners: CommercialBanner[]) => void;
  onUpdateStores: (stores: StoreType[]) => void;
  onUpdateLeads: (leads: LeadSubmission[]) => void;
  onCloseAdmin: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  banners,
  stores,
  leads,
  onUpdateBanners,
  onUpdateStores,
  onUpdateLeads,
  onCloseAdmin,
}) => {
  // Simple auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('comercio_campina_admin_auth') === 'true';
  });
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Active sub-page tab
  const [activeTab, setActiveTab] = useState<'overview' | 'banners' | 'stores' | 'leads'>('banners');

  // Modal states for creating/editing banners
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<CommercialBanner | null>(null);

  // Modal states for creating/editing stores
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [editingStore, setEditingStore] = useState<StoreType | null>(null);

  // Search & Filters in Admin
  const [storeSearch, setStoreSearch] = useState('');

  // Form states for banner
  const [bannerForm, setBannerForm] = useState<Partial<CommercialBanner>>({
    merchantName: '',
    headline: '',
    subtitle: '',
    badge: '⭐ Patrocinador Master',
    mediaType: 'video',
    mediaUrl: '',
    ctaText: 'Falar no WhatsApp',
    ctaWhatsapp: '5583999990000',
    validUntil: '31/12/2026',
    monthlyInvestment: 'R$ 599/mês',
    status: 'active',
  });

  // Form states for store
  const [storeForm, setStoreForm] = useState<Partial<StoreType>>({
    name: '',
    category: 'Tecnologia & Celulares',
    categoryId: 'tecnologia',
    neighborhood: 'Centro',
    address: 'Campina Grande - PB',
    phone: '(83) 3321-0000',
    whatsapp: '5583999990000',
    description: '',
    offer: '',
    tagTv: '⭐ Destaque no Comando Policial',
    rating: 5.0,
    reviewsCount: 12,
    image: '/src/assets/images/campina_tech_store_1793926202240.jpg',
    featuredInShow: 'Comando Policial',
    discountCoupon: 'BORBOREMA10',
    isVerifiedTv: true,
    openingHours: 'Segunda a Sexta: 08:00 às 18:00',
    highlights: ['Atendimento Rápido', 'Preço Especial'],
  });

  // Login handler
  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (loginPass === 'admin' || loginPass === 'borborema2026' || loginPass === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('comercio_campina_admin_auth', 'true');
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleQuickLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('comercio_campina_admin_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('comercio_campina_admin_auth');
  };

  // Banner Actions
  const handleToggleBannerStatus = (id: string) => {
    const updated = banners.map((b) =>
      b.id === id ? { ...b, status: b.status === 'active' ? ('paused' as const) : ('active' as const) } : b
    );
    onUpdateBanners(updated);
  };

  const handleDeleteBanner = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este banner rotativo?')) {
      const updated = banners.filter((b) => b.id !== id);
      onUpdateBanners(updated);
    }
  };

  const handleOpenNewBannerModal = () => {
    setEditingBanner(null);
    setBannerForm({
      merchantName: '',
      headline: '',
      subtitle: '',
      badge: '⭐ Patrocinador Master',
      mediaType: 'video',
      mediaUrl: '',
      ctaText: 'Falar no WhatsApp',
      ctaWhatsapp: '5583999990000',
      validUntil: '31/12/2026',
      monthlyInvestment: 'R$ 599/mês',
      status: 'active',
    });
    setIsBannerModalOpen(true);
  };

  const handleOpenEditBannerModal = (banner: CommercialBanner) => {
    setEditingBanner(banner);
    setBannerForm(banner);
    setIsBannerModalOpen(true);
  };

  const handleSaveBanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bannerForm.headline || !bannerForm.merchantName) return;

    if (editingBanner) {
      const updated = banners.map((b) =>
        b.id === editingBanner.id ? ({ ...b, ...bannerForm } as CommercialBanner) : b
      );
      onUpdateBanners(updated);
    } else {
      const newBanner: CommercialBanner = {
        id: `banner-${Date.now()}`,
        merchantId: `merchant-${Date.now()}`,
        merchantName: bannerForm.merchantName || 'Comércio Parceiro',
        headline: bannerForm.headline || '',
        subtitle: bannerForm.subtitle || '',
        badge: bannerForm.badge || '⭐ Patrocinador Master',
        mediaType: bannerForm.mediaType || 'video',
        mediaUrl: bannerForm.mediaUrl || '',
        ctaText: bannerForm.ctaText || 'Falar no WhatsApp',
        ctaWhatsapp: bannerForm.ctaWhatsapp || '5583999990000',
        status: bannerForm.status || 'active',
        validUntil: bannerForm.validUntil || '31/12/2026',
        order: banners.length + 1,
        clicksCount: 0,
        monthlyInvestment: bannerForm.monthlyInvestment || 'R$ 599/mês',
      };
      onUpdateBanners([...banners, newBanner]);
    }
    setIsBannerModalOpen(false);
  };

  // Store Actions
  const handleDeleteStore = (id: string) => {
    if (window.confirm('Tem certeza que deseja remover esta loja do portal?')) {
      const updated = stores.filter((s) => s.id !== id);
      onUpdateStores(updated);
    }
  };

  const handleOpenNewStoreModal = () => {
    setEditingStore(null);
    setStoreForm({
      name: '',
      category: 'Tecnologia & Celulares',
      categoryId: 'tecnologia',
      neighborhood: 'Centro',
      address: 'Campina Grande - PB',
      phone: '(83) 3321-0000',
      whatsapp: '5583999990000',
      description: '',
      offer: '',
      tagTv: '⭐ Destaque do Centro',
      rating: 5.0,
      reviewsCount: 15,
      image: '/src/assets/images/campina_tech_store_1793926202240.jpg',
      featuredInShow: 'Destaque Comercial',
      discountCoupon: 'CAMPINA10',
      isVerifiedTv: true,
      openingHours: 'Segunda a Sexta: 08:00 às 18:00',
      highlights: ['Atendimento Express', 'Parcelamento Facilitado'],
    });
    setIsStoreModalOpen(true);
  };

  const handleOpenEditStoreModal = (store: StoreType) => {
    setEditingStore(store);
    setStoreForm(store);
    setIsStoreModalOpen(true);
  };

  const handleSaveStore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeForm.name) return;

    if (editingStore) {
      const updated = stores.map((s) =>
        s.id === editingStore.id ? ({ ...s, ...storeForm } as StoreType) : s
      );
      onUpdateStores(updated);
    } else {
      const newStore: StoreType = {
        id: `store-${Date.now()}`,
        name: storeForm.name || '',
        category: storeForm.category || 'Geral',
        categoryId: storeForm.categoryId || 'geral',
        neighborhood: storeForm.neighborhood || 'Centro',
        address: storeForm.address || 'Campina Grande - PB',
        phone: storeForm.phone || '(83) 3300-0000',
        whatsapp: storeForm.whatsapp || '5583999990000',
        instagram: storeForm.instagram || '@comerciocampina',
        description: storeForm.description || '',
        offer: storeForm.offer || '',
        tagTv: storeForm.tagTv || '⭐ Empresa Recomendada',
        rating: 5.0,
        reviewsCount: 1,
        image: storeForm.image || '/src/assets/images/campina_tech_store_1793926202240.jpg',
        featuredInShow: storeForm.featuredInShow || 'Destaque Comercial',
        discountCoupon: storeForm.discountCoupon || 'CAMPINA10',
        isVerifiedTv: true,
        openingHours: storeForm.openingHours || '08:00 às 18:00',
        highlights: storeForm.highlights || ['Atendimento Oficial'],
        website: storeForm.website || '',
      };
      onUpdateStores([...stores, newStore]);
    }
    setIsStoreModalOpen(false);
  };

  // Lead Status Toggle
  const handleUpdateLeadStatus = (leadId: string, newStatus: LeadSubmission['status']) => {
    const updated = leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l));
    onUpdateLeads(updated);
  };

  // Filtered stores in admin
  const filteredStores = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(storeSearch.toLowerCase()) ||
      s.neighborhood.toLowerCase().includes(storeSearch.toLowerCase()) ||
      s.category.toLowerCase().includes(storeSearch.toLowerCase())
  );

  // If not authenticated, render Admin Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4 text-white">
        <div className="max-w-md w-full bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B3B60] to-[#F26522] flex items-center justify-center text-white shadow-md">
              <Shield className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Área Administrativa</h2>
              <p className="text-xs text-slate-400">Comércio Campina · Painel de Gestão</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Senha de Administrador
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="Digite a senha (padrão: admin123)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F26522]"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5" />
              </div>
              {loginError && (
                <p className="text-xs text-rose-400 mt-1">
                  Senha incorreta. Utilize a senha padrão ou o acesso rápido abaixo.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#F26522] hover:bg-[#ff7a3d] text-white font-bold text-sm shadow-md transition-all cursor-pointer min-h-[44px]"
            >
              Acessar Painel de Controle
            </button>
          </form>

          {/* Quick Access Helper */}
          <div className="mt-6 pt-5 border-t border-slate-700/60 text-center space-y-3">
            <button
              onClick={handleQuickLogin}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors underline cursor-pointer"
            >
              ⚡ Acesso Rápido de Demonstração (1 Clique)
            </button>

            <div>
              <button
                onClick={onCloseAdmin}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar ao Portal Público</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active banners count & metrics
  const activeBannersCount = banners.filter((b) => b.status === 'active').length;
  const totalClicks = banners.reduce((acc, curr) => acc + (curr.clicksCount || 0), 0);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-900">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onCloseAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all min-h-[38px] cursor-pointer"
              title="Voltar ao site público"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ver Site Público</span>
            </button>

            <div className="hidden sm:block h-5 w-px bg-slate-700" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F26522] flex items-center justify-center text-white font-extrabold text-sm">
                AD
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight">Painel de Gestão Comercial</h1>
                <p className="text-[10px] text-slate-400">Comércio Campina · Portal Oficial</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors min-h-[38px]"
              title="Desconectar do painel"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full flex flex-col gap-6">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('banners')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[42px] cursor-pointer whitespace-nowrap ${
              activeTab === 'banners'
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4 text-[#F26522]" />
            <span>Banners Rotativos ({banners.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('stores')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[42px] cursor-pointer whitespace-nowrap ${
              activeTab === 'stores'
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Store className="w-4 h-4 text-emerald-500" />
            <span>Lojas & Comerciantes ({stores.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[42px] cursor-pointer whitespace-nowrap ${
              activeTab === 'leads'
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Inbox className="w-4 h-4 text-amber-500" />
            <span>Solicitações de Adesão ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[42px] cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-blue-500" />
            <span>Visão Geral & Métricas</span>
          </button>
        </div>

        {/* TAB 1: BANNERS ROTATIVOS (HERO CAROUSEL DO TOPO) */}
        {activeTab === 'banners' && (
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Gestão dos Banners Rotativos Patrocinados
                </h2>
                <p className="text-xs text-slate-500">
                  Gerencie os anúncios e vídeos dos comerciantes que pagaram a cota rotativa do topo do portal.
                </p>
              </div>

              <button
                onClick={handleOpenNewBannerModal}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F26522] hover:bg-[#ff7a3d] text-white text-xs sm:text-sm font-bold transition-all shadow-sm min-h-[42px] cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Novo Banner Patrocinado</span>
              </button>
            </div>

            {/* Banners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {banners.map((banner, index) => (
                <div
                  key={banner.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Media Thumbnail / Preview */}
                    <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                      {banner.mediaType === 'video' ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 p-4 text-center">
                          <span className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white mb-2 shadow-md">
                            ▶
                          </span>
                          <span className="text-xs font-semibold text-slate-200 truncate max-w-full">
                            Vídeo YouTube
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono truncate max-w-[200px]">
                            {banner.mediaUrl}
                          </span>
                        </div>
                      ) : (
                        <img
                          src={banner.mediaUrl}
                          alt={banner.headline}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      )}

                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold">
                          Posição #{index + 1}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            banner.status === 'active'
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-700 text-slate-300'
                          }`}
                        >
                          {banner.status === 'active' ? 'Ativo no Ar' : 'Pausado'}
                        </span>
                      </div>
                    </div>

                    {/* Banner Info */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[11px] font-bold text-[#F26522]">
                          {banner.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {banner.monthlyInvestment}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                        {banner.headline}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {banner.subtitle}
                      </p>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>Anunciante: <strong>{banner.merchantName}</strong></span>
                        <span>{banner.clicksCount || 0} cliques</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleToggleBannerStatus(banner.id)}
                      className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                        banner.status === 'active'
                          ? 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      }`}
                      title={banner.status === 'active' ? 'Pausar exibição' : 'Ativar no topo'}
                    >
                      {banner.status === 'active' ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Pausar</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Ativar</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleOpenEditBannerModal(banner)}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                      title="Editar anúncio"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeleteBanner(banner.id)}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-rose-50 text-rose-600 transition-colors"
                      title="Excluir anúncio"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: GESTÃO DE LOJAS E COMERCIANTES */}
        {activeTab === 'stores' && (
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Lojas & Comerciantes de Campina Grande
                </h2>
                <p className="text-xs text-slate-500">
                  Cadastre novos parceiros, altere telefones, endereços, ofertas e categorias.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="text"
                    value={storeSearch}
                    onChange={(e) => setStoreSearch(e.target.value)}
                    placeholder="Buscar loja ou bairro..."
                    className="pl-8 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs w-48 sm:w-64 focus:outline-none focus:border-[#0B3B60]"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                </div>

                <button
                  onClick={handleOpenNewStoreModal}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B3B60] hover:bg-[#145388] text-white text-xs sm:text-sm font-bold transition-all shadow-sm min-h-[40px] cursor-pointer whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Loja</span>
                </button>
              </div>
            </div>

            {/* Stores Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200 font-bold">
                    <tr>
                      <th className="p-3.5">Estabelecimento</th>
                      <th className="p-3.5">Categoria</th>
                      <th className="p-3.5">Bairro</th>
                      <th className="p-3.5">WhatsApp / Contato</th>
                      <th className="p-3.5">Destaque</th>
                      <th className="p-3.5 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredStores.map((store) => (
                      <tr key={store.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2.5">
                          <img
                            src={store.image}
                            alt={store.name}
                            referrerPolicy="no-referrer"
                            className="w-9 h-9 rounded-lg object-cover border border-slate-200"
                          />
                          <div>
                            <span>{store.name}</span>
                            <span className="block text-[10px] text-slate-400 font-normal">
                              {store.address}
                            </span>
                          </div>
                        </td>
                        <td className="p-3.5">{store.category}</td>
                        <td className="p-3.5 font-semibold text-slate-700">{store.neighborhood}</td>
                        <td className="p-3.5 font-mono text-emerald-700">
                          <a
                            href={`https://wa.me/${store.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{store.whatsapp}</span>
                          </a>
                        </td>
                        <td className="p-3.5">
                          <span className="inline-flex px-2 py-0.5 rounded-full bg-blue-50 text-[#0B3B60] text-[10px] font-bold">
                            {store.tagTv}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => handleOpenEditStoreModal(store)}
                              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
                              title="Editar comércio"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteStore(store.id)}
                              className="p-1.5 rounded-lg hover:bg-rose-50 text-rose-600 transition-colors"
                              title="Excluir comércio"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: SOLICITAÇÕES DE ADESÃO (LEADS) */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Lojistas Interessados em Anunciar (Leads do Portal)
              </h2>
              <p className="text-xs text-slate-500">
                Empresas de Campina Grande que preencheram o formulário de planos com 50% OFF.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-semibold text-slate-400">
                        {lead.createdAt}
                      </span>
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          handleUpdateLeadStatus(lead.id, e.target.value as LeadSubmission['status'])
                        }
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border cursor-pointer ${
                          lead.status === 'novo'
                            ? 'bg-amber-50 text-amber-700 border-amber-300'
                            : lead.status === 'em_contato'
                            ? 'bg-blue-50 text-blue-700 border-blue-300'
                            : lead.status === 'aprovado'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                            : 'bg-slate-100 text-slate-600 border-slate-300'
                        }`}
                      >
                        <option value="novo">Novo Lead</option>
                        <option value="em_contato">Em Contato</option>
                        <option value="aprovado">Contrato Fechado</option>
                        <option value="arquivado">Arquivado</option>
                      </select>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {lead.companyName}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mb-2">
                      Responsável: {lead.ownerName}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                      <div>
                        <span className="text-slate-400 font-medium">Bairro: </span>
                        <strong className="text-slate-700">{lead.neighborhood}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Categoria: </span>
                        <span className="text-slate-700">{lead.category}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Plano de Interesse: </span>
                        <strong className="text-[#0B3B60] block text-[11px] mt-0.5">
                          {lead.selectedPlan}
                        </strong>
                      </div>
                    </div>

                    {lead.notes && (
                      <p className="text-[11px] text-slate-500 italic mt-2">
                        "{lead.notes}"
                      </p>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                      `Olá ${lead.ownerName}, tudo bem? Sou da equipe comercial do portal Comércio Campina e recebi sua solicitação para a empresa ${lead.companyName}. Vamos agendar sua adesão?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 min-h-[40px]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chamar no WhatsApp ({lead.whatsapp})</span>
                  </a>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 4: VISÃO GERAL & MÉTRICAS */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B3B60] flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Banners Ativos</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{activeBannersCount}</h3>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Lojas no Portal</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{stores.length}</h3>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Cliques nos Banners</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{totalClicks.toLocaleString('pt-BR')}</h3>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Cotas Mensais</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">R$ 1.197</h3>
                </div>
              </div>
            </div>

            {/* Quick Helper Guide */}
            <div className="bg-gradient-to-br from-[#0B3B60] to-[#145388] text-white p-6 rounded-3xl shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>INSTRUÇÕES DO SISTEMA COMERCIAL</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                Como funciona o Carrossel de Banners Patrocinados?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-3xl">
                O topo do portal funciona como um carrossel rotativo publicitário de alta conversão. Quando um comerciante fecha uma cota de mídia no portal, você cadastra o banner na aba <strong>"Banners Rotativos"</strong>. Você pode configurar vídeo do YouTube ou imagem de alta resolução com botão direto para o WhatsApp de vendas da loja.
              </p>
            </div>

          </div>
        )}

      </div>

      {/* MODAL: CRIAR / EDITAR BANNER ROTATIVO */}
      {isBannerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingBanner ? 'Editar Banner Patrocinado' : 'Novo Banner Patrocinado'}
              </h3>
              <button
                onClick={() => setIsBannerModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveBanner} className="space-y-3.5 text-xs text-slate-700">
              
              <div>
                <label className="block font-semibold mb-1">Nome do Estabelecimento / Anunciante</label>
                <input
                  type="text"
                  required
                  value={bannerForm.merchantName || ''}
                  onChange={(e) => setBannerForm({ ...bannerForm, merchantName: e.target.value })}
                  placeholder="Ex: Óptica Central Campina"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Título Principal (Headline do Anúncio)</label>
                <input
                  type="text"
                  required
                  value={bannerForm.headline || ''}
                  onChange={(e) => setBannerForm({ ...bannerForm, headline: e.target.value })}
                  placeholder="Ex: Grande Saldão de Óculos com 40% OFF"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Subtítulo / Descrição da Oferta</label>
                <textarea
                  rows={2}
                  required
                  value={bannerForm.subtitle || ''}
                  onChange={(e) => setBannerForm({ ...bannerForm, subtitle: e.target.value })}
                  placeholder="Ex: Exame de vista gratuito na compra da armação completa no Centro de Campina Grande."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Tipo de Mídia</label>
                  <select
                    value={bannerForm.mediaType || 'video'}
                    onChange={(e) =>
                      setBannerForm({ ...bannerForm, mediaType: e.target.value as 'video' | 'image' })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  >
                    <option value="video">Vídeo Promocional do YouTube</option>
                    <option value="image">Imagem Publicitária</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Selo / Badge</label>
                  <input
                    type="text"
                    value={bannerForm.badge || ''}
                    onChange={(e) => setBannerForm({ ...bannerForm, badge: e.target.value })}
                    placeholder="Ex: ⭐ Patrocinador Master"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  {bannerForm.mediaType === 'video'
                    ? 'URL do Vídeo no YouTube (ou código de transmissão)'
                    : 'URL da Imagem de Destaque'}
                </label>
                <input
                  type="text"
                  required
                  value={bannerForm.mediaUrl || ''}
                  onChange={(e) => setBannerForm({ ...bannerForm, mediaUrl: e.target.value })}
                  placeholder={
                    bannerForm.mediaType === 'video'
                      ? 'https://www.youtube.com/watch?v=...'
                      : '/src/assets/images/... ou URL web'
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Texto do Botão (CTA)</label>
                  <input
                    type="text"
                    value={bannerForm.ctaText || ''}
                    onChange={(e) => setBannerForm({ ...bannerForm, ctaText: e.target.value })}
                    placeholder="Ex: Chamar no WhatsApp"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">WhatsApp para Conversão</label>
                  <input
                    type="text"
                    value={bannerForm.ctaWhatsapp || ''}
                    onChange={(e) => setBannerForm({ ...bannerForm, ctaWhatsapp: e.target.value })}
                    placeholder="Ex: 5583999990000"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Validade do Banner</label>
                  <input
                    type="text"
                    value={bannerForm.validUntil || ''}
                    onChange={(e) => setBannerForm({ ...bannerForm, validUntil: e.target.value })}
                    placeholder="Ex: 31/12/2026"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Valor da Cota</label>
                  <input
                    type="text"
                    value={bannerForm.monthlyInvestment || ''}
                    onChange={(e) => setBannerForm({ ...bannerForm, monthlyInvestment: e.target.value })}
                    placeholder="Ex: R$ 599/mês"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsBannerModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#0B3B60] hover:bg-[#145388] text-white font-bold transition-all shadow-sm"
                >
                  Salvar Banner
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* MODAL: CRIAR / EDITAR LOJA */}
      {isStoreModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingStore ? 'Editar Loja / Comércio' : 'Cadastrar Nova Loja'}
              </h3>
              <button
                onClick={() => setIsStoreModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveStore} className="space-y-3.5 text-xs text-slate-700">
              
              <div>
                <label className="block font-semibold mb-1">Nome do Estabelecimento</label>
                <input
                  type="text"
                  required
                  value={storeForm.name || ''}
                  onChange={(e) => setStoreForm({ ...storeForm, name: e.target.value })}
                  placeholder="Ex: Armazém Paraíba Centro"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Categoria</label>
                  <select
                    value={storeForm.categoryId || 'tecnologia'}
                    onChange={(e) => {
                      const cat = CATEGORIES.find((c) => c.id === e.target.value);
                      setStoreForm({
                        ...storeForm,
                        categoryId: e.target.value,
                        category: cat ? cat.name : 'Geral',
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  >
                    {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Bairro em Campina Grande</label>
                  <select
                    value={storeForm.neighborhood || 'Centro'}
                    onChange={(e) => setStoreForm({ ...storeForm, neighborhood: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  >
                    {NEIGHBORHOODS.filter((n) => n !== 'Todos os Bairros').map((bairro) => (
                      <option key={bairro} value={bairro}>
                        {bairro}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Endereço Completo</label>
                <input
                  type="text"
                  value={storeForm.address || ''}
                  onChange={(e) => setStoreForm({ ...storeForm, address: e.target.value })}
                  placeholder="Ex: Rua Maciel Pinheiro, 150 - Centro"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">WhatsApp (com DDD)</label>
                  <input
                    type="text"
                    value={storeForm.whatsapp || ''}
                    onChange={(e) => setStoreForm({ ...storeForm, whatsapp: e.target.value })}
                    placeholder="Ex: 5583999990000"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Cupom de Desconto</label>
                  <input
                    type="text"
                    value={storeForm.discountCoupon || ''}
                    onChange={(e) => setStoreForm({ ...storeForm, discountCoupon: e.target.value })}
                    placeholder="Ex: CAMPINA10"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Diferencial / Oferta Especial</label>
                <input
                  type="text"
                  value={storeForm.offer || ''}
                  onChange={(e) => setStoreForm({ ...storeForm, offer: e.target.value })}
                  placeholder="Ex: 10% de desconto na primeira compra com o cupom"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Website Oficial / Link Externo (Opcional)</label>
                <input
                  type="url"
                  value={storeForm.website || ''}
                  onChange={(e) => setStoreForm({ ...storeForm, website: e.target.value })}
                  placeholder="Ex: https://minhaloja.com.br"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Breve Descrição</label>
                <textarea
                  rows={2}
                  value={storeForm.description || ''}
                  onChange={(e) => setStoreForm({ ...storeForm, description: e.target.value })}
                  placeholder="Descreva os produtos e diferenciais do estabelecimento."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0B3B60]"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsStoreModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#0B3B60] hover:bg-[#145388] text-white font-bold transition-all shadow-sm"
                >
                  Salvar Loja
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
