export interface Store {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  tagTv: string;
  description: string;
  offer: string;
  rating: number;
  reviewsCount: number;
  neighborhood: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  featuredInShow: string;
  discountCoupon?: string;
  highlights: string[];
  isVerifiedTv: boolean;
  openingHours: string;
  website?: string;
}

export interface TvProgram {
  id: string;
  title: string;
  timeSlot: string;
  anchor: string;
  description: string;
  isLiveNow: boolean;
  thumbnail: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  reporter: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  count: number;
  color: string;
}

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Todos os Comércios', iconName: 'Store', count: 48, color: 'text-blue-600 bg-blue-50' },
  { id: 'gastronomia', name: 'Alimentação & Sabores', iconName: 'Utensils', count: 14, color: 'text-amber-600 bg-amber-50' },
  { id: 'moda', name: 'Moda & Acessórios', iconName: 'ShoppingBag', count: 11, color: 'text-pink-600 bg-pink-50' },
  { id: 'tecnologia', name: 'Tecnologia & Celulares', iconName: 'Smartphone', count: 8, color: 'text-cyan-600 bg-cyan-50' },
  { id: 'saude', name: 'Saúde & Óticas', iconName: 'Glasses', count: 6, color: 'text-emerald-600 bg-emerald-50' },
  { id: 'automotivo', name: 'Serviços Automotivos', iconName: 'Car', count: 5, color: 'text-orange-600 bg-orange-50' },
  { id: 'construcao', name: 'Construção & Lar', iconName: 'Hammer', count: 4, color: 'text-indigo-600 bg-indigo-50' },
];

export const NEIGHBORHOODS = [
  'Todos os Bairros',
  'Centro',
  'Catolé',
  'Prata',
  'Alto Branco',
  'Mirante',
  'Bodocongó',
  'Malvinas',
  'Liberdade',
  'Cruzeiro',
];

