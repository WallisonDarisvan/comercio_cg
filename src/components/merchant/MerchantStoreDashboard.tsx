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
  UploadCloud,
} from 'lucide-react';
import {
  CATEGORIES,
  NEIGHBORHOODS,
  Store,
  StoreService,
  StoreTestimonial,
  StoreFaqItem,
  StoreProcessStep,
} from '../../data/mockData';
import { merchantUpdateMyStoreApi, MerchantUser } from '../../services/api';
import { ImageUpload } from '../ImageUpload';
import { processImageToWebP } from '../../utils/imageOptimizer';

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

export type ConfigSectionTab =
  | 'secoes'
  | 'hero'
  | 'offer'
  | 'about'
  | 'benefits'
  | 'services'
  | 'process'
  | 'testimonials'
  | 'gallery'
  | 'faq'
  | 'cta'
  | 'contact'
  | 'floatingWhatsapp';

export const CONFIG_TABS = [
  { id: 'secoes' as const, label: 'Visibilidade das Seções', isControl: true, icon: Sliders },
  { id: 'hero' as const, label: '1. Hero', icon: StoreIcon },
  { id: 'offer' as const, label: '2. Oferta & Cupom', icon: Tag },
  { id: 'about' as const, label: '3. Sobre / Quem Somos', icon: FileText },
  { id: 'benefits' as const, label: '4. Diferenciais', icon: Award },
  { id: 'services' as const, label: '5. Serviços & Produtos', icon: ShoppingBag },
  { id: 'process' as const, label: '6. Como Funciona', icon: Zap },
  { id: 'testimonials' as const, label: '7. Depoimentos', icon: Star },
  { id: 'gallery' as const, label: '8. Galeria de Fotos', icon: ImageIcon },
  { id: 'faq' as const, label: '9. FAQ (Dúvidas)', icon: HelpCircle },
  { id: 'cta' as const, label: '10. CTA Final', icon: Sparkles },
  { id: 'contact' as const, label: '11. Contato & Maps', icon: MapPin },
  { id: 'floatingWhatsapp' as const, label: '12. WhatsApp Flutuante', icon: MessageCircle },
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

  // Active Sub-section in Config: 12 seções individuais + painel de visibilidade
  const [activeConfigSection, setActiveConfigSection] = useState<ConfigSectionTab>('secoes');

  // Section visibility state (exibir ou ocultar qualquer seção)
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {
      hero: true,
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
  const [uploadingGallery, setUploadingGallery] = useState(false);

  // Process Steps (Como Funciona)
  const defaultProcessSteps: StoreProcessStep[] = [
    {
      step: 1,
      title: '1. Atendimento no WhatsApp',
      description: 'Clique em qualquer botão da página e inicie a conversa direta com nossa equipe.',
    },
    {
      step: 2,
      title: '2. Consultoria e Orçamento',
      description: 'Apresentamos opções de produtos e valores exclusivos de Campina Grande.',
    },
    {
      step: 3,
      title: '3. Pagamento Facilitado',
      description: 'Pague com segurança via Pix com desconto ou parcele nos principais cartões.',
    },
    {
      step: 4,
      title: '4. Entrega Rápida ou Retirada',
      description: `Receba seus itens no seu bairro ou retire direto no ${store.neighborhood || 'Centro'}.`,
    },
  ];

  const [processSteps, setProcessSteps] = useState<StoreProcessStep[]>(
    store.processSteps && store.processSteps.length > 0 ? store.processSteps : defaultProcessSteps
  );

  const handleUpdateProcessStep = (index: number, field: 'title' | 'description', value: string) => {
    setProcessSteps((prev) =>
      prev.map((step, i) => (i === index ? { ...step, [field]: value } : step))
    );
  };

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
  const handleGalleryFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploadingGallery(true);
    try {
      const newUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          const result = await processImageToWebP(file, { maxSizeKb: 150 });
          newUrls.push(result.dataUrl);
        }
      }
      if (newUrls.length > 0) {
        setGallery((prev) => [...prev, ...newUrls]);
      }
    } catch (err: any) {
      console.error('Erro ao converter fotos para WebP:', err);
      alert('Erro ao converter imagem: ' + (err.message || 'Tente novamente.'));
    } finally {
      setUploadingGallery(false);
    }
  };

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
      processSteps,
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
            
            {/* Sub-navigation bar across all 12 customizable page sections + Visibilidade */}
            <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-200">
              {CONFIG_TABS.map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeConfigSection === tab.id;
                const isSectionOn = tab.isControl || isSectionVisible(tab.id);

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveConfigSection(tab.id as ConfigSectionTab)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                      isActive
                        ? 'bg-[#0B3B60] text-white shadow-xs scale-102 ring-2 ring-[#0B3B60]/20'
                        : isSectionOn
                        ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200/80 border border-dashed border-slate-300'
                    }`}
                  >
                    <IconComp
                      className={`w-3.5 h-3.5 ${
                        isActive ? 'text-amber-400' : isSectionOn ? 'text-[#F26522]' : 'text-slate-400'
                      }`}
                    />
                    <span>{tab.label}</span>

                    {tab.isControl ? (
                      <span
                        className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                          isActive ? 'bg-amber-400 text-slate-900' : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {AVAILABLE_PAGE_SECTIONS.filter((s) => isSectionVisible(s.id)).length}/
                        {AVAILABLE_PAGE_SECTIONS.length}
                      </span>
                    ) : (
                      <span
                        className={`w-2 h-2 rounded-full ${isSectionOn ? 'bg-emerald-500' : 'bg-slate-300'}`}
                        title={isSectionOn ? 'Seção ativa na página' : 'Seção oculta na página'}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* SEÇÃO 0: GERENCIAMENTO DE VISIBILIDADE DAS 12 SEÇÕES (EXIBIR OU OCULTAR) */}
            {activeConfigSection === 'secoes' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-[#F26522]" />
                      <span>Exibir ou Ocultar as 12 Seções da Página</span>
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
                      Exibir Todas (12)
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
                  {AVAILABLE_PAGE_SECTIONS.map((sec, idx) => {
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
                              <span className="text-xs font-black text-slate-400">#{idx + 1}</span>
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

            {/* SEÇÃO 1: HERO (BANNER PRINCIPAL & IDENTIDADE) */}
            {activeConfigSection === 'hero' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <StoreIcon className="w-5 h-5 text-[#F26522]" />
                    <span>1. Hero Section (Capa Principal & Identidade)</span>
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
                      Bairro Principal em Campina Grande *
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
                      Frase de Apresentação / Slogan da Capa *
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Breve frase convidativa que aparece em destaque na capa da sua loja."
                      className="w-full p-3.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none leading-relaxed"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <ImageUpload
                      value={image}
                      onChange={setImage}
                      label="Foto de Capa / Fachada da Loja (Hero Background) *"
                      helperText="Esta é a imagem de capa principal da sua página. A foto é convertida para WebP de até 150 KB e salva no banco de dados."
                      aspectRatio="banner"
                      maxSizeKb={150}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SEÇÃO 2: OFERTA & CUPOM */}
            {activeConfigSection === 'offer' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <Tag className="w-5 h-5 text-[#F26522]" />
                    <span>2. Oferta Promocional & Cupom de Desconto</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('offer')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('offer')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('offer') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Oferta Exibida na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Oferta Oculta na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#F26522] uppercase tracking-wider mb-1.5">
                      Frase da Oferta em Destaque *
                    </label>
                    <input
                      type="text"
                      value={offer}
                      onChange={(e) => setOffer(e.target.value)}
                      placeholder="ex: 10% de desconto à vista no Pix para clientes do portal"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-orange-200 bg-orange-50/30 focus:border-[#F26522] outline-none font-semibold"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Aparece em um card dourado destacado logo abaixo do Hero.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Código do Cupom de Desconto (Opcional)
                    </label>
                    <input
                      type="text"
                      value={discountCoupon}
                      onChange={(e) => setDiscountCoupon(e.target.value.toUpperCase())}
                      placeholder="ex: CAMPINA10"
                      className="w-full px-3.5 py-2.5 text-sm uppercase font-mono rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Clientes podem copiar este cupom com um clique para colar no WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SEÇÃO 3: SOBRE / QUEM SOMOS */}
            {activeConfigSection === 'about' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#F26522]" />
                    <span>3. Seção Sobre a Empresa / Quem Somos</span>
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
                  <ImageUpload
                    value={aboutImage}
                    onChange={setAboutImage}
                    label="Foto da Empresa / Equipe / Fachada (Sobre Quem Somos)"
                    helperText="Foto que ilustra a história e o espaço físico da empresa. Convertida automaticamente para WebP de até 150 KB e salva no banco de dados."
                    aspectRatio="video"
                    maxSizeKb={150}
                  />
                </div>
              </div>
            )}

            {/* SEÇÃO 4: DIFERENCIAIS & VANTAGENS */}
            {activeConfigSection === 'benefits' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#F26522]" />
                    <span>4. Diferenciais & Vantagens Exclusivas ({highlights.length})</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('benefits')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('benefits')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('benefits') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Diferenciais Exibidos</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Diferenciais Ocultos</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Adicionar Novo Diferencial
                  </h4>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newHighlight}
                      onChange={(e) => setNewHighlight(e.target.value)}
                      placeholder="ex: Atendimento no WhatsApp em até 2 minutos"
                      className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddHighlight}
                      className="px-4 py-2 bg-[#0B3B60] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-[#145388]"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Adicionar</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Estes diferenciais são exibidos como cards estilizados com ícones na seção "Por que escolher a {name}?".
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-800">{h}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveHighlight(idx)}
                        className="p-1.5 text-slate-400 hover:text-red-500 cursor-pointer"
                        title="Remover diferencial"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {highlights.length === 0 && (
                    <div className="sm:col-span-2 p-4 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                      Nenhum diferencial personalizado cadastrado. Os 4 diferenciais padrão de excelência de Campina Grande serão exibidos automaticamente.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SEÇÃO 5: SERVIÇOS & PRODUTOS COM WHATSAPP */}
            {activeConfigSection === 'services' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#F26522]" />
                    <span>5. Catálogo de Serviços & Produtos ({services.length})</span>
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
                    <div className="sm:col-span-2">
                      <ImageUpload
                        value={newServiceImage}
                        onChange={setNewServiceImage}
                        label="Foto do Produto / Serviço (Opcional)"
                        helperText="Foto ilustrativa para o card do WhatsApp. Convertida para WebP de até 150 KB e salva no banco de dados."
                        aspectRatio="square"
                        maxSizeKb={150}
                      />
                    </div>
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

            {/* SEÇÃO 6: COMO FUNCIONA (PASSO A PASSO) */}
            {activeConfigSection === 'process' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#F26522]" />
                    <span>6. Como Funciona Nosso Atendimento (4 Etapas)</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('process')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('process')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('process') ? (
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

                <p className="text-xs text-slate-500">
                  Estas 4 etapas ilustram de forma clara e profissional como o cliente entra em contato, escolhe, paga e recebe os produtos/serviços da {name}.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-amber-400 text-[#0B3B60] font-black text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Etapa {idx + 1}
                        </span>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Título da Etapa
                        </label>
                        <input
                          type="text"
                          value={step.title}
                          onChange={(e) => handleUpdateProcessStep(idx, 'title', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs font-bold rounded-xl border border-slate-200 bg-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Descrição Explicativa
                        </label>
                        <textarea
                          rows={2}
                          value={step.description}
                          onChange={(e) => handleUpdateProcessStep(idx, 'description', e.target.value)}
                          className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-white outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEÇÃO 7: DEPOIMENTOS DE CLIENTES */}
            {activeConfigSection === 'testimonials' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span>7. Depoimentos & Avaliações ({testimonials.length})</span>
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

            {/* SEÇÃO 8: GALERIA DE FOTOS */}
            {activeConfigSection === 'gallery' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-[#F26522]" />
                    <span>8. Galeria de Fotos da Loja ({gallery.length})</span>
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

                {/* Gallery Upload Dropzone */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Adicionar Fotos ao Portfólio ({gallery.length} fotos cadastradas)
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      <span>Conversão automática para WebP até 150 KB</span>
                    </span>
                  </div>

                  <label className={`block border-2 border-dashed rounded-2xl p-5 sm:p-6 text-center cursor-pointer transition-all ${
                    uploadingGallery ? 'border-emerald-500 bg-emerald-50/70 pointer-events-none' : 'border-slate-300 hover:border-[#0B3B60] bg-slate-50/50 hover:bg-white'
                  }`}>
                    <input
                      type="file"
                      multiple
                      accept="image/png,image/jpeg,image/jpg,image/webp,image/avif"
                      onChange={(e) => handleGalleryFiles(e.target.files)}
                      className="hidden"
                    />
                    {uploadingGallery ? (
                      <div className="flex flex-col items-center gap-2 py-2">
                        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
                        <span className="text-xs font-bold text-slate-800">
                          Convertendo fotos selecionadas para WebP (máx 150 KB)...
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                          <UploadCloud className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">
                          Clique aqui para selecionar uma ou mais fotos do seu dispositivo
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Formatos aceitos: JPG, PNG, WebP. Cada foto é convertida para WebP leve (&le; 150 KB) e salva no seu banco de dados.
                        </p>
                      </div>
                    )}
                  </label>

                  {/* Fallback direct link input */}
                  <div className="flex gap-2 pt-1">
                    <input
                      type="url"
                      value={newGalleryUrl}
                      onChange={(e) => setNewGalleryUrl(e.target.value)}
                      placeholder="Ou cole uma URL direta da foto (https://...)"
                      className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 outline-none bg-white"
                    />
                    <button
                      type="button"
                      onClick={handleAddGalleryImage}
                      className="px-4 py-2 bg-[#0B3B60] hover:bg-[#145388] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Adicionar Link</span>
                    </button>
                  </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {gallery.map((url, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-xs"
                    >
                      <img
                        src={url}
                        alt={`Foto ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-60 group-hover:opacity-90 transition-opacity" />

                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-emerald-300 text-[10px] font-bold backdrop-blur-md">
                        {url.startsWith('data:image/webp') ? 'WebP DB' : `Foto #${idx + 1}`}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryImage(idx)}
                        className="absolute top-2 right-2 p-1.5 bg-red-600/90 hover:bg-red-600 text-white rounded-lg transition-all cursor-pointer shadow-md"
                        title="Excluir foto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEÇÃO 9: FAQ (DÚVIDAS FREQUENTES) */}
            {activeConfigSection === 'faq' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#F26522]" />
                    <span>9. Perguntas Frequentes / FAQ ({faqs.length})</span>
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

            {/* SEÇÃO 10: CTA FINAL (CHAMADA PARA AÇÃO) */}
            {activeConfigSection === 'cta' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#F26522]" />
                    <span>10. Chamada para Ação Final (CTA de Fechamento)</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('cta')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('cta')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('cta') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>CTA Exibido na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>CTA Oculto na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Título Impactante da Chamada
                    </label>
                    <input
                      type="text"
                      value={ctaTitle}
                      onChange={(e) => setCtaTitle(e.target.value)}
                      placeholder={`Pronto para conversar com a equipe da ${name}?`}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none font-semibold"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Aparece com destaque antes do rodapé para motivar o cliente a clicar no WhatsApp.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subtítulo / Mensagem Convidativa
                    </label>
                    <textarea
                      rows={2}
                      value={ctaSubtitle}
                      onChange={(e) => setCtaSubtitle(e.target.value)}
                      placeholder="Atendimento humanizado, orçamentos rápidos e as melhores ofertas de Campina Grande."
                      className="w-full p-3.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SEÇÃO 11: CONTATO, LOCALIZAÇÃO & GOOGLE MAPS */}
            {activeConfigSection === 'contact' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#F26522]" />
                    <span>11. Contato, Localização & Google Maps</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('contact')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('contact')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('contact') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Contato Exibido na Página</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Contato Oculto na Página</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Endereço Completo (Rua, Número, Referência) *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="ex: Rua Maciel Pinheiro, 120, Centro"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
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

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefone Fixo ou Celular Adicional
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="ex: (83) 3321-0000"
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
                      placeholder="ex: Seg a Sex: 08h às 18h | Sáb: 08h às 13h"
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
                      placeholder="@minhaloja"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website Oficial (Opcional)
                    </label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SEÇÃO 12: BOTÃO FLUTUANTE DE WHATSAPP */}
            {activeConfigSection === 'floatingWhatsapp' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-[#0B3B60] flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                    <span>12. Botão Flutuante de WhatsApp (Contato Direto)</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => toggleSectionVisibility('floatingWhatsapp')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs self-start sm:self-auto ${
                      isSectionVisible('floatingWhatsapp')
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {isSectionVisible('floatingWhatsapp') ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Botão Flutuante Ativo</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Botão Flutuante Oculto</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1.5">
                      Número do WhatsApp Comercial Oficial (com DDD) *
                    </label>
                    <input
                      type="text"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="ex: (83) 99999-9999"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-emerald-500/40 focus:border-emerald-600 outline-none font-bold text-slate-900"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Este é o número que recebe os clientes vindos de todos os botões de contato, catálogo de produtos e botão flutuante.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
                    <p className="font-bold flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Como funciona o botão flutuante:</span>
                    </p>
                    <p>
                      Ele fica fixado no canto inferior direito da tela e acompanha o visitante em todas as seções. Ao clicar, o cliente já abre a conversa no WhatsApp com uma mensagem personalizada sobre sua loja.
                    </p>
                  </div>
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
