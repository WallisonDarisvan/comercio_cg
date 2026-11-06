import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Star,
  CheckCircle2,
  Tag,
  Copy,
  Check,
  Instagram,
  ShieldCheck,
  ChevronRight,
  Navigation,
  Sparkles,
  ChevronDown,
  ShoppingBag,
  Award,
  Zap,
  Truck,
  CreditCard,
  HelpCircle,
  Calendar,
  Image as ImageIcon,
  ExternalLink,
} from 'lucide-react';
import { Store, StoreService, StoreTestimonial, StoreFaqItem, StoreProcessStep } from '../data/mockData';
import { recordStoreViewApi, recordStoreWhatsappClickApi } from '../services/api';

interface StoreWebsiteViewProps {
  store: Store;
  onBack: () => void;
  onOpenRegister?: () => void;
}

export const StoreWebsiteView: React.FC<StoreWebsiteViewProps> = ({
  store,
  onBack,
  onOpenRegister,
}) => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (store && store.id) {
      recordStoreViewApi(store.id);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [store.id]);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2500);
  };

  const handleOpenWhatsapp = (customMessage?: string) => {
    if (store && store.id) {
      recordStoreWhatsappClickApi(store.id);
    }
    const cleanNumber = (store.whatsapp || store.phone || '').replace(/[^0-9]/g, '');
    const finalNumber = cleanNumber.startsWith('55') ? cleanNumber : `55${cleanNumber}`;
    const text = customMessage || `Olá! Estou acessando o site oficial da ${store.name} pelo portal Comércio Campina e gostaria de mais informações!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${finalNumber}?text=${encoded}`, '_blank');
  };

  const handleOpenMaps = () => {
    const query = encodeURIComponent(`${store.name}, ${store.address}, Campina Grande PB`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  // 1. DEFAULT DATA FALLBACKS (Garante que todas as seções apareçam completas mesmo se não preenchidas)
  const defaultServices: StoreService[] = [
    {
      name: 'Atendimento e Consulta Especializada',
      description: 'Atendimento personalizado com nossa equipe para tirar todas as dúvidas e apresentar as melhores opções.',
      price: 'Sob Consulta',
      image: store.image,
    },
    {
      name: 'Produtos e Linha Selecionada',
      description: 'Garantia de procedência, qualidade e preços exclusivos para clientes de Campina Grande.',
      price: 'Condição Especial',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Entrega Rápida em Toda Campina',
      description: 'Receba seus pedidos com agilidade e total segurança em qualquer bairro da cidade.',
      price: 'Consulte Entrega',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const services: StoreService[] = store.services && store.services.length > 0 ? store.services : defaultServices;

  const defaultBenefits = [
    {
      icon: Award,
      title: 'Qualidade e Procedência',
      description: 'Padrão rigoroso de qualidade em todos os produtos e serviços oferecidos em Campina Grande.',
    },
    {
      icon: Zap,
      title: 'Atendimento Rápido no WhatsApp',
      description: 'Respostas ágeis para orçamentos, dúvidas e pedidos sem filas nem espera demorada.',
    },
    {
      icon: CreditCard,
      title: 'Pagamento Facilitado',
      description: 'Aceitamos Pix, cartões de crédito e débito com condições especiais de parcelamento.',
    },
    {
      icon: Truck,
      title: 'Localização Central & Entrega',
      description: `Fácil acesso no bairro ${store.neighborhood} e opção de entrega rápida em toda a cidade.`,
    },
  ];

  const defaultProcessSteps: StoreProcessStep[] = [
    {
      step: 1,
      title: '1. Escolha o Produto ou Serviço',
      description: 'Navegue pelas opções da nossa página oficial ou veja nosso catálogo atualizado.',
    },
    {
      step: 2,
      title: '2. Fale Conosco no WhatsApp',
      description: 'Clique no botão de contato direto para ser atendido por um especialista da nossa equipe.',
    },
    {
      step: 3,
      title: '3. Tire Dúvidas e Confirme',
      description: 'Esclareça detalhes técnicos, formas de pagamento e opções de entrega ou retirada.',
    },
    {
      step: 4,
      title: '4. Receba ou Retire na Loja',
      description: `Seu pedido é separado com carinho e entregue ou preparado para retirada no bairro ${store.neighborhood}.`,
    },
  ];

  const processSteps = store.processSteps && store.processSteps.length > 0 ? store.processSteps : defaultProcessSteps;

  const defaultTestimonials: StoreTestimonial[] = [
    {
      name: 'Mariana Medeiros',
      neighborhood: 'Catolé',
      comment: `Excelente atendimento! Entrei em contato pelo WhatsApp da ${store.name} e fui respondida em menos de 2 minutos. Recomendo muito!`,
      rating: 5,
    },
    {
      name: 'Lucas Cavalcanti',
      neighborhood: 'Centro',
      comment: 'Produtos de altíssima qualidade e preço justo. Com certeza voltarei a comprar. O comércio de Campina Grande precisa de mais lojas assim!',
      rating: 5,
    },
    {
      name: 'Renata Guimarães',
      neighborhood: 'Alto Branco',
      comment: 'Ambiente nota 10, equipe muito prestativa e honesta. Tiraram todas as minhas dúvidas e entregaram super rápido.',
      rating: 5,
    },
  ];

  const testimonials = store.testimonials && store.testimonials.length > 0 ? store.testimonials : defaultTestimonials;

  const defaultFaqs: StoreFaqItem[] = [
    {
      question: 'Quais as formas de pagamento aceitas pela loja?',
      answer: 'Aceitamos Pix à vista com desconto especial, cartões de crédito (parcelamento em até várias vezes) e dinheiro físico na retirada.',
    },
    {
      question: 'Fazem entregas em todos os bairros de Campina Grande?',
      answer: `Sim! Realizamos entregas em toda a zona urbana de Campina Grande e também disponibilizamos retirada rápida em nossa loja no bairro ${store.neighborhood}.`,
    },
    {
      question: 'Como funciona o atendimento pelo WhatsApp?',
      answer: 'Você clica em qualquer botão verde da página e já inicia a conversa direta com nosso atendente oficial. O atendimento é humanizado e imediato dentro do horário comercial.',
    },
    {
      question: 'Qual é o horário de funcionamento do estabelecimento?',
      answer: `Nosso horário padrão de atendimento é: ${store.openingHours || 'Segunda a Sexta das 08h às 18h e Sábados das 08h às 13h'}.`,
    },
    {
      question: 'Como posso aproveitar o cupom ou oferta do portal?',
      answer: `Basta copiar o cupom exibido nesta página ou mencionar ao nosso atendente pelo WhatsApp que você viu o anúncio no portal Comércio Campina!`,
    },
  ];

  const faqs = store.faq && store.faq.length > 0 ? store.faq : defaultFaqs;

  const defaultGallery = [
    store.image,
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80',
  ];

  const gallery = store.gallery && store.gallery.length > 0 ? store.gallery : defaultGallery;

  // Section visibility helper (default true if not explicitly set to false)
  const isSectionVisible = (sectionId: string) => {
    if (!store.visibleSections) return true;
    return store.visibleSections[sectionId] !== false;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-[#F26522]/20 selection:text-[#0B3B60]">
      
      {/* 1. TOP STICKY NAVBAR DO ESTABELECIMENTO */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Left: Back & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#0B3B60] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer min-h-[38px]"
              title="Voltar ao portal geral"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao Portal</span>
              <span className="sm:hidden">Voltar</span>
            </button>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0B3B60] text-amber-400 font-extrabold flex items-center justify-center text-xs">
                {store.name.substring(0, 2).toUpperCase()}
              </div>
              <span className="text-sm font-extrabold text-[#0B3B60] truncate max-w-[140px] sm:max-w-[220px]">
                {store.name}
              </span>
            </div>
          </div>

          {/* Center Navigation Links (Apenas seções ativas) */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600">
            {isSectionVisible('about') && <a href="#sobre" className="hover:text-[#0B3B60] transition-colors">Sobre</a>}
            {isSectionVisible('benefits') && <a href="#diferenciais" className="hover:text-[#0B3B60] transition-colors">Diferenciais</a>}
            {isSectionVisible('services') && <a href="#produtos" className="hover:text-[#0B3B60] transition-colors">Produtos</a>}
            {isSectionVisible('process') && <a href="#como-funciona" className="hover:text-[#0B3B60] transition-colors">Como Funciona</a>}
            {isSectionVisible('testimonials') && <a href="#avaliacoes" className="hover:text-[#0B3B60] transition-colors">Depoimentos</a>}
            {isSectionVisible('gallery') && <a href="#galeria" className="hover:text-[#0B3B60] transition-colors">Fotos</a>}
            {isSectionVisible('faq') && <a href="#faq" className="hover:text-[#0B3B60] transition-colors">FAQ</a>}
            {isSectionVisible('contact') && <a href="#contato" className="hover:text-[#0B3B60] transition-colors">Contato</a>}
          </nav>

          {/* Right Direct WhatsApp Action */}
          <button
            onClick={() => handleOpenWhatsapp()}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all cursor-pointer min-h-[40px] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp</span>
          </button>

        </div>
      </header>

      {/* 2. HERO SECTION COM IDENTIDADE E CTA */}
      {isSectionVisible('hero') && (
        <section id="hero" className="relative bg-slate-950 text-white overflow-hidden">
          {/* Full-width Cover Photo Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src={store.image}
              alt={store.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-35 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-12 sm:pb-20">
            <div className="max-w-3xl">
              
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#F26522] to-amber-500 text-white text-xs font-bold shadow-md mb-4">
                <Sparkles className="w-3.5 h-3.5 fill-white text-white" />
                <span>{store.category} · Empresa Verificada em Campina Grande</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                {store.name}
              </h1>

              {/* Subtitle / Value Prop */}
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed mb-6 font-normal">
                {store.description}
              </p>

              {/* Chips: Rating, Neighborhood, Hours */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-white">{store.rating ? store.rating.toFixed(1) : '5.0'}</span>
                  <span className="text-slate-400 text-xs">({store.reviewsCount || 12} avaliações)</span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-[#F26522]" />
                  <span>{store.neighborhood}, Campina Grande - PB</span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Aberto Hoje</span>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenWhatsapp()}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-sm sm:text-base font-extrabold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>Iniciar Atendimento no WhatsApp</span>
                </button>

                <button
                  onClick={handleOpenMaps}
                  className="flex-1 sm:flex-initial py-3.5 px-5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all border border-white/20 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <Navigation className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Como Chegar (GPS)</span>
                </button>

                <a
                  href="#produtos"
                  className="flex-1 sm:flex-initial py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all border border-white/15 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <ShoppingBag className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>Ver Produtos / Ofertas</span>
                </a>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. SEÇÃO DE OFERTA EXCLUSIVA & CUPOM DE DESCONTO */}
      {isSectionVisible('offer') && (
        <section className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-y border-amber-500/20 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-amber-200/80 flex flex-col lg:flex-row items-center justify-between gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F26522] to-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Tag className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#F26522] text-[11px] font-extrabold uppercase tracking-wider mb-1">
                    Condição Promocional
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                    {store.offer || 'Consulte condições especiais no atendimento via WhatsApp!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Válido para clientes que entrarem em contato pelo portal Comércio Campina.
                  </p>
                </div>
              </div>

              {store.discountCoupon ? (
                <div className="w-full lg:w-auto bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Cupom da Loja:</span>
                    <span className="text-base sm:text-lg font-mono font-black text-[#0B3B60] tracking-wider">
                      {store.discountCoupon}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCoupon(store.discountCoupon!)}
                    className="py-2.5 px-4 rounded-xl bg-[#0B3B60] hover:bg-[#145388] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[40px]"
                  >
                    {copiedCoupon ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Copiado com sucesso!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Cupom</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleOpenWhatsapp('Olá! Gostaria de consultar os descontos e ofertas especiais do seu estabelecimento!')}
                  className="py-3 px-5 rounded-2xl bg-gradient-to-r from-[#F26522] to-amber-500 hover:brightness-105 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Tag className="w-4 h-4" />
                  <span>Resgatar Oferta no WhatsApp</span>
                </button>
              )}

            </div>
          </div>
        </section>
      )}

      {/* 4. SEÇÃO SOBRE / QUEM SOMOS */}
      {isSectionVisible('about') && (
        <section id="sobre" className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Story & Commitment */}
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3B60] text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  SOBRE / QUEM SOMOS
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Tradição, Excelência e Compromisso com Campina Grande
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {store.aboutText || (
                    `Fundada com o propósito de oferecer o melhor atendimento e produtos com qualidade superior, a ${store.name} se consolidou como uma das grandes referências no bairro ${store.neighborhood} e em toda a região de Campina Grande. Nosso foco diário é garantir a satisfação dos nossos clientes com seriedade, preço justo e suporte humanizado.`
                  )}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Atendimento dedicado no WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Produtos selecionados e garantidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Localização acessível em Campina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Condições especiais e parcelamento</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Illustrative Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                  <img
                    src={store.aboutImage || store.image}
                    alt={`Sobre ${store.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-amber-300 block">Sede Oficial</span>
                    <span className="text-sm font-extrabold block">{store.address}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 5. SEÇÃO DE DIFERENCIAIS / BENEFÍCIOS */}
      {isSectionVisible('benefits') && (
        <section id="diferenciais" className="py-12 sm:py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                Vantagens Exclusivas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Por que escolher a {store.name}?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Descubra os motivos pelos quais nossos clientes recomendam nossos serviços em Campina Grande.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {defaultBenefits.map((b, idx) => {
                const IconComp = b.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0B3B60]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F26522] flex items-center justify-center font-bold mb-4">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-extrabold text-base text-slate-900 mb-2">
                        {b.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* 6. SEÇÃO DE SERVIÇOS / PRODUTOS COM BOTÃO DE WHATSAPP */}
      {isSectionVisible('services') && (
        <section id="produtos" className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <span className="text-xs font-bold text-[#0B3B60] uppercase tracking-wider block mb-1">
                  Catálogo em Destaque
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Serviços & Produtos Principais
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Clique no botão de qualquer item para pedir direto pelo WhatsApp.
                </p>
              </div>

              <button
                onClick={() => handleOpenWhatsapp('Olá! Gostaria de ver o catálogo completo da loja!')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B60] hover:text-[#F26522] transition-colors cursor-pointer"
              >
                <span>Consultar catálogo completo no WhatsApp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image || store.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.price && (
                        <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#0B3B60] text-amber-300 font-extrabold text-xs rounded-xl shadow-md">
                          {item.price}
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#0B3B60] transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() =>
                        handleOpenWhatsapp(
                          `Olá! Tenho interesse no serviço/produto "${item.name}" da ${store.name} em Campina Grande. Pode me passar mais detalhes?`
                        )
                      }
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Pedir pelo WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 7. SEÇÃO DE PROCESSO / COMO FUNCIONA */}
      {isSectionVisible('process') && (
        <section id="como-funciona" className="py-12 sm:py-16 bg-[#0B3B60] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Passo a Passo Simples
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Como Funciona Nosso Atendimento
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 mt-2">
                Da sua primeira mensagem até a conclusão do seu pedido em 4 etapas rápidas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-[#0B3B60] font-black text-lg flex items-center justify-center mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="font-extrabold text-base text-white mb-2">
                      {step.title.replace(/^[0-9]\.\s*/, '')}
                    </h3>
                    <p className="text-xs text-blue-100/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => handleOpenWhatsapp()}
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F26522] to-amber-500 hover:brightness-105 active:scale-95 text-white font-extrabold text-sm shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Iniciar Atendimento Agora</span>
              </button>
            </div>

          </div>
        </section>
      )}

      {/* 8. SEÇÃO DE DEPOIMENTOS / AVALIAÇÕES */}
      {isSectionVisible('testimonials') && (
        <section id="avaliacoes" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                Avaliações Verificadas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Opiniões reais de quem já comprou ou contratou com a {store.name} em Campina Grande.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3 text-amber-400">
                      {Array.from({ length: t.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#0B3B60] text-white font-bold flex items-center justify-center text-xs">
                      {t.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">{t.name}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{t.neighborhood || 'Campina Grande'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 9. SEÇÃO DE GALERIA / FOTOS DA LOJA */}
      {isSectionVisible('gallery') && (
        <section id="galeria" className="py-12 sm:py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#0B3B60] uppercase tracking-wider block mb-1">
                Ambiente e Produtos
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Galeria de Fotos
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Conheça nosso espaço e alguns dos nossos trabalhos e itens em exposição.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
              {gallery.slice(0, 6).map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-slate-200/90 group"
                >
                  <img
                    src={imgUrl}
                    alt={`Galeria ${store.name} ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-black/60 px-3 py-1 rounded-full">
                      {store.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 10. SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
      {isSectionVisible('faq') && (
        <section id="faq" className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                Dúvidas Comuns
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tudo o que você precisa saber antes de fazer seu pedido.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#0B3B60]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* 11. SEÇÃO CALL-TO-ACTION (CTA FINAL) */}
      {isSectionVisible('cta') && (
        <section id="cta" className="py-14 sm:py-20 bg-gradient-to-r from-[#0B3B60] via-[#0f4e80] to-[#124d7c] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-amber-300 font-extrabold text-xs tracking-wider uppercase">
              Atendimento Rápido
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
              {store.ctaTitle || `Pronto para falar diretamente com a equipe da ${store.name}?`}
            </h2>

            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
              {store.ctaSubtitle ||
                `Estamos disponíveis agora no WhatsApp para tirar suas dúvidas, passar orçamentos ou preparar seu pedido em Campina Grande.`}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => handleOpenWhatsapp()}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-black text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Falar no WhatsApp Agora</span>
              </button>

              <button
                onClick={handleOpenMaps}
                className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Ver Localização no GPS</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 12. SEÇÃO DE CONTATO & LOCALIZAÇÃO */}
      {isSectionVisible('contact') && (
        <section id="contato" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-[#0B3B60] uppercase tracking-wider block mb-1">
                Canais Oficiais
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Localização & Contato Direto
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Visite nosso espaço físico ou mande uma mensagem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* WhatsApp */}
              <div
                onClick={() => handleOpenWhatsapp()}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </div>
                <span className="text-xs font-bold text-slate-500 block uppercase">WhatsApp</span>
                <span className="text-sm font-extrabold text-slate-900 block mt-0.5">{store.whatsapp}</span>
                <span className="text-xs text-emerald-600 font-semibold mt-2 inline-flex items-center gap-1">
                  Iniciar conversa <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Telefone */}
              <a
                href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 block uppercase">Telefone</span>
                <span className="text-sm font-extrabold text-slate-900 block mt-0.5">{store.phone}</span>
                <span className="text-xs text-blue-600 font-semibold mt-2 inline-flex items-center gap-1">
                  Ligar agora <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Instagram */}
              <div
                onClick={() => {
                  const handle = store.instagram.replace('@', '');
                  window.open(`https://instagram.com/${handle}`, '_blank');
                }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-pink-500 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 block uppercase">Instagram Oficial</span>
                <span className="text-sm font-extrabold text-slate-900 block mt-0.5">{store.instagram}</span>
                <span className="text-xs text-pink-600 font-semibold mt-2 inline-flex items-center gap-1">
                  Ver perfil <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Endereço */}
              <div
                onClick={handleOpenMaps}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-500 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 block uppercase">Endereço Físico</span>
                <span className="text-xs font-extrabold text-slate-900 block mt-0.5 line-clamp-2 leading-tight">
                  {store.address}
                </span>
                <span className="text-xs text-[#F26522] font-semibold mt-2 inline-flex items-center gap-1">
                  Abrir GPS <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </div>

            {/* Google Maps Embed Interativo */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-64 sm:h-80 w-full relative">
              <iframe
                title={`Mapa de localização de ${store.name}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${store.name}, ${store.address}, Campina Grande PB`
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              />
            </div>

          </div>
        </section>
      )}

      {/* 13. FOOTER (RODAPÉ) */}
      <footer id="footer" className="bg-slate-900 text-white border-t border-slate-800 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            <span className="font-extrabold text-sm text-white">{store.name}</span> · {store.category}
            <p className="mt-1">
              {store.address} · {store.neighborhood}, Campina Grande - PB.
            </p>
            <p className="mt-0.5 text-slate-500">
              Guia oficial Comércio Campina © 2026. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
            <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            <button
              onClick={onBack}
              className="ml-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all cursor-pointer"
            >
              Voltar ao Portal
            </button>
          </div>
        </div>
      </footer>

      {/* 14. BOTÃO FLUTUANTE DE WHATSAPP */}
      {isSectionVisible('floatingWhatsapp') && (
        <button
          onClick={() => handleOpenWhatsapp()}
          className="fixed bottom-6 right-6 z-50 p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-90 text-white shadow-2xl flex items-center justify-center transition-all cursor-pointer group animate-bounce hover:animate-none"
          title="Fale no WhatsApp"
          aria-label="Abrir conversa no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            Fale Conosco
          </span>
        </button>
      )}

    </div>
  );
};