export const STORES_DATA: Store[] = [
  {
    id: 'tudo-celular-cg',
    name: 'Tudo Celular CG Premium',
    category: 'Tecnologia & Celulares',
    categoryId: 'tecnologia',
    image: '/src/assets/images/campina_tech_store_1793926202240.jpg',
    tagTv: '⭐ Destaque no Comando Policial',
    description: 'A maior referência em smartphones novos, seminovos com garantia e assistência técnica express no Centro de Campina Grande.',
    offer: 'Iphones e Androids com entrada facilitada em até 18x e película grátis na troca de tela.',
    rating: 4.9,
    reviewsCount: 342,
    neighborhood: 'Centro',
    address: 'Rua Maciel Pinheiro, 240 - Centro, Campina Grande - PB',
    phone: '(83) 3321-4500',
    whatsapp: '5583998124500',
    instagram: '@tudocelularcg',
    featuredInShow: 'Comando Policial',
    discountCoupon: 'BORBOREMA15',
    highlights: ['Assistência Técnica em 40 minutos', 'Garantia de 1 ano em seminovos', 'Aceita seu aparelho usado na troca'],
    isVerifiedTv: true,
    openingHours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00',
    website: 'https://tudocelularcg.com.br',
  },
  {
    id: 'newlook-optica',
    name: 'Newlook Óptica & Centro Visual',
    category: 'Saúde & Óticas',
    categoryId: 'saude',
    image: '/src/assets/images/campina_optica_store_1793926203017.jpg',
    tagTv: '⭐ Indicado no SBT Paraíba',
    description: 'Armações de grifes internacionais, lentes digitais de alta definição e consultório optométrico computadorizado moderno.',
    offer: 'Armação gratuita na compra do bloco multifocal digital + exame agendado.',
    rating: 4.9,
    reviewsCount: 219,
    neighborhood: 'Prata',
    address: 'Rua Afonso Campos, 115 - Prata, Campina Grande - PB',
    phone: '(83) 3341-8900',
    whatsapp: '5583996548900',
    instagram: '@newlookopticacg',
    featuredInShow: 'SBT Paraíba',
    discountCoupon: 'BORBOREMAOPTICA',
    highlights: ['Exame de vista computadorizado', 'Mais de 2.000 modelos de armações', 'Laboratório próprio com entrega rápida'],
    isVerifiedTv: true,
    openingHours: 'Segunda a Sexta: 08:00 às 18:30 | Sábado: 08:00 às 12:30',
    website: 'https://newlookotica.com.br',
  },
  {
    id: 'sabor-da-terra-bistro',
    name: 'Restaurante & Bodódromo Sabores da Paraíba',
    category: 'Alimentação & Sabores',
    categoryId: 'gastronomia',
    image: '/src/assets/images/campina_culinary_bistro_1793926204610.jpg',
    tagTv: '⭐ Destaque no Povo na TV',
    description: 'A autêntica culinária regional paraibana: carne de sol na nata com queijo coalho tostado, rubacão especial, bode guisado e cuscuz recheado.',
    offer: 'Almoço executivo regional completo + sobremesa de cartola tradicional com 10% de desconto da TV.',
    rating: 4.8,
    reviewsCount: 520,
    neighborhood: 'Catolé',
    address: 'Av. Elpídio de Almeida, 780 - Catolé, Campina Grande - PB',
    phone: '(83) 3337-1234',
    whatsapp: '5583993211234',
    instagram: '@saboresdaparaibacg',
    featuredInShow: 'O Povo na TV',
    discountCoupon: 'SABORBORBOREMA',
    highlights: ['Música regional ao vivo nas noites de quinta a domingo', 'Estacionamento privativo com manobrista', 'Espaço kids climatizado'],
    isVerifiedTv: true,
    openingHours: 'Terça a Domingo: 11:30 às 23:30',
    website: 'https://saboresdaparaiba.com.br',
  },
  {
    id: 'make-beauty-store',
    name: 'Make Beauty Cosméticos & Salão',
    category: 'Moda & Acessórios',
    categoryId: 'moda',
    image: '/src/assets/images/campina_optica_store_1793926203017.jpg',
    tagTv: '⭐ Recomendado no Povo na TV',
    description: 'Linhas completas de maquiagem profissional, dermocosméticos, cuidados capilares e atendimento consultivo especializado.',
    offer: 'Compre acima de R$ 150 e ganhe uma higienização facial profunda.',
    rating: 4.7,
    reviewsCount: 184,
    neighborhood: 'Centro',
    address: 'Rua Venâncio Neiva, 88 - Centro Comercial, Campina Grande - PB',
    phone: '(83) 3322-8080',
    whatsapp: '5583991228080',
    instagram: '@makebeautycampina',
    featuredInShow: 'O Povo na TV',
    discountCoupon: 'MAKE10TV',
    highlights: ['Produtos veganos e cruelty-free', 'Bancada de testes de maquiagem', 'Cursos de automaquiagem aos sábados'],
    isVerifiedTv: true,
    openingHours: 'Segunda a Sábado: 08:30 às 18:00',
    website: 'https://makebeautycampina.com.br',
  },
  {
    id: 'campina-autocenter',
    name: 'Campina Centro Automotivo & Pneus',
    category: 'Serviços Automotivos',
    categoryId: 'automotivo',
    image: '/src/assets/images/campina_tech_store_1793926202240.jpg',
    tagTv: '⭐ Patrocinador no NC Sports',
    description: 'Geometria 3D computadorizada, alinhamento, balanceamento, troca de óleo com produtos homologados e mecânica preventiva.',
    offer: 'Check-up completo de suspensão e freios 100% gratuito ao trocar os 4 pneus.',
    rating: 4.9,
    reviewsCount: 165,
    neighborhood: 'Mirante',
    address: 'Av. Argemiro de Figueiredo, 1420 - Mirante, Campina Grande - PB',
    phone: '(83) 3333-9090',
    whatsapp: '5583991449090',
    instagram: '@campinaautocenter',
    featuredInShow: 'NC Sports',
    discountCoupon: 'AUTOBORBOREMA',
    highlights: ['Equipamentos 3D de última geração', 'Sala VIP climatizada com café e Wi-Fi', 'Garantia estendida de serviços'],
    isVerifiedTv: true,
    openingHours: 'Segunda a Sexta: 07:30 às 17:30 | Sábado: 07:30 às 12:00',
    website: 'https://campinaautocenter.com.br',
  },
  {
    id: 'casa-construtora-borborema',
    name: 'Casa & Iluminação Borborema',
    category: 'Construção & Lar',
    categoryId: 'construcao',
    image: '/src/assets/images/campina_culinary_bistro_1793926204610.jpg',
    tagTv: '⭐ Visto no SBT Paraíba',
    description: 'Pisos porcelanatos, tintas, lustres de LED, louças sanitárias e material elétrico com entrega rápida em toda a Grande Campina.',
    offer: 'Parcelamento em até 12x sem juros no cartão ou 10% à vista no PIX com o código da TV.',
    rating: 4.8,
    reviewsCount: 198,
    neighborhood: 'Bodocongó',
    address: 'Av. Floriano Peixoto, 2100 - Bodocongó, Campina Grande - PB',
    phone: '(83) 3310-7000',
    whatsapp: '5583997707000',
    instagram: '@casaborborema',
    featuredInShow: 'SBT Paraíba',
    discountCoupon: 'CONSTRUCAO10',
    highlights: ['Entrega expressa em até 24h na cidade', 'Projeto luminotécnico cortesia', 'Preço direto de fábrica'],
    isVerifiedTv: true,
    openingHours: 'Segunda a Sexta: 07:30 às 18:00 | Sábado: 07:30 às 13:00',
    website: 'https://casaborborema.com.br',
  },
];

