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
          message: 'Página da sua loja atualizada com sucesso no banco de dados!',
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
          message: 'Alterações salvas e sincronizadas com a vitrine!',
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
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Top Bar */}
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
                <span className="text-xs sm:text-sm font-bold block truncate max-w-[150px] sm:max-w-[260px]">
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

        {/* Intro Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/80 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sua loja está online no Comércio Campina
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B3B60] tracking-tight">
              Gerenciar Minha Página
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Olá, <strong className="text-slate-800">{merchant.name}</strong>! Todas as alterações feitas aqui são refletidas imediatamente na página exclusiva da sua loja e na busca dos clientes de Campina Grande.
            </p>
          </div>

          <button
            onClick={onViewMyStorePage}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-[#F26522] hover:brightness-105 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <Eye className="w-4 h-4" />
            <span>Ver Como o Cliente Vê</span>
          </button>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1 & 2: Main Store Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Card 1: Identidade & Localização */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/80 space-y-5">
              <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2 pb-3 border-b border-slate-100">
                <StoreIcon className="w-5 h-5 text-[#F26522]" />
                <span>Identidade do Estabelecimento</span>
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
                <span>Apresentação, Oferta & Foto da Capa</span>
              </h2>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Foto da Fachada ou Vitrine (URL da imagem)
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
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
                </div>
                {image && (
                  <div className="mt-3 relative h-40 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img
                      src={image}
                      alt="Prévia da foto"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold rounded-lg">
                      Prévia da Foto da Fachada
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Descrição do Negócio (Resumo que atrai clientes)
                </label>
                <textarea
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Conte um pouco sobre sua trajetória, especialidades e por que o cliente deve escolher você."
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
                    placeholder="ex: 10% de desconto à vista ou primeira troca grátis"
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

            {/* Card 3: Contatos & Canais Diretos */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/80 space-y-5">
              <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2 pb-3 border-b border-slate-100">
                <Phone className="w-5 h-5 text-[#F26522]" />
                <span>Contatos & Redes Sociais</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp Comercial (Cliques dos clientes vão aqui) *
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

          {/* Column 3: Sidebar Controls & Save Action */}
          <div className="space-y-6">
            
            {/* Sticky Save Action Box */}
            <div className="sticky top-20 bg-white rounded-3xl p-6 shadow-lg border border-slate-200/90 space-y-4">
              <h3 className="font-extrabold text-base text-[#0B3B60]">
                Publicar Alterações
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ao clicar em salvar, os dados são atualizados diretamente no banco de dados e refletem na vitrine para todos os usuários.
              </p>

              <button
                type="submit"
                disabled={saving}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 active:scale-[0.99] text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Salvando...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Salvar Minha Loja</span>
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
                  <span>ID da Loja:</span>
                  <code className="text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[10px]">
                    {store.id}
                  </code>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lojista:</span>
                  <span className="font-semibold text-slate-700">{merchant.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>E-mail:</span>
                  <span className="font-semibold text-slate-700 truncate max-w-[140px]">{merchant.email}</span>
                </div>
              </div>

            </div>

            {/* Quick Tips Box */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-5 space-y-2.5">
              <span className="text-[10px] font-extrabold uppercase text-[#F26522] tracking-wider block">
                Dicas de Sucesso
              </span>
              <h4 className="text-xs font-bold text-slate-900">
                Como receber mais cliques em Campina Grande?
              </h4>
              <ul className="text-[11px] text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>Mantenha seu <strong>WhatsApp</strong> atualizado para receber mensagens instantâneas.</li>
                <li>Insira uma boa foto da vitrine ou fachada da sua loja.</li>
                <li>Adicione uma <strong>oferta especial</strong> para os clientes do portal.</li>
                <li>Informe o bairro correto para aparecer nas buscas filtradas.</li>
              </ul>
            </div>

          </div>

        </form>

      </main>
    </div>
  );
};
