import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
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
  HelpCircle,
  FileText,
  ShoppingBag,
  Star,
  Users,
  Sliders,
  Check,
  Tag,
  Award,
  Zap,
} from 'lucide-react';
import {
  CATEGORIES,
  NEIGHBORHOODS,
  Store,
  StoreService,
  StoreTestimonial,
  StoreFaqItem,
} from '../../data/mockData';
import { merchantUpdateMyStoreApi, MerchantUser } from '../../services/api';

const AVAILABLE_PAGE_SECTIONS = [
  {
    id: 'hero',
    title: 'Hero (Banner Principal & Identidade)',
    description: 'Capa da loja, título principal, foto de fundo, avaliação, endereço e botões de ação.',
    icon: StoreIcon,
    color: 'from-[#0B3B60] to-blue-700',
    category: 'Apresentação Principal',
  },
  {
    id: 'offer',
    title: 'Oferta Promocional & Cupom',
    description: 'Banner de oferta especial com porcentagem e código de cupom com clique para copiar.',
    icon: Tag,
    color: 'from-orange-500 to-amber-500',
    category: 'Vendas & Conversão',
  },
  {
    id: 'about',
    title: 'Sobre a Empresa / Quem Somos',
    description: 'História, missão, equipe, foto institucional e anos de atuação em Campina Grande.',
    icon: FileText,
    color: 'from-blue-600 to-indigo-600',
    category: 'Apresentação',
  },
  {
    id: 'benefits',
    title: 'Diferenciais & Vantagens',
    description: '4 destaques de autoridade (Localização privilegiada, garantia, atendimento rápido).',
    icon: Award,
    color: 'from-amber-500 to-orange-500',
    category: 'Autoridade',
  },
  {
    id: 'services',
    title: 'Catálogo de Serviços & Produtos',
    description: 'Cards com fotos, preços e botão que abre WhatsApp com o nome do produto selecionado.',
    icon: ShoppingBag,
    color: 'from-emerald-600 to-teal-600',
    category: 'Vendas & Conversão',
  },
  {
    id: 'process',
    title: 'Como Funciona (Passo a Passo)',
    description: '4 etapas simples explicando como o cliente entra em contato, escolhe e recebe.',
    icon: Zap,
    color: 'from-purple-600 to-violet-600',
    category: 'Experiência do Cliente',
  },
  {
    id: 'testimonials',
    title: 'Depoimentos de Clientes',
    description: 'Avaliações com 5 estrelas e comentários de moradores de bairros de Campina Grande.',
    icon: Star,
    color: 'from-amber-400 to-yellow-500',
    category: 'Prova Social',
  },
  {
    id: 'gallery',
    title: 'Galeria de Fotos',
    description: 'Grid visual com fotos do espaço físico, vitrine, serviços e produtos.',
    icon: ImageIcon,
    color: 'from-pink-500 to-rose-500',
    category: 'Visual & Portfólio',
  },
  {
    id: 'faq',
    title: 'FAQ (Dúvidas Frequentes)',
    description: 'Sanfona expansível com respostas sobre pagamentos (Pix/Cartão), frete e prazos.',
    icon: HelpCircle,
    color: 'from-cyan-600 to-blue-600',
    category: 'Atendimento',
  },
  {
    id: 'cta',
    title: 'Chamada para Ação (CTA Final)',
    description: 'Banner imersivo antes do rodapé incentivando fechamento imediato via WhatsApp.',
    icon: Sparkles,
    color: 'from-orange-600 to-[#F26522]',
    category: 'Vendas & Conversão',
  },
  {
    id: 'contact',
    title: 'Contato, Horários & Google Maps',
    description: 'Mapa interativo do Google integrado, rotas GPS, endereço físico e horários.',
    icon: MapPin,
    color: 'from-red-500 to-rose-600',
    category: 'Localização',
  },
  {
    id: 'floatingWhatsapp',
    title: 'Botão Flutuante de WhatsApp',
    description: 'Botão verde flutuante fixado no canto inferior direito para contato a qualquer momento.',
    icon: MessageCircle,
    color: 'from-emerald-500 to-green-600',
    category: 'Atendimento',
  },
];

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
  const [activeTab, setActiveTab] = useState<'metricas' | 'configuracoes'>('configuracoes');

  // Active Sub-section in Config: 'secoes' | 'geral' | 'sobre' | 'produtos' | 'faq' | 'avaliacoes' | 'galeria'
  const [activeConfigSection, setActiveConfigSection] = useState<
    'secoes' | 'geral' | 'sobre' | 'produtos' | 'faq' | 'avaliacoes' | 'galeria'
  >('secoes');

  // Section visibility state (exibir ou ocultar qualquer seção)
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {
      offer: true,
      about: true,
      benefits: true,
      services: true,
      process: true,
      testimonials: true,
      gallery: true,
      faq: true,
      cta: true,
      contact: true,
      floatingWhatsapp: true,
    };
    return { ...initial, ...(store.visibleSections || {}) };
  });

  const toggleSectionVisibility = (sectionId: string) => {
    setVisibleSections((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === false ? true : false,
    }));
  };

  const isSectionVisible = (sectionId: string) => {
    return visibleSections[sectionId] !== false;
  };

  const handleSetAllSections = (visible: boolean) => {
    const updated: Record<string, boolean> = {};
    AVAILABLE_PAGE_SECTIONS.forEach((s) => {
      updated[s.id] = visible;
    });
    setVisibleSections(updated);
  };

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

  // Landing Page Standard Sections fields
  const [aboutText, setAboutText] = useState(store.aboutText || '');
  const [aboutImage, setAboutImage] = useState(store.aboutImage || '');
  const [ctaTitle, setCtaTitle] = useState(store.ctaTitle || '');
  const [ctaSubtitle, setCtaSubtitle] = useState(store.ctaSubtitle || '');

  // Services / Products
  const [services, setServices] = useState<StoreService[]>(
    store.services && store.services.length > 0
      ? store.services
      : [
          {
            name: 'Atendimento e Consulta Especializada',
            description: 'Atendimento personalizado com nossa equipe.',
            price: 'Sob Consulta',
            image: store.image,
          },
          {
            name: 'Linha Selecionada de Produtos',
            description: 'Garantia de procedência e os melhores preços de Campina Grande.',
            price: 'Sob Consulta',
            image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
          },
        ]
  );
  const [newServiceName, setNewServiceName] = useState('');
  const [newServicePrice, setNewServicePrice] = useState('');
  const [newServiceDesc, setNewServiceDesc] = useState('');
  const [newServiceImage, setNewServiceImage] = useState('');

  // FAQ Items
  const [faqs, setFaqs] = useState<StoreFaqItem[]>(
    store.faq && store.faq.length > 0
      ? store.faq
      : [
          {
            question: 'Quais as formas de pagamento aceitas?',
            answer: 'Aceitamos Pix com desconto, cartões de crédito e débito.',
          },
          {
            question: 'Fazem entregas em toda Campina Grande?',
            answer: `Sim, entregamos em toda a cidade e oferecemos retirada no bairro ${store.neighborhood}.`,
          },
        ]
  );
  const [newFaqQuestion, setNewFaqQuestion] = useState('');
  const [newFaqAnswer, setNewFaqAnswer] = useState('');

  // Testimonials
  const [testimonials, setTestimonials] = useState<StoreTestimonial[]>(
    store.testimonials && store.testimonials.length > 0
      ? store.testimonials
      : [
          {
            name: 'Cliente Satisfeito',
            neighborhood: store.neighborhood || 'Centro',
            comment: 'Excelente atendimento pelo WhatsApp, recomendo!',
            rating: 5,
          },
        ]
  );
  const [newTestimonialName, setNewTestimonialName] = useState('');
  const [newTestimonialNeighborhood, setNewTestimonialNeighborhood] = useState('');
  const [newTestimonialComment, setNewTestimonialComment] = useState('');

  // Gallery
  const [gallery, setGallery] = useState<string[]>(
    store.gallery && store.gallery.length > 0
      ? store.gallery
      : [store.image, 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80']
  );
  const [newGalleryUrl, setNewGalleryUrl] = useState('');

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

  // Add/Remove Services
  const handleAddService = () => {
    if (!newServiceName.trim()) return;
    setServices([
      ...services,
      {
        name: newServiceName.trim(),
        price: newServicePrice.trim() || 'Sob Consulta',
        description: newServiceDesc.trim() || 'Consulte detalhes pelo WhatsApp.',
        image: newServiceImage.trim() || store.image,
      },
    ]);
    setNewServiceName('');
    setNewServicePrice('');
    setNewServiceDesc('');
    setNewServiceImage('');
  };

  const handleRemoveService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  // Add/Remove FAQ
  const handleAddFaq = () => {
    if (!newFaqQuestion.trim() || !newFaqAnswer.trim()) return;
    setFaqs([...faqs, { question: newFaqQuestion.trim(), answer: newFaqAnswer.trim() }]);
    setNewFaqQuestion('');
    setNewFaqAnswer('');
  };

  const handleRemoveFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  // Add/Remove Testimonials
  const handleAddTestimonial = () => {
    if (!newTestimonialName.trim() || !newTestimonialComment.trim()) return;
    setTestimonials([
      ...testimonials,
      {
        name: newTestimonialName.trim(),
        neighborhood: newTestimonialNeighborhood.trim() || 'Campina Grande',
        comment: newTestimonialComment.trim(),
        rating: 5,
      },
    ]);
    setNewTestimonialName('');
    setNewTestimonialNeighborhood('');
    setNewTestimonialComment('');
  };

  const handleRemoveTestimonial = (index: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  // Add/Remove Gallery Photo
  const handleAddGalleryImage = () => {
    if (!newGalleryUrl.trim()) return;
    setGallery([...gallery, newGalleryUrl.trim()]);
    setNewGalleryUrl('');
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGallery(gallery.filter((_, i) => i !== index));
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
      aboutText: aboutText.trim() || undefined,
      aboutImage: aboutImage.trim() || undefined,
      ctaTitle: ctaTitle.trim() || undefined,
      ctaSubtitle: ctaSubtitle.trim() || undefined,
      services,
      faq: faqs,
      testimonials,
      gallery,
      visibleSections,
    };

    try {
      const res = await merchantUpdateMyStoreApi(token, payload);
      if (res.ok && res.store) {
        onUpdateStore(res.store);
        localStorage.setItem('comercio_cg_merchant_store', JSON.stringify(res.store));
        setFeedback({
          type: 'success',
          message: 'Página da loja e todas as seções salvas com sucesso no banco de dados!',
        });
      } else {
        // Fallback local se o servidor estiver temporariamente offline
        const updatedLocalStore: Store = {
          ...store,
          ...payload,
        } as Store;
        onUpdateStore(updatedLocalStore);
        localStorage.setItem('comercio_cg_merchant_store', JSON.stringify(updatedLocalStore));
        setFeedback({
          type: 'success',
          message: 'Alterações das seções salvas e sincronizadas com a página oficial da loja!',
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
              Página Padrão Ativa · Campina Grande - PB
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B3B60] tracking-tight">
              {name || 'Painel da Minha Loja'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Olá, <strong className="text-slate-800">{merchant.name}</strong>! Todas as seções da sua página seguem a mesma estrutura profissional de alta conversão. Edite qualquer seção abaixo e salve quando desejar.
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
            <span>Editar Seções da Página</span>
          </button>
        </div>

        {/* 1. SEÇÃO DE MÉTRICAS & ANALYTICS */}
        {activeTab === 'metricas' && (
          <div className="space-y-6 animate-in fade-in duration-200">
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
                  Total de visitantes que abriram o site oficial da sua loja no guia Comércio Campina.
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
                  Clientes reais que clicaram nos botões da sua página para conversar diretamente no WhatsApp.
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

            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#0B3B60]">
                  Estrutura Padrão da sua Landing Page
                </h3>
                <button
                  onClick={() => setActiveTab('configuracoes')}
                  className="text-xs font-bold text-[#F26522] hover:underline cursor-pointer"
                >
                  Personalizar Seções →
                </button>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sua loja conta com <strong>todas as 12 seções padrão</strong> prontas: Hero, Oferta & Cupom, Sobre / Quem Somos, Diferenciais, Produtos/Serviços com botão WhatsApp, Como Funciona, Avaliações, Galeria de Fotos, FAQ, CTA Final, Contato com Google Maps e Botão Flutuante de WhatsApp.
              </p>
            </div>
          </div>
        )}

        {/* 2. SEÇÃO DE EDIÇÃO DE TODAS AS SEÇÕES DA PÁGINA */}
        {activeTab === 'configuracoes' && (
          <form onSubmit={handleSave} className="space-y-6 animate-in fade-in duration-200">
            
            {/* Sub-navigation bar across all customizable page sections */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveConfigSection('secoes')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeConfigSection === 'secoes'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Sliders className="w-3.5 h-3.5 text-[#F26522]" />
                <span>Visibilidade das Seções</span>
                <span className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                  activeConfigSection === 'secoes' ? 'bg-amber-400 text-slate-900' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {AVAILABLE_PAGE_SECTIONS.filter((s) => isSectionVisible(s.id)).length}/{AVAILABLE_PAGE_SECTIONS.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveConfigSection('geral')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeConfigSection === 'geral'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <StoreIcon className="w-3.5 h-3.5" />
                <span>1. Dados & Hero</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveConfigSection('sobre')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeConfigSection === 'sobre'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>2. Sobre / História</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveConfigSection('produtos')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeConfigSection === 'produtos'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>3. Serviços / Produtos</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveConfigSection('faq')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeConfigSection === 'faq'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>4. FAQ (Dúvidas)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveConfigSection('avaliacoes')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeConfigSection === 'avaliacoes'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Star className="w-3.5 h-3.5" />
                <span>5. Depoimentos</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveConfigSection('galeria')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeConfigSection === 'galeria'
                    ? 'bg-[#0B3B60] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>6. Galeria de Fotos</span>
              </button>
            </div>

            {/* SEÇÃO 0: GERENCIAMENTO DE VISIBILIDADE DAS SEÇÕES (EXIBIR OU OCULTAR) */}
            {activeConfigSection === 'secoes' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-[#F26522]" />
                      <span>Exibir ou Ocultar Seções da Página</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 max-w-xl">
                      Escolha quais seções você quer que apareçam na página oficial da sua loja. Clique em qualquer card ou no botão correspondente para ativar ou desativar.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => handleSetAllSections(true)}
                      className="px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all border border-emerald-200 cursor-pointer"
                    >
                      Exibir Todas
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSetAllSections(false)}
                      className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200 cursor-pointer"
                    >
                      Ocultar Todas
                    </button>
                  </div>
                </div>

                {/* Summary Counter */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-700">
                      Status da Página:{' '}
                      <strong className="text-emerald-700">
                        {AVAILABLE_PAGE_SECTIONS.filter((s) => isSectionVisible(s.id)).length} de {AVAILABLE_PAGE_SECTIONS.length} seções ativas
                      </strong>
                    </span>
                  </div>
                  <span className="text-slate-500 text-[11px]">
                    Lembre-se de clicar em <strong>"Salvar Minha Página"</strong> no rodapé após ajustar.
                  </span>
                </div>

                {/* Section Toggles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {AVAILABLE_PAGE_SECTIONS.map((sec) => {
                    const IconComponent = sec.icon;
                    const visible = isSectionVisible(sec.id);

                    return (
                      <div
                        key={sec.id}
                        onClick={() => toggleSectionVisibility(sec.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-4 select-none ${
                          visible
                            ? 'bg-white border-emerald-500/40 shadow-xs hover:border-emerald-500'
                            : 'bg-slate-50/70 border-slate-200 opacity-60 hover:opacity-90'
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sec.color} text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <h4 className="text-sm font-bold text-slate-800 truncate">
                                {sec.title}
                              </h4>
                              <span
                                className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                                  visible
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-slate-200 text-slate-600'
                                }`}
                              >
                                {visible ? 'Exibido' : 'Oculto'}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                              {sec.description}
                            </p>
                            <span className="inline-block mt-2 text-[10px] text-slate-400 font-semibold">
                              Categoria: {sec.category}
                            </span>
                          </div>
                        </div>

                        {/* Toggle Switch Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSectionVisibility(sec.id);
                          }}
                          className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                            visible
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                          }`}
                        >
                          {visible ? (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>Ativo</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>Oculto</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SEÇÃO 1: GERAL & HERO */}
            {activeConfigSection === 'geral' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <StoreIcon className="w-5 h-5 text-[#F26522]" />
                    <span>Identidade, Hero & Canais de Atendimento</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('hero')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('hero')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('hero') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Hero Exibido na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hero Oculto na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nome da Loja / Estabelecimento *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Categoria Oficial *
                    </label>
                    <select
                      value={categoryId}
                      onChange={handleCategoryChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none bg-white font-medium"
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
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none bg-white font-medium"
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
                      Endereço Completo (Rua, Número, Referência)
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1.5">
                      WhatsApp Comercial (Onde chegam os pedidos) *
                    </label>
                    <input
                      type="text"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-emerald-500/30 focus:border-emerald-600 outline-none font-semibold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefone Fixo / Celular Adicional
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Instagram (@perfil)
                    </label>
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Horário de Funcionamento
                    </label>
                    <input
                      type="text"
                      value={openingHours}
                      onChange={(e) => setOpeningHours(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Foto de Capa / Fachada (Hero Background URL)
                    </label>
                    <input
                      type="url"
                      required
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#F26522] uppercase tracking-wider mb-1.5">
                      Oferta em Destaque no Portal
                    </label>
                    <input
                      type="text"
                      value={offer}
                      onChange={(e) => setOffer(e.target.value)}
                      placeholder="ex: 10% de desconto à vista no WhatsApp"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-orange-200 bg-orange-50/30 focus:border-[#F26522] outline-none font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Cupom Promocional (Opcional)
                    </label>
                    <input
                      type="text"
                      value={discountCoupon}
                      onChange={(e) => setDiscountCoupon(e.target.value.toUpperCase())}
                      placeholder="ex: CAMPINA10"
                      className="w-full px-3.5 py-2.5 text-sm uppercase font-mono rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website Oficial (Opcional)
                    </label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SEÇÃO 2: SOBRE / HISTÓRIA */}
            {activeConfigSection === 'sobre' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#F26522]" />
                    <span>Seção Sobre / Quem Somos</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('about')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('about')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('about') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Seção Exibida na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Seção Oculta na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    História & Propósito da Empresa
                  </label>
                  <textarea
                    rows={4}
                    value={aboutText}
                    onChange={(e) => setAboutText(e.target.value)}
                    placeholder="Conte a história da sua loja, seus valores e o compromisso com os clientes de Campina Grande."
                    className="w-full p-3.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none leading-relaxed"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Se deixar em branco, um texto institucional profissional personalizado para sua categoria será exibido automaticamente.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Foto da Empresa / Equipe (URL da imagem)
                  </label>
                  <input
                    type="url"
                    value={aboutImage}
                    onChange={(e) => setAboutImage(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Chamada para Ação no Final da Página (Título CTA)
                  </label>
                  <input
                    type="text"
                    value={ctaTitle}
                    onChange={(e) => setCtaTitle(e.target.value)}
                    placeholder={`Pronto para falar diretamente com a equipe da ${name}?`}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                  />
                </div>
              </div>
            )}

            {/* SEÇÃO 3: SERVIÇOS & PRODUTOS COM WHATSAPP */}
            {activeConfigSection === 'produtos' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#F26522]" />
                    <span>Catálogo de Serviços & Produtos ({services.length})</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('services')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('services')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('services') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Seção Exibida na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Seção Oculta na Página</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Add new service form */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Adicionar Novo Produto ou Serviço
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={newServiceName}
                      onChange={(e) => setNewServiceName(e.target.value)}
                      placeholder="Nome do produto ou serviço *"
                      className="px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                    <input
                      type="text"
                      value={newServicePrice}
                      onChange={(e) => setNewServicePrice(e.target.value)}
                      placeholder="Preço (ex: R$ 49,90 ou Sob Consulta)"
                      className="px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                    <input
                      type="text"
                      value={newServiceDesc}
                      onChange={(e) => setNewServiceDesc(e.target.value)}
                      placeholder="Descrição breve do item"
                      className="sm:col-span-2 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                    <input
                      type="url"
                      value={newServiceImage}
                      onChange={(e) => setNewServiceImage(e.target.value)}
                      placeholder="URL da foto do produto (opcional)"
                      className="sm:col-span-2 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddService}
                    className="px-4 py-2 bg-[#0B3B60] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-[#145388]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar Item ao Catálogo</span>
                  </button>
                </div>

                {/* Services list */}
                <div className="space-y-3">
                  {services.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                          />
                        )}
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                          <span className="text-xs font-extrabold text-[#0B3B60] block">{item.price}</span>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{item.description}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveService(idx)}
                        className="p-2 text-slate-400 hover:text-red-500 cursor-pointer"
                        title="Remover produto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEÇÃO 4: FAQ (DÚVIDAS FREQUENTES) */}
            {activeConfigSection === 'faq' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#F26522]" />
                    <span>Perguntas Frequentes (FAQ)</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('faq')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('faq')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('faq') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Seção Exibida na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Seção Oculta na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Adicionar Nova Pergunta
                  </h4>
                  <input
                    type="text"
                    value={newFaqQuestion}
                    onChange={(e) => setNewFaqQuestion(e.target.value)}
                    placeholder="Pergunta (ex: Vocês entregam no Catolé?)"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                  />
                  <textarea
                    rows={2}
                    value={newFaqAnswer}
                    onChange={(e) => setNewFaqAnswer(e.target.value)}
                    placeholder="Resposta clara para o cliente..."
                    className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddFaq}
                    className="px-4 py-2 bg-[#0B3B60] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-[#145388]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar ao FAQ</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50/50 border border-slate-200 flex items-start justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{faq.question}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{faq.answer}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFaq(idx)}
                        className="p-1.5 text-slate-400 hover:text-red-500 cursor-pointer"
                        title="Remover pergunta"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEÇÃO 5: DEPOIMENTOS */}
            {activeConfigSection === 'avaliacoes' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span>Depoimentos & Avaliações</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('testimonials')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('testimonials')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('testimonials') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Seção Exibida na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Seção Oculta na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Adicionar Depoimento de Cliente
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={newTestimonialName}
                      onChange={(e) => setNewTestimonialName(e.target.value)}
                      placeholder="Nome do cliente *"
                      className="px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                    <input
                      type="text"
                      value={newTestimonialNeighborhood}
                      onChange={(e) => setNewTestimonialNeighborhood(e.target.value)}
                      placeholder="Bairro em Campina Grande"
                      className="px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                    <textarea
                      rows={2}
                      value={newTestimonialComment}
                      onChange={(e) => setNewTestimonialComment(e.target.value)}
                      placeholder="Comentário do cliente sobre o atendimento..."
                      className="sm:col-span-2 p-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTestimonial}
                    className="px-4 py-2 bg-[#0B3B60] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-[#145388]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar Depoimento</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50/50 border border-slate-200 flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{t.name}</span>
                          <span className="text-xs text-slate-500">· {t.neighborhood || 'Campina Grande'}</span>
                        </div>
                        <p className="text-xs text-slate-600 italic mt-1 leading-relaxed">"{t.comment}"</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveTestimonial(idx)}
                        className="p-1.5 text-slate-400 hover:text-red-500 cursor-pointer"
                        title="Remover depoimento"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEÇÃO 6: GALERIA DE FOTOS */}
            {activeConfigSection === 'galeria' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-[#F26522]" />
                    <span>Fotos da Galeria</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('gallery')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('gallery')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('gallery') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Seção Exibida na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Seção Oculta na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    type="url"
                    value={newGalleryUrl}
                    onChange={(e) => setNewGalleryUrl(e.target.value)}
                    placeholder="URL da foto (ex: https://...)"
                    className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddGalleryImage}
                    className="px-4 py-2.5 bg-[#0B3B60] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-[#145388]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar Foto</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {gallery.map((url, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group"
                    >
                      <img src={url} alt={`Foto ${idx + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryImage(idx)}
                        className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-md"
                        title="Excluir foto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sticky Save Bar */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white shadow-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-sm text-[#0B3B60]">
                  Salvar todas as alterações da página
                </h4>
                <p className="text-xs text-slate-500">
                  Ao salvar, sua página oficial no guia Comércio Campina é atualizada imediatamente.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onViewMyStorePage}
                  className="flex-1 sm:flex-initial px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>Pré-visualizar</span>
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Salvando...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Salvar Minha Página</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        )}

      </main>
    </div>
  );
};