export const TV_PROGRAMS: TvProgram[] = [
  {
    id: 'povo-na-tv',
    title: 'O Povo na TV',
    timeSlot: '11:00 às 11:45',
    anchor: 'Comunitário & Cidadania',
    description: 'Prestação de serviços, cidadania e voz ativa para as comunidades de Campina.',
    isLiveNow: false,
    thumbnail: '/src/assets/images/tv_borborema_studio_1793926202139.jpg',
  },
  {
    id: 'comando-policial',
    title: 'Comando Policial',
    timeSlot: '11:45 às 13:00',
    anchor: 'Jornalismo Popular & Segurança',
    description: 'Jornalismo policial, defesa do cidadão e cobrança de autoridades no meio-dia.',
    isLiveNow: true,
    thumbnail: '/src/assets/images/tv_borborema_studio_1793926202139.jpg',
  },
  {
    id: 'nc-sports',
    title: 'NC Sports',
    timeSlot: '13:00 às 13:30',
    anchor: 'Esporte & Torcida Paraibana',
    description: 'Giro esportivo com foco no Treze, Campinense e atletas paraibanos.',
    isLiveNow: false,
    thumbnail: '/src/assets/images/campina_tech_store_1793926202240.jpg',
  },
  {
    id: 'sbt-paraiba',
    title: 'SBT Paraíba',
    timeSlot: '19:15 às 20:00',
    anchor: 'Telejornal Regional',
    description: 'Economia, política e o resumo dos principais fatos do estado à noite.',
    isLiveNow: false,
    thumbnail: '/src/assets/images/tv_borborema_studio_1793926202139.jpg',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'sao-joao-comercio',
    title: 'Preparativos para o São João já movimentam 35% a mais nas lojas de vestuário e calçados',
    summary: 'Comerciantes da Rua Maciel Pinheiro e Feira Central reforçam estoques de tecidos xadrez, couro e botas para a temporada junina.',
    content: 'A Câmara de Dirigentes Lojistas (CDL) e o Sindicato do Comércio Varejista de Campina Grande divulgaram levantamento apontando aquecimento antecipado no consumo. Com a programação oficial do Parque do Povo confirmada, as confecções e lojas de calçados do Centro já registram aumento expressivo na busca por peças tradicionais e trajes festivos. A TV Borborema acompanha de perto os impactos econômicos nos mais de 2.000 empreendimentos locais.',
    date: 'Hoje, 14:20',
    readTime: '3 min de leitura',
    category: 'Economia Local',
    image: '/src/assets/images/campina_culinary_bistro_1793926204610.jpg',
    reporter: 'Redação TV Borborema',
  },
  {
    id: 'feira-central-modernizacao',
    title: 'Feira Central de Campina Grande recebe programa de digitalização e pagamentos por aproximação',
    summary: 'Mais de 400 feirantes e artesãos são capacitados em parceria com entidades locais e ganham espaço no portal Comércio Campina.',
    content: 'Patrimônio cultural e coração pulsar do comércio popular paraibano, a Feira Central passa por uma importante transição digital. Por meio da iniciativa conjunta com o portal Comércio Campina e cobertura especial da TV Borborema, microempreendedores estão integrando catálogos digitais via WhatsApp e facilitando vendas tanto para moradores quanto turistas que visitam a Rainha da Borborema.',
    date: 'Ontem, 18:45',
    readTime: '4 min de leitura',
    category: 'Inovação Comercial',
    image: '/src/assets/images/campina_tech_store_1793926202240.jpg',
    reporter: 'Jornalismo Borborema',
  },
  {
    id: 'pacote-tv-comercio',
    title: 'TV Borborema lança cota especial para impulsionar pequenos comércios nos intervalos nobres',
    summary: 'Comerciantes participantes do portal Comércio Campina contam com desconto de 50% na veiculação de chamadas na TV aberta.',
    content: 'Com o objetivo de democratizar o acesso à mídia televisiva regional, a direção comercial da TV Borborema anunciou condições exclusivas para membros do portal Comércio Campina. Os lojistas certificados ganham menção com QR Code na tela durante os programas de maior audiência da grade, conectando o público da TV ao WhatsApp das lojas em tempo real.',
    date: '2 dias atrás',
    readTime: '2 min de leitura',
    category: 'Mídia & Parcerias',
    image: '/src/assets/images/tv_borborema_studio_1793926202139.jpg',
    reporter: 'Depto. Comercial TV Borborema',
  },
];

