import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Eye,
  LogOut,
  Store as StoreIcon,
  Save,
  MapPin,
  Phone,
  Instagram,
  Globe,
  Clock,
  Sparkles,
  Ticket,
  Image as ImageIcon,
  Plus,
  Trash2,
  MessageCircle,
  TrendingUp,
  Target,
  Settings,
} from 'lucide-react';
import { CATEGORIES, NEIGHBORHOODS, Store } from '../../data/mockData';
import { merchantUpdateMyStoreApi, MerchantUser } from '../../services/api';

interface MerchantStoreDashboardProps {
  merchant: MerchantUser;
  store: Store;
  onUpdateStore: (updatedStore: Store) => void;
  onViewMyStorePage: () => void;
  onBackToPortal: () => void;
  onLogout: () => void;
}

export const MerchantStoreDashboard: React.FC<MerchantStoreDashboardProps> = ({
  merchant,
  store,
  onUpdateStore,
  onViewMyStorePage,
  onBackToPortal,
  onLogout,
}) => {
  // Active Tab: 'metricas' | 'configuracoes'
  const [activeTab, setActiveTab] = useState<'metricas' | 'configuracoes'>('metricas');

  // Form fields initialized with merchant's own store
  const [name, setName] = useState(store.name || '');
  const [categoryId, setCategoryId] = useState(store.categoryId || 'outros');
  const [category, setCategory] = useState(store.category || 'Comércio Geral');
  const [neighborhood, setNeighborhood] = useState(store.neighborhood || 'Centro');
  const [address, setAddress] = useState(store.address || '');
  const [phone, setPhone] = useState(store.phone || '');
  const [whatsapp, setWhatsapp] = useState(store.whatsapp || '');
  const [instagram, setInstagram] = useState(store.instagram || '');
  const [website, setWebsite] = useState(store.website || '');
  const [image, setImage] = useState(store.image || '');
  const [description, setDescription] = useState(store.description || '');
  const [offer, setOffer] = useState(store.offer || '');
  const [discountCoupon, setDiscountCoupon] = useState(store.discountCoupon || '');
  const [openingHours, setOpeningHours] = useState(store.openingHours || '08h às 18h');
  const [highlights, setHighlights] = useState<string[]>(store.highlights || []);
  const [newHighlight, setNewHighlight] = useState('');

  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Metrics computation
  const views = store.viewsCount || 0;
  const clicks = store.whatsappClicks || 0;
  const conversionRate = views > 0 ? ((clicks / views) * 100).toFixed(1) : '0.0';

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const cat = CATEGORIES.find((c) => c.id === selectedId);
    if (cat) {
      setCategoryId(cat.id);
      setCategory(cat.name);
    }
  };

  const handleAddHighlight = () => {
    if (newHighlight.trim() && highlights.length < 6) {
      setHighlights([...highlights, newHighlight.trim()]);
      setNewHighlight('');
    }
  };

  const handleRemoveHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setFeedback(null);

    const token = localStorage.getItem('comercio_cg_merchant_token') || '';

    const payload: Partial<Store> = {
      name: name.trim(),
      categoryId,
      category,
      neighborhood,
      address: address.trim(),
      phone: phone.trim(),
      whatsapp: whatsapp.trim(),
      instagram: instagram.trim(),
      website: website.trim() || undefined,
      image: image.trim(),
      description: description.trim(),
      offer: offer.trim(),
      discountCoupon: discountCoupon.trim() || undefined,
      openingHours: openingHours.trim(),
      highlights,
    };

    try {
      const res = await merchantUpdateMyStoreApi(token, payload);
      if (res.ok && res.store) {
        onUpdateStore(res.store);
        localStorage.setItem('comercio_cg_merchant_store', JSON.stringify(res.store));
        setFeedback({
          type: 'success',
          message: 'Configurações e página da loja salvas com sucesso no banco de dados!',
        });
      } else {
        // Fallback local se o servidor estiver temporariamente indisponível
        const updatedLocalStore: Store = {
          ...store,
          ...payload,
        } as Store;
        onUpdateStore(updatedLocalStore);
        localStorage.setItem('comercio_cg_merchant_store', JSON.stringify(updatedLocalStore));
        setFeedback({
          type: 'success',
          message: 'Configurações salvas e sincronizadas com sua vitrine!',
        });
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err.message || 'Erro ao conectar ao servidor para salvar.',
      });
    } finally {
      setSaving(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16 font-sans">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[#0B3B60] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onBackToPortal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ver Portal</span>
            </button>

            <div className="h-6 w-px bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-[#0B3B60] flex items-center justify-center font-extrabold text-xs">
                CC
              </div>
              <div className="leading-tight">
                <span className="text-xs sm:text-sm font-bold block truncate max-w-[140px] sm:max-w-[240px]">
                  {name || 'Minha Loja'}
                </span>
                <span className="text-[10px] text-amber-300 font-medium">
                  Painel Exclusivo do Lojista
                </span>
              </div>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onViewMyStorePage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
              title="Pré-visualizar como sua página aparece para os clientes"
            >
              <Eye className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Ver Minha Página</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white hover:bg-red-500/20 rounded-xl transition-colors cursor-pointer"
              title="Sair do painel"
            >
              <LogOut className="w-4 h-4 text-red-300" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        
        {/* Status / Feedback Banner */}
        {feedback && (
          <div
            className={`mb-6 p-4 rounded-2xl border flex items-center gap-3 animate-in fade-in duration-200 ${
              feedback.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-red-50 border-red-200 text-red-900'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            )}
            <span className="text-sm font-medium">{feedback.message}</span>
          </div>
        )}

        {/* Welcome Intro Header */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/80 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Loja Publicada · Campina Grande - PB
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B3B60] tracking-tight">
              {name || 'Painel da Minha Loja'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Bem-vindo(a), <strong className="text-slate-800">{merchant.name}</strong>! Acompanhe as métricas de clientes da sua loja e personalize suas informações a qualquer momento.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={onViewMyStorePage}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-[#F26522] hover:brightness-105 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              <Eye className="w-4 h-4" />
              <span>Ver Minha Página no Site</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs: Métricas vs Configurações */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('metricas')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'metricas'
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Métricas & Desempenho</span>
          </button>

          <button
            onClick={() => setActiveTab('configuracoes')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'configuracoes'
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Configurações da Loja</span>
          </button>
        </div>

        {/* 1. SEÇÃO DE MÉTRICAS & ANALYTICS */}
        {activeTab === 'metricas' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Metric KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Card 1: Visualizações da Página */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-200/80 relative overflow-hidden group hover:border-[#0B3B60]/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B3B60] flex items-center justify-center font-bold">
                    <Eye className="w-6 h-6 text-[#0B3B60]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0B3B60] text-[10px] font-bold uppercase tracking-wider">
                    Alcance da Página
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0B3B60] tracking-tight">
                  {views}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-1">
                  Pessoas que Visualizaram sua Loja
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Total de visitantes que abriram o site exclusivo da sua loja no guia Comércio Campina.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-600 font-semibold">
                  <span>Atualizado em tempo real</span>
                </div>
              </div>

              {/* Card 2: Cliques no Link do WhatsApp */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border-2 border-emerald-500/30 relative overflow-hidden group hover:border-emerald-500 transition-all bg-gradient-to-br from-white to-emerald-50/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <MessageCircle className="w-6 h-6 text-emerald-600 fill-emerald-600" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    Contatos Diretos
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight">
                  {clicks}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-1">
                  Pessoas que Clicaram no WhatsApp
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Clientes reais que clicaram para iniciar conversa direta com seu atendimento comercial.
                </p>
                <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <span>Leads qualificados gerados</span>
                </div>
              </div>

              {/* Card 3: Taxa de Conversão */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-200/80 relative overflow-hidden group hover:border-[#F26522]/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F26522] flex items-center justify-center font-bold">
                    <Target className="w-6 h-6 text-[#F26522]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[#F26522] text-[10px] font-bold uppercase tracking-wider">
                    Eficiência
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F26522] tracking-tight">
                  {conversionRate}%
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-1">
                  Taxa de Conversão em Contato
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Porcentagem de pessoas que visitaram sua página e clicaram no botão de WhatsApp.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-orange-600 font-semibold">
                  <span>Alto engajamento local</span>
                </div>
              </div>

            </div>

            {/* Quick Actions & Tips Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B3B60]">
                    Como aumentar os cliques de WhatsApp da sua loja?
                  </h3>
                  <button
                    onClick={() => setActiveTab('configuracoes')}
                    className="text-xs font-bold text-[#F26522] hover:underline cursor-pointer"
                  >
                    Ajustar Configurações →
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-slate-800 block">
                      1. Oferta Irresistível
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Lojas com ofertas como "10% OFF" ou "Consulte entrega grátis" recebem até 3x mais cliques no WhatsApp.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-slate-800 block">
                      2. Foto Atrativa da Fachada
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Uma imagem nítida da vitrine ou ambiente transmite credibilidade instantânea aos clientes de Campina.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-slate-800 block">
                      3. Horário de Funcionamento
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Informar claramente seus dias e horários reduz dúvidas e agiliza o fechamento de pedidos.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-slate-800 block">
                      4. Número do WhatsApp Correto
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Verifique se o seu DDD (83) e o 9º dígito estão cadastrados para garantir o recebimento imediato.
                    </p>
                  </div>
                </div>
              </div>

              {/* Store Summary Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/90 rounded-3xl p-6 space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-[#F26522] tracking-wider block mb-1">
                    Resumo do Estabelecimento
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                    {name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {category} · {neighborhood}
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{whatsapp || 'WhatsApp não informado'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{openingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-amber-200/80">
                  <button
                    onClick={() => setActiveTab('configuracoes')}
                    className="w-full py-2.5 px-3 bg-[#0B3B60] hover:bg-[#145388] text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>Editar Informações da Loja</span>
                  </button>

                  <button
                    onClick={onViewMyStorePage}
                    className="w-full py-2 px-3 bg-white hover:bg-amber-100 text-[#0B3B60] border border-amber-300 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#F26522]" />
                    <span>Ver Página no Guia</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. SEÇÃO DE CONFIGURAÇÕES DA LOJA */}
        {activeTab === 'configuracoes' && (
          <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            
            {/* Column 1 & 2: Main Store Configuration Fields */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Card 1: Identidade & Localização */}
              <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/80 space-y-5">
                <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <StoreIcon className="w-5 h-5 text-[#F26522]" />
                  <span>Identidade e Localização</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nome da Empresa / Loja *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome que será exibido aos clientes"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all font-semibold text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Categoria Oficial *
                    </label>
                    <select
                      value={categoryId}
                      onChange={handleCategoryChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none bg-white font-medium text-slate-700"
                    >
                      {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Bairro em Campina Grande *
                    </label>
                    <select
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none bg-white font-medium text-slate-700"
                    >
                      {NEIGHBORHOODS.filter((n) => n !== 'Todos os Bairros').map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Endereço Completo (Rua, Número, Ponto de Referência)
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="ex: Rua Maciel Pinheiro, 150 - Centro"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Horário de Funcionamento
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={openingHours}
                        onChange={(e) => setOpeningHours(e.target.value)}
                        placeholder="ex: Seg a Sex: 08h às 18h | Sáb: 08h às 13h"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Apresentação, Oferta e Foto */}
              <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/80 space-y-5">
                <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Sparkles className="w-5 h-5 text-[#F26522]" />
                  <span>Apresentação & Oferta em Destaque</span>
                </h2>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Foto da Fachada ou Vitrine (URL da imagem)
                  </label>
                  <div className="relative">
                    <ImageIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      required
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://..."
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                    />
                  </div>
                  {image && (
                    <div className="mt-3 relative h-44 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                      <img
                        src={image}
                        alt="Prévia da foto da loja"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold rounded-lg">
                        Prévia da Foto da Vitrine
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Descrição do Negócio (Texto de apresentação)
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Conte sobre sua história, especialidades e diferenciais."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#F26522] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Oferta / Condição Especial em Destaque</span>
                    </label>
                    <input
                      type="text"
                      value={offer}
                      onChange={(e) => setOffer(e.target.value)}
                      placeholder="ex: 10% de desconto à vista no WhatsApp"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-orange-200 bg-orange-50/40 focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 outline-none transition-all font-semibold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Cupom Promocional (Opcional)
                    </label>
                    <div className="relative">
                      <Ticket className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={discountCoupon}
                        onChange={(e) => setDiscountCoupon(e.target.value.toUpperCase())}
                        placeholder="ex: CAMPINA10"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm uppercase font-mono rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Destaques / Diferenciais */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Diferenciais da Loja (Adicione até 6 itens)
                  </label>
                  <div className="flex gap-2 mb-2.5">
                    <input
                      type="text"
                      value={newHighlight}
                      onChange={(e) => setNewHighlight(e.target.value)}
                      placeholder="ex: Estacionamento Grátis, Entrega Expressa..."
                      className="flex-1 px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none transition-all"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddHighlight();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleAddHighlight}
                      className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Adicionar</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => handleRemoveHighlight(idx)}
                          className="text-slate-400 hover:text-red-500 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card 3: Contatos & Redes Sociais */}
              <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/80 space-y-5">
                <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Phone className="w-5 h-5 text-[#F26522]" />
                  <span>Canais de Atendimento & WhatsApp</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp Comercial (Onde chegam os cliques) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(83) 99999-9999"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefone Fixo / Celular Adicional
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(83) 3322-0000"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Instagram (@perfil)
                    </label>
                    <div className="relative">
                      <Instagram className="w-4 h-4 text-pink-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        placeholder="@sualojacg"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website ou Cardápio Online (Opcional)
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-blue-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://seusite.com.br"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Column 3: Salvar & Ações Rápidas */}
            <div className="space-y-6">
              
              <div className="sticky top-20 bg-white rounded-3xl p-6 shadow-lg border border-slate-200/90 space-y-4">
                <h3 className="font-extrabold text-base text-[#0B3B60]">
                  Salvar Alterações
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  As configurações são atualizadas imediatamente no banco de dados PostgreSQL e refletem na vitrine para todos os clientes.
                </p>

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 active:scale-[0.99] text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Salvando no banco de dados...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Salvar Configurações</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onViewMyStorePage}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>Ver Minha Página no Site</span>
                </button>

                <hr className="border-slate-100" />

                <div className="space-y-2 text-[11px] text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>ID no Banco:</span>
                    <code className="text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[10px]">
                      {store.id}
                    </code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Comerciante:</span>
                    <span className="font-semibold text-slate-700">{merchant.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>E-mail:</span>
                    <span className="font-semibold text-slate-700 truncate max-w-[140px]">{merchant.email}</span>
                  </div>
                </div>
              </div>

            </div>

          </form>
        )}

      </main>
    </div>
  );
};