export const COMMERCIAL_PLANS = [
  {
    id: 'bronze',
    name: 'Presença Digital',
    badge: 'Iniciante',
    originalPrice: 'R$ 198/mês',
    promoPrice: 'R$ 99/mês',
    period: 'no plano anual',
    features: [
      'Página exclusiva no portal Comércio Campina',
      'Botão direto de WhatsApp para fechamento de vendas',
      'Divulgação de cupons e catálogo de fotos',
      'Indexação no Google para buscas em Campina Grande',
    ],
    recommended: false,
  },
  {
    id: 'prata-tv',
    name: 'Combo Portal + TV Borborema',
    badge: 'Mais Escolhido ⭐',
    originalPrice: 'R$ 598/mês',
    promoPrice: 'R$ 299/mês',
    period: '50% OFF Fundadores',
    features: [
      'Tudo do plano Presença Digital',
      '2 inserções mensais na tela da TV com QR Code interativo',
      'Selo dourado "⭐ Indicado na TV Borborema" no portal',
      'Destaque no carrossel de cabeçalho da página principal',
      'Vídeo depoimento da equipe no Instagram oficial',
    ],
    recommended: true,
  },
  {
    id: 'ouro-broadcast',
    name: 'Ouro Master Broadcast',
    badge: 'Máxima Audiência',
    originalPrice: 'R$ 1.198/mês',
    promoPrice: 'R$ 599/mês',
    period: 'Vagas Limitadas',
    features: [
      'Tudo do Combo Portal + TV',
      'Merchandising ao vivo (testemunhal com apresentador na TV)',
      'Cobertura jornalística da loja em matéria de bastidores',
      'Banner fixo exclusivo no portal com rotação prioritária',
      'Relatório mensal de cliques, visualizações e leads gerados',
    ],
    recommended: false,
  },
];

export interface CommercialBanner {
  id: string;
  merchantId: string;
  merchantName: string;
  headline: string;
  subtitle: string;
  badge: string;
  mediaType: 'video' | 'image';
  mediaUrl: string; // YouTube embed/watch url OR image path
  ctaText: string;
  ctaWhatsapp: string;
  ctaStoreId?: string;
  status: 'active' | 'paused';
  validUntil: string;
  order: number;
  clicksCount: number;
  monthlyInvestment: string;
}

export interface LeadSubmission {
  id: string;
  companyName: string;
  ownerName: string;
  whatsapp: string;
  category: string;
  neighborhood: string;
  selectedPlan: string;
  createdAt: string;
  status: 'novo' | 'em_contato' | 'aprovado' | 'arquivado';
  notes?: string;
}

export const INITIAL_BANNERS: CommercialBanner[] = [
  {
    id: 'banner-tudo-celular',
    merchantId: 'tudo-celular-cg',
    merchantName: 'Tudo Celular CG Premium',
    headline: 'Mega Saldão de Smartphones & Troca de Tela Express em 40 minutos',
    subtitle: 'A maior referência em iPhones e Androids do Centro de Campina Grande. Entrada facilitada em até 18x no cartão.',
    badge: '⭐ Patrocinador Master',
    mediaType: 'image',
    mediaUrl: '/src/assets/images/campina_tech_store_1793926202240.jpg',
    ctaText: 'Falar com Atendente no WhatsApp',
    ctaWhatsapp: '5583998124500',
    ctaStoreId: 'tudo-celular-cg',
    status: 'active',
    validUntil: '31/12/2026',
    order: 1,
    clicksCount: 428,
    monthlyInvestment: 'R$ 599/mês',
  },
  {
    id: 'banner-newlook-optica',
    merchantId: 'newlook-optica',
    merchantName: 'Newlook Óptica & Centro Visual',
    headline: 'Armação Grátis na compra das Lentes Multifocais Digitais',
    subtitle: 'Consultório computadorizado de última geração no bairro da Prata e mais de 2.000 modelos de armações de grife.',
    badge: '⭐ Cota Especial TV',
    mediaType: 'image',
    mediaUrl: '/src/assets/images/campina_optica_store_1793926203017.jpg',
    ctaText: 'Agendar Exame de Vista',
    ctaWhatsapp: '5583996548900',
    ctaStoreId: 'newlook-optica',
    status: 'active',
    validUntil: '15/12/2026',
    order: 2,
    clicksCount: 312,
    monthlyInvestment: 'R$ 299/mês',
  },
  {
    id: 'banner-sabor-terra',
    merchantId: 'sabor-da-terra-bistro',
    merchantName: 'Restaurante & Bodódromo Sabores da Paraíba',
    headline: 'O Autêntico Almoço Regional do Catolé com 10% OFF do Portal',
    subtitle: 'Carne de sol na nata com queijo coalho tostado, rubacão especial e música regional ao vivo de quinta a domingo.',
    badge: '⭐ Destaque Gastronômico',
    mediaType: 'image',
    mediaUrl: '/src/assets/images/campina_culinary_bistro_1793926204610.jpg',
    ctaText: 'Reservar Mesa no WhatsApp',
    ctaWhatsapp: '5583993211234',
    ctaStoreId: 'sabor-da-terra-bistro',
    status: 'active',
    validUntil: '20/12/2026',
    order: 3,
    clicksCount: 589,
    monthlyInvestment: 'R$ 299/mês',
  },
  {
    id: 'banner-tv-borborema-aovivo',
    merchantId: 'tv-borborema-live',
    merchantName: 'TV Borborema · Canal 9.1 HD',
    headline: 'Transmissão Ao Vivo: Programação da TV Borborema & Giro de Campina',
    subtitle: 'Assista à programação em tempo real direto dos estúdios da TV Borborema: notícias policiais, cidadania, cobertura do comércio e atrações locais.',
    badge: '🔴 TRANSMISSÃO AO VIVO',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/watch?v=dqTT4Ps4_Z8',
    ctaText: 'Assistir ao Vivo no YouTube',
    ctaWhatsapp: '5583998124500',
    status: 'active',
    validUntil: 'Canal 9.1 HD',
    order: 4,
    clicksCount: 890,
    monthlyInvestment: 'Emissora Oficial',
  },
];

export const INITIAL_LEADS: LeadSubmission[] = [
  {
    id: 'lead-1',
    companyName: 'Borracharia & Pneus São José',
    ownerName: 'José Wellington Silva',
    whatsapp: '(83) 98844-1234',
    category: 'Serviços Automotivos',
    neighborhood: 'Bodocongó',
    selectedPlan: 'Combo Portal + TV Borborema (R$ 299/mês)',
    createdAt: 'Hoje, 09:15',
    status: 'novo',
    notes: 'Interessado em rodar anúncio no intervalo do Comando Policial.',
  },
  {
    id: 'lead-2',
    companyName: 'Espaço Mulher Moda Feminina',
    ownerName: 'Mariana Medeiros',
    whatsapp: '(83) 99123-5678',
    category: 'Moda & Acessórios',
    neighborhood: 'Centro',
    selectedPlan: 'Ouro Master Broadcast (R$ 599/mês)',
    createdAt: 'Ontem, 16:40',
    status: 'em_contato',
    notes: 'Enviada proposta por WhatsApp. Aguardando confirmação de contrato.',
  },
  {
    id: 'lead-3',
    companyName: 'Livraria & Papelaria Borborema',
    ownerName: 'Carlos Eduardo Farias',
    whatsapp: '(83) 99655-7890',
    category: 'Construção & Lar',
    neighborhood: 'Prata',
    selectedPlan: 'Presença Digital (R$ 99/mês)',
    createdAt: '3 dias atrás',
    status: 'aprovado',
    notes: 'Contrato assinado. Loja ativa na vitrine.',
  },
];
