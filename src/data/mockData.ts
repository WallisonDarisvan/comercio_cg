export interface StoreService {
  name: string;
  description: string;
  price?: string;
  image?: string;
}

export interface StoreTestimonial {
  name: string;
  neighborhood?: string;
  comment: string;
  rating: number;
}

export interface StoreFaqItem {
  question: string;
  answer: string;
}

export interface StoreProcessStep {
  step: number;
  title: string;
  description: string;
}

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
  viewsCount?: number;
  whatsappClicks?: number;
  // Landing Page Sections
  aboutText?: string;
  aboutImage?: string;
  services?: StoreService[];
  testimonials?: StoreTestimonial[];
  gallery?: string[];
  processSteps?: StoreProcessStep[];
  faq?: StoreFaqItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  visibleSections?: Record<string, boolean>;
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
  { id: 'all', name: 'Todos os Comércios', iconName: 'Store', count: 100, color: 'text-blue-600 bg-blue-50' },
  { id: 'gastronomia', name: 'Alimentação & Sabores', iconName: 'Utensils', count: 18, color: 'text-amber-600 bg-amber-50' },
  { id: 'moda', name: 'Moda & Acessórios', iconName: 'ShoppingBag', count: 15, color: 'text-pink-600 bg-pink-50' },
  { id: 'saude', name: 'Saúde & Óticas', iconName: 'Glasses', count: 15, color: 'text-emerald-600 bg-emerald-50' },
  { id: 'tecnologia', name: 'Tecnologia & Celulares', iconName: 'Smartphone', count: 14, color: 'text-cyan-600 bg-cyan-50' },
  { id: 'automotivo', name: 'Serviços Automotivos', iconName: 'Car', count: 13, color: 'text-orange-600 bg-orange-50' },
  { id: 'construcao', name: 'Construção & Lar', iconName: 'Hammer', count: 13, color: 'text-indigo-600 bg-indigo-50' },
  { id: 'outros', name: 'Outros Serviços', iconName: 'Tag', count: 12, color: 'text-slate-600 bg-slate-50' },
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
    "id": "tudo-celular-cg",
    "name": "Tudo Celular CG Premium",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "O mais tradicional ponto de encontro de Campina Grande às margens do Açude Velho, famoso pelo autêntico cuscuz recheado e chopp artesanal.",
    "offer": "Na compra de qualquer prato para 2 pessoas, ganhe 1 sobremesa típica.",
    "rating": 4.7,
    "reviewsCount": 45,
    "neighborhood": "Catolé",
    "address": "R. Dr. Severino Cruz, 771 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-0000",
    "whatsapp": "5583990000000",
    "instagram": "@bardocuscuzcampinagrande",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "CUSCUZ10",
    "highlights": [
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://bar-do-cuscuz-campina-grande.com.br",
    "viewsCount": 120,
    "whatsappClicks": 30,
    "aboutText": "Bar do Cuscuz Campina Grande é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Cuscuz Especial com Carne de Sol e Queijo",
        "price": "R$ 38,90",
        "desc": "Cuscuz fofinho temperado com carne de sol na nata e queijo coalho.",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "Picanha na Chapa com Macaxeira Frita",
        "price": "R$ 119,90",
        "desc": "Corte nobre acompanhado de macaxeira frita, feijão verde e vinagrete.",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional CUSCUZ10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Bar do Cuscuz Campina Grande?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "restaurante-manoel-da-carne-de-sol",
    "name": "Restaurante Manoel da Carne de Sol",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "A carne de sol mais premiada da Paraíba. Mais de 30 anos servindo o melhor do sertão na avenida gastronômica de Campina.",
    "offer": "10% de desconto no almoço para clientes do portal.",
    "rating": 4.8,
    "reviewsCount": 58,
    "neighborhood": "Alto Branco",
    "address": "Av. Manoel Tavares, 1020 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-0417",
    "whatsapp": "5583990000739",
    "instagram": "@restaurantemanoeldacarnedesol",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MANOEL10",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://restaurante-manoel-da-carne-de-sol.com.br",
    "viewsCount": 149,
    "whatsappClicks": 37,
    "aboutText": "Restaurante Manoel da Carne de Sol é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Carne de Sol Completa na Brasa",
        "price": "R$ 98,00",
        "desc": "Acompanha pirão de queijo, paçoca, feijão verde e arroz de leite.",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MANOEL10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Restaurante Manoel da Carne de Sol?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "campina-grill-churrascaria-rodizio",
    "name": "Campina Grill Churrascaria & Rodízio",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Rodízio completo com mais de 22 cortes nobres de carnes, buffet de sushi e saladas variadas na Manoel Tavares.",
    "offer": "Rodízio de carnes com 15% de desconto de terça a quinta.",
    "rating": 4.9,
    "reviewsCount": 71,
    "neighborhood": "Alto Branco",
    "address": "Av. Manoel Tavares, 1900 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-0834",
    "whatsapp": "5583990001478",
    "instagram": "@campinagrillchurrascariarodizio",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "CGGRILL15",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://campina-grill-churrascaria-rodizio.com.br",
    "viewsCount": 178,
    "whatsappClicks": 44,
    "aboutText": "Campina Grill Churrascaria & Rodízio é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Rodízio Completo de Carnes Nobres",
        "price": "R$ 79,90",
        "desc": "Picanha, bife de ancho, cordeiro, costela e buffet completo.",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional CGGRILL15 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Campina Grill Churrascaria & Rodízio?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "sorveteria-pingo-de-ouro-tradicional",
    "name": "Sorveteria Pingo de Ouro Tradicional",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Fundada em 1968, a sorveteria mais amada de Campina Grande. Mais de 40 sabores artesanais de frutas regionais e cremes.",
    "offer": "Na compra de 1kg de sorvete, ganhe cobertura de chocolate artesanal.",
    "rating": 5,
    "reviewsCount": 84,
    "neighborhood": "Centro",
    "address": "R. Venâncio Neiva, 195 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-1251",
    "whatsapp": "5583990002217",
    "instagram": "@sorveteriapingodeourotradicional",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "PINGO10",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://sorveteria-pingo-de-ouro-tradicional.com.br",
    "viewsCount": 207,
    "whatsappClicks": 51,
    "aboutText": "Sorveteria Pingo de Ouro Tradicional é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Taça Tropical Pingo de Ouro",
        "price": "R$ 24,00",
        "desc": "Três bolas de sorvete de frutas regionais com calda especial.",
        "image": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PINGO10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Sorveteria Pingo de Ouro Tradicional?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "pizzaria-donna-bella-forno-a-lenha",
    "name": "Pizzaria Donna Bella Forno a Lenha",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Massas de fermentação natural de 48h, ingredientes nobres e forno a lenha clássico no coração do Catolé.",
    "offer": "Pizza grande doce grátis na compra de duas pizzas salgadas família.",
    "rating": 4.7,
    "reviewsCount": 97,
    "neighborhood": "Catolé",
    "address": "Av. Elpídio de Almeida, 1250 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-1668",
    "whatsapp": "5583990002956",
    "instagram": "@pizzariadonnabellafornoalenha",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "DONNABELLA",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Catolé"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://pizzaria-donna-bella-forno-a-lenha.com.br",
    "viewsCount": 236,
    "whatsappClicks": 58,
    "aboutText": "Pizzaria Donna Bella Forno a Lenha é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Pizza Sertaneja Especial",
        "price": "R$ 68,00",
        "desc": "Molho pelati, carne de sol desfiada, queijo coalho e toque de melaço.",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DONNABELLA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Pizzaria Donna Bella Forno a Lenha?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "la-suissa-cafe-doceria-fina",
    "name": "La Suissa Café & Doceria Fina",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Cafeteria boutique com cafés especiais colhidos na serra, tortas alemãs, croissants franceses e salgados gourmet.",
    "offer": "Combo Café Especial + Torta Holandesa por apenas R$ 22,90.",
    "rating": 4.8,
    "reviewsCount": 110,
    "neighborhood": "Prata",
    "address": "R. Afonso Campos, 310 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-2085",
    "whatsapp": "5583990003695",
    "instagram": "@lasuissacafedoceriafina",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "SUISSA10",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Prata",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://la-suissa-cafe-doceria-fina.com.br",
    "viewsCount": 265,
    "whatsappClicks": 65,
    "aboutText": "La Suissa Café & Doceria Fina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Café Filtrado V60 Especial",
        "price": "R$ 12,00",
        "desc": "Grãos arábica selecionados com notas de chocolate e caramelo.",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SUISSA10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a La Suissa Café & Doceria Fina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "bododromo-campina-grill-regional",
    "name": "Bodódromo Campina Grill Regional",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Especialistas em carne de bode assada, guisada e na brasa, servida com pirão tradicional e cachaça da terra.",
    "offer": "10% de desconto no Bode Completo para famílias aos domingos.",
    "rating": 4.9,
    "reviewsCount": 123,
    "neighborhood": "Bodocongó",
    "address": "R. Aprígio Veloso, 890 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-2502",
    "whatsapp": "5583990004434",
    "instagram": "@bododromocampinagrillregional",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "BODECG",
    "highlights": [
      "Mais tradicional de Bodocongó",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://bododromo-campina-grill-regional.com.br",
    "viewsCount": 294,
    "whatsappClicks": 72,
    "aboutText": "Bodódromo Campina Grill Regional é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Bode Assado na Brasa com Pirão",
        "price": "R$ 82,00",
        "desc": "Corte macio acompanhado de pirão, fava paraibana e arroz da terra.",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional BODECG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Bodódromo Campina Grill Regional?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "tio-sam-burguer-shakes",
    "name": "Tio Sam Burguer & Shakes",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Hambúrgueres artesanais smash e defumados na brasa, acompanhados de milk-shakes cremosos de ninho com nutella.",
    "offer": "Batata rústica grátis em qualquer combo com o cupom do portal.",
    "rating": 5,
    "reviewsCount": 136,
    "neighborhood": "Catolé",
    "address": "R. Vigário Calixto, 1420 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-2919",
    "whatsapp": "5583990005173",
    "instagram": "@tiosamburguershakes",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "TIOSAM10",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://tio-sam-burguer-shakes.com.br",
    "viewsCount": 323,
    "whatsappClicks": 79,
    "aboutText": "Tio Sam Burguer & Shakes é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Double Cheddar Bacon Smash",
        "price": "R$ 36,90",
        "desc": "Dois blends de 100g, muito cheddar cremoso e farofa de bacon.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional TIOSAM10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Tio Sam Burguer & Shakes?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "padaria-e-confeitaria-rainha-da-prata",
    "name": "Padaria e Confeitaria Rainha da Prata",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Pães quentes de hora em hora, buffet de café da manhã colonial e encomendas de bolos para festas.",
    "offer": "Café da manhã colonial com 10% de desconto nos finais de semana.",
    "rating": 4.7,
    "reviewsCount": 149,
    "neighborhood": "Prata",
    "address": "R. Rodrigues Alves, 450 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-3336",
    "whatsapp": "5583990005912",
    "instagram": "@padariaeconfeitariarainhadaprata",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "RAINHA10",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://padaria-e-confeitaria-rainha-da-prata.com.br",
    "viewsCount": 352,
    "whatsappClicks": 86,
    "aboutText": "Padaria e Confeitaria Rainha da Prata é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Cesta de Pães Artesanais",
        "price": "R$ 29,90",
        "desc": "Croissant, pão de queijo mineiro, ciabatta e pão australiano.",
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional RAINHA10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Padaria e Confeitaria Rainha da Prata?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "temaki-express-sushi-bar-campina",
    "name": "Temaki Express Sushi Bar Campina",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Sushi fresco com salmão importado, combinados especiais, hot rolls crocantes e ambiente climatizado agradável.",
    "offer": "Combo 40 peças com 15% de desconto pelo WhatsApp.",
    "rating": 4.8,
    "reviewsCount": 162,
    "neighborhood": "Alto Branco",
    "address": "Av. Manoel Tavares, 650 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-3753",
    "whatsapp": "5583990006651",
    "instagram": "@temakiexpresssushibarcampina",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "SUSHI15",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://temaki-express-sushi-bar-campina.com.br",
    "viewsCount": 381,
    "whatsappClicks": 93,
    "aboutText": "Temaki Express Sushi Bar Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Combinado Premium 32 Peças",
        "price": "R$ 89,90",
        "desc": "Sashimis de salmão maçaricado, uramakis de camarão e hossomakis.",
        "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SUSHI15 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Temaki Express Sushi Bar Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "casa-do-fondue-bistro-suico-cg",
    "name": "Casa do Fondue & Bistrô Suíço CG",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Sequência completa de fondues de queijo suíço, carnes nobres na pedra vulcânica e chocolate com frutas frescas.",
    "offer": "Sequência de Fondue para casal com 15% de desconto às quartas.",
    "rating": 4.9,
    "reviewsCount": 175,
    "neighborhood": "Mirante",
    "address": "R. Luiza Bezerra Mota, 210 - Mirante, Campina Grande - PB",
    "phone": "(83) 3321-4170",
    "whatsapp": "5583990007390",
    "instagram": "@casadofonduebistrosuicocg",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "FONDUE15",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Mirante"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://casa-do-fondue-bistro-suico-cg.com.br",
    "viewsCount": 410,
    "whatsappClicks": 100,
    "aboutText": "Casa do Fondue & Bistrô Suíço CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Mirante, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Sequência Completa de Fondue (Casal)",
        "price": "R$ 179,00",
        "desc": "Queijo gruyère, carnes nobres e chocolate ao leite suíço.",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional FONDUE15 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Casa do Fondue & Bistrô Suíço CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "cantina-ditalia-massas-vinhos",
    "name": "Cantina d'Itália Massas & Vinhos",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "A verdadeira culinária italiana no Centro de Campina. Lasanhas, fettuccine artesanal e carta de vinhos selecionada.",
    "offer": "Garrafa de vinho cortesia em contas acima de R$ 250 no jantar.",
    "rating": 5,
    "reviewsCount": 188,
    "neighborhood": "Centro",
    "address": "R. Marquês do Herval, 340 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-4587",
    "whatsapp": "5583990008129",
    "instagram": "@cantinaditaliamassasvinhos",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "ITALIAVINHO",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://cantina-ditalia-massas-vinhos.com.br",
    "viewsCount": 439,
    "whatsappClicks": 107,
    "aboutText": "Cantina d'Itália Massas & Vinhos é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Fettuccine com Frutos do Mar",
        "price": "R$ 74,00",
        "desc": "Massa fresca salteada com camarão, lula e molho pomodoro rústico.",
        "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional ITALIAVINHO ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Cantina d'Itália Massas & Vinhos?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "tapiocaria-creperia-da-rainha",
    "name": "Tapiocaria & Creperia da Rainha",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Mais de 50 recheios de tapiocas doces e salgadas feitas na goma fresca, além de crepes franceses e sucos naturais.",
    "offer": "Suco natural grátis na compra de qualquer tapioca recheada.",
    "rating": 4.7,
    "reviewsCount": 201,
    "neighborhood": "Catolé",
    "address": "Av. Brasília, 880 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-5004",
    "whatsapp": "5583990008868",
    "instagram": "@tapiocariacreperiadarainha",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "TAPIOCA",
    "highlights": [
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://tapiocaria-creperia-da-rainha.com.br",
    "viewsCount": 468,
    "whatsappClicks": 114,
    "aboutText": "Tapiocaria & Creperia da Rainha é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Tapioca de Carne de Sol com Nata",
        "price": "R$ 22,00",
        "desc": "Goma fininha recheada com carne desfiada e queijo coalho.",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional TAPIOCA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Tapiocaria & Creperia da Rainha?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "churrascaria-o-tropeiro-da-serra",
    "name": "Churrascaria O Tropeiro da Serra",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "O tradicional churrasco gaúcho com tempero nordestino. Costelão 12 horas no fogo de chão e buffet de sobremesas.",
    "offer": "10% de desconto no almoço executivo de segunda a sexta.",
    "rating": 4.8,
    "reviewsCount": 214,
    "neighborhood": "Cruzeiro",
    "address": "Av. Juscelino Kubitschek, 610 - Cruzeiro, Campina Grande - PB",
    "phone": "(83) 3321-5421",
    "whatsapp": "5583990009607",
    "instagram": "@churrascariaotropeirodaserra",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "TROPEIRO10",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://churrascaria-o-tropeiro-da-serra.com.br",
    "viewsCount": 497,
    "whatsappClicks": 121,
    "aboutText": "Churrascaria O Tropeiro da Serra é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Cruzeiro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Costela no Fogo de Chão (Individual)",
        "price": "R$ 49,90",
        "desc": "Acompanha mandioca cozida, feijão tropeiro e farofa de ovos.",
        "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional TROPEIRO10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Churrascaria O Tropeiro da Serra?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "acai-do-parque-bowls-naturais",
    "name": "Açaí do Parque & Bowls Naturais",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "O açaí mais puro e cremoso do bairro da Liberdade com mais de 30 acompanhamentos e frutas frescas da estação.",
    "offer": "Monte sua tigela de 500ml com 4 acompanhamentos livres por R$ 19,90.",
    "rating": 4.9,
    "reviewsCount": 227,
    "neighborhood": "Liberdade",
    "address": "R. Odon Bezerra, 430 - Liberdade, Campina Grande - PB",
    "phone": "(83) 3321-5838",
    "whatsapp": "5583990010346",
    "instagram": "@acaidoparquebowlsnaturais",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "ACAI10",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://acai-do-parque-bowls-naturais.com.br",
    "viewsCount": 526,
    "whatsappClicks": 128,
    "aboutText": "Açaí do Parque & Bowls Naturais é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Liberdade, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Tigela Açaí Especial 500ml",
        "price": "R$ 19,90",
        "desc": "Açaí batido sem xarope artificial com banana, granola e leite ninho.",
        "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional ACAI10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Açaí do Parque & Bowls Naturais?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "doceria-confeitaria-amor-com-acucar",
    "name": "Doceria & Confeitaria Amor com Açúcar",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Bolos de casamento, brigadeiros gourmet belgas, macarons e doces finos que encantam os paladares de Campina Grande.",
    "offer": "10% de desconto em encomendas de bolos de aniversário.",
    "rating": 5,
    "reviewsCount": 240,
    "neighborhood": "Centro",
    "address": "R. João Pessoa, 110 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-6255",
    "whatsapp": "5583990011085",
    "instagram": "@doceriaconfeitariaamorcomacucar",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "AMORDOCE",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://doceria-confeitaria-amor-com-acucar.com.br",
    "viewsCount": 555,
    "whatsappClicks": 135,
    "aboutText": "Doceria & Confeitaria Amor com Açúcar é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Bolo Red Velvet Especial",
        "price": "R$ 75,00/kg",
        "desc": "Massa aveludada com recheio cremoso de cream cheese e frutas vermelhas.",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional AMORDOCE ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Doceria & Confeitaria Amor com Açúcar?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "petiscaria-chopp-do-acude-velho",
    "name": "Petiscaria & Chopp do Açude Velho",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Vista espetacular para os Jackson do Pandeiro no Açude Velho, petiscos de boteco e chopp artesanal trincando de gelado.",
    "offer": "Chopp duplo das 17h às 20h de terça a sexta-feira.",
    "rating": 4.7,
    "reviewsCount": 253,
    "neighborhood": "Catolé",
    "address": "R. Dr. Severino Cruz, 450 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-6672",
    "whatsapp": "5583990011824",
    "instagram": "@petiscariachoppdoacudevelho",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "CHOPPVELHO",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Catolé"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://petiscaria-chopp-do-acude-velho.com.br",
    "viewsCount": 584,
    "whatsappClicks": 142,
    "aboutText": "Petiscaria & Chopp do Açude Velho é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Porção de Camarão Alho e Óleo",
        "price": "R$ 54,00",
        "desc": "Camarões selecionados na manteiga da terra e alho crocante.",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional CHOPPVELHO ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Petiscaria & Chopp do Açude Velho?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "choperia-espetaria-brasa-quente-cg",
    "name": "Choperia & Espetaria Brasa Quente CG",
    "category": "Gastronomia & Restaurantes",
    "categoryId": "gastronomia",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Mais de 20 opções de espetinhos na brasa com farofa caseira e vinagrete, música acústica e cervejas puro malte geladas.",
    "offer": "Compre 4 espetinhos gourmet e o 5º é por conta da casa.",
    "rating": 4.8,
    "reviewsCount": 266,
    "neighborhood": "Malvinas",
    "address": "R. das Malvinas, 820 - Malvinas, Campina Grande - PB",
    "phone": "(83) 3321-7089",
    "whatsapp": "5583990012563",
    "instagram": "@choperiaespetariabrasaquentecg",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "BRASA5",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Malvinas",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://choperia-espetaria-brasa-quente-cg.com.br",
    "viewsCount": 613,
    "whatsappClicks": 149,
    "aboutText": "Choperia & Espetaria Brasa Quente CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Malvinas, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Combo 5 Espetinhos Premium",
        "price": "R$ 45,00",
        "desc": "Picanha, queijo coalho com melaço, coração e medalhão de frango.",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional BRASA5 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Choperia & Espetaria Brasa Quente CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "rutra-menswear-campina-grande",
    "name": "Rutra Menswear Campina Grande",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Alfaiataria masculina premium, camisas sociais de algodão egípcio e calçados em couro legítimo para o homem exigente.",
    "offer": "15% de desconto na primeira compra de terno completo.",
    "rating": 4.9,
    "reviewsCount": 279,
    "neighborhood": "Catolé",
    "address": "Shopping Partage, Loja 140 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-7506",
    "whatsapp": "5583990013302",
    "instagram": "@rutramenswearcampinagrande",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "RUTRA15",
    "highlights": [
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://rutra-menswear-campina-grande.com.br",
    "viewsCount": 642,
    "whatsappClicks": 156,
    "aboutText": "Rutra Menswear Campina Grande é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Terno Slim Fit de Lã Fria",
        "price": "R$ 699,00",
        "desc": "Corte italiano moderno com ajuste sob medida incluso.",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional RUTRA15 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Rutra Menswear Campina Grande?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "mioche-moda-masculina-casual",
    "name": "Mioche Moda Masculina & Casual",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "A marca paraibana que conquistou o Brasil. Polos de alta qualidade, jeans confortáveis e camisaria moderna.",
    "offer": "Leve 3 camisas polo Mioche e pague apenas 2 com o cupom.",
    "rating": 5,
    "reviewsCount": 292,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 180 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-7923",
    "whatsapp": "5583990014041",
    "instagram": "@miochemodamasculinacasual",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MIOCHE3P2",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://mioche-moda-masculina-casual.com.br",
    "viewsCount": 671,
    "whatsappClicks": 163,
    "aboutText": "Mioche Moda Masculina & Casual é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Camisa Polo Piquet Mioche",
        "price": "R$ 119,90",
        "desc": "Algodão nobre com toque macio e caimento impecável.",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MIOCHE3P2 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Mioche Moda Masculina & Casual?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "boutique-bella-donna-vestidos-festa",
    "name": "Boutique Bella Donna Vestidos & Festa",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Vestidos de festa, madrinhas e noivas. Peças exclusivas de alta costura com bordados manuais sofisticados.",
    "offer": "Ajuste e consultoria de imagem grátis na compra de vestidos de gala.",
    "rating": 4.7,
    "reviewsCount": 305,
    "neighborhood": "Prata",
    "address": "R. Afonso Campos, 210 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-8340",
    "whatsapp": "5583990014780",
    "instagram": "@boutiquebelladonnavestidosfesta",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "BELLAFESTA",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://boutique-bella-donna-vestidos-festa.com.br",
    "viewsCount": 700,
    "whatsappClicks": 170,
    "aboutText": "Boutique Bella Donna Vestidos & Festa é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Vestido Longo Madrinha Fino",
        "price": "R$ 480,00",
        "desc": "Tecido fluido em crepe de seda com decote estruturado.",
        "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional BELLAFESTA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Boutique Bella Donna Vestidos & Festa?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "couro-real-bolsas-calcados-paraiba",
    "name": "Couro Real Bolsas & Calçados Paraíba",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Bolsas, sapatos, sandálias e carteiras produzidos com o melhor couro legítimo artesanal da Paraíba.",
    "offer": "10% de desconto à vista e garantia vitalícia na costura.",
    "rating": 4.8,
    "reviewsCount": 318,
    "neighborhood": "Centro",
    "address": "R. Venâncio Neiva, 230 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-8757",
    "whatsapp": "5583990015519",
    "instagram": "@courorealbolsascalcadosparaiba",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "COUROCG",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://couro-real-bolsas-calcados-paraiba.com.br",
    "viewsCount": 729,
    "whatsappClicks": 177,
    "aboutText": "Couro Real Bolsas & Calçados Paraíba é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Bolsa Tote em Couro Legítimo",
        "price": "R$ 289,00",
        "desc": "Acabamento manual premium com divisórias internas e alça reforçada.",
        "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional COUROCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Couro Real Bolsas & Calçados Paraíba?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "dona-flor-moda-feminina-casual-chic",
    "name": "Dona Flor Moda Feminina Casual & Chic",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Coleções elegantes e contemporâneas para mulheres modernas. Linho puro, conjuntos de alfaiataria e estampas exclusivas.",
    "offer": "Cupom de 10% de desconto na primeira compra presencial ou online.",
    "rating": 4.9,
    "reviewsCount": 331,
    "neighborhood": "Catolé",
    "address": "Av. Brasília, 1120 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-9174",
    "whatsapp": "5583990016258",
    "instagram": "@donaflormodafemininacasualchic",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "DONAFLOR10",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Catolé"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://dona-flor-moda-feminina-casual-chic.com.br",
    "viewsCount": 758,
    "whatsappClicks": 184,
    "aboutText": "Dona Flor Moda Feminina Casual & Chic é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Conjunto Alfaiataria em Linho",
        "price": "R$ 249,00",
        "desc": "Colete estruturado e calça pantalona fresca para o verão.",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DONAFLOR10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Dona Flor Moda Feminina Casual & Chic?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "armazem-do-jeans-campina-grande",
    "name": "Armazém do Jeans Campina Grande",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "O maior estoque de calças, jaquetas e shorts jeans de Campina Grande com preços direto do polo de confecções.",
    "offer": "Compre 3 calças jeans e ganhe um cinto de couro legítimo.",
    "rating": 5,
    "reviewsCount": 344,
    "neighborhood": "Centro",
    "address": "R. Cardoso Vieira, 140 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-9591",
    "whatsapp": "5583990016997",
    "instagram": "@armazemdojeanscampinagrande",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "JEANSCG",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://armazem-do-jeans-campina-grande.com.br",
    "viewsCount": 787,
    "whatsappClicks": 191,
    "aboutText": "Armazém do Jeans Campina Grande é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Calça Jeans Premium Modeladora",
        "price": "R$ 139,90",
        "desc": "Jeans com elastano que veste perfeitamente sem deformar.",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional JEANSCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Armazém do Jeans Campina Grande?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "sapataria-sapatilhas-rainha-da-moda",
    "name": "Sapataria & Sapatilhas Rainha da Moda",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Tênis casuais, saltos altos, rasteirinhas e scarpins com o máximo de conforto para os seus pés.",
    "offer": "Segundo par de calçados com 30% de desconto pelo portal.",
    "rating": 4.7,
    "reviewsCount": 357,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 95 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-0009",
    "whatsapp": "5583990017736",
    "instagram": "@sapatariasapatilhasrainhadamoda",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "SAPATILHA30",
    "highlights": [
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://sapataria-sapatilhas-rainha-da-moda.com.br",
    "viewsCount": 816,
    "whatsappClicks": 198,
    "aboutText": "Sapataria & Sapatilhas Rainha da Moda é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Scarpin Clássico em Verniz",
        "price": "R$ 169,90",
        "desc": "Salto confortável de 7cm com palmilha acolchoada para o dia a dia.",
        "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SAPATILHA30 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Sapataria & Sapatilhas Rainha da Moda?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "delas-lingerie-pijamas-finos",
    "name": "D'Elas Lingerie & Pijamas Finos",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Moda íntima sofisticada, pijamas em seda e cetim, bodies de renda e peças confortáveis para todas as fases.",
    "offer": "10% de desconto em toda a linha de pijamas de inverno e verão.",
    "rating": 4.8,
    "reviewsCount": 370,
    "neighborhood": "Prata",
    "address": "R. Irineu Joffily, 175 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-0426",
    "whatsapp": "5583990018475",
    "instagram": "@delaslingeriepijamasfinos",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "DELAS10",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://delas-lingerie-pijamas-finos.com.br",
    "viewsCount": 845,
    "whatsappClicks": 205,
    "aboutText": "D'Elas Lingerie & Pijamas Finos é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Conjunto Lingerie Renda Chantilly",
        "price": "R$ 98,00",
        "desc": "Sutiã estruturado sem bojo e calcinha sem costura marcante.",
        "image": "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DELAS10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a D'Elas Lingerie & Pijamas Finos?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "sol-mar-moda-praia-fitness-cg",
    "name": "Sol & Mar Moda Praia & Fitness CG",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Biquínis, maiôs com proteção UV50+, saídas de praia em crochê e roupas de academia de alta compressão.",
    "offer": "Na compra de 1 biquíni completo, ganhe uma viseira solar exclusiva.",
    "rating": 4.9,
    "reviewsCount": 383,
    "neighborhood": "Catolé",
    "address": "R. Vigário Calixto, 820 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-0843",
    "whatsapp": "5583990019214",
    "instagram": "@solmarmodapraiafitnesscg",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "PRAIACG",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://sol-mar-moda-praia-fitness-cg.com.br",
    "viewsCount": 874,
    "whatsappClicks": 212,
    "aboutText": "Sol & Mar Moda Praia & Fitness CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Biquíni Ripple Dupla Face UV50+",
        "price": "R$ 139,00",
        "desc": "Tecido antimicrobiano com proteção solar máxima.",
        "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PRAIACG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Sol & Mar Moda Praia & Fitness CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "espaco-do-tenis-streetwear-cg",
    "name": "Espaço do Tênis & Streetwear CG",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Sneakers exclusivos, marcas originais de streetwear, bonés de colecionador e camisetas oversized.",
    "offer": "Frete grátis para toda Campina Grande em pedidos pelo WhatsApp.",
    "rating": 5,
    "reviewsCount": 396,
    "neighborhood": "Centro",
    "address": "R. Floriano Peixoto, 450 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-1260",
    "whatsapp": "5583990019953",
    "instagram": "@espacodotenisstreetwearcg",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "SNEAKERCG",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://espaco-do-tenis-streetwear-cg.com.br",
    "viewsCount": 903,
    "whatsappClicks": 219,
    "aboutText": "Espaço do Tênis & Streetwear CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Tênis Streetwear Retrô Original",
        "price": "R$ 389,90",
        "desc": "Design urbano icônico com amortecimento reforçado e nota fiscal.",
        "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SNEAKERCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Espaço do Tênis & Streetwear CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "mundo-infantil-kids-bebe",
    "name": "Mundo Infantil Kids & Bebê",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Roupas infantis de 0 a 16 anos, enxovais para recém-nascidos e calçados ortopédicos com atendimento carinhoso.",
    "offer": "15% de desconto à vista em pacotes de enxoval de bebê.",
    "rating": 4.7,
    "reviewsCount": 409,
    "neighborhood": "Alto Branco",
    "address": "R. João Suassuna, 520 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-1677",
    "whatsapp": "5583990020692",
    "instagram": "@mundoinfantilkidsbebe",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "KIDS15",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Alto Branco"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://mundo-infantil-kids-bebe.com.br",
    "viewsCount": 132,
    "whatsappClicks": 226,
    "aboutText": "Mundo Infantil Kids & Bebê é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Kit Enxoval Bebê 5 Peças Algodão",
        "price": "R$ 179,00",
        "desc": "Macacão, body, touca e luvinhas 100% algodão antialérgico.",
        "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional KIDS15 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Mundo Infantil Kids & Bebê?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "requinte-joias-relogios-suicos",
    "name": "Requinte Jóias & Relógios Suíços",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Alianças de casamento em ouro 18k, relógios clássicos com garantia internacional e joias finas com diamantes.",
    "offer": "Gravação interna gratuita de nomes em qualquer aliança de ouro.",
    "rating": 4.8,
    "reviewsCount": 422,
    "neighborhood": "Centro",
    "address": "R. Marquês do Herval, 110 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-2094",
    "whatsapp": "5583990021431",
    "instagram": "@requintejoiasrelogiossuicos",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "REQUINTECG",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://requinte-joias-relogios-suicos.com.br",
    "viewsCount": 161,
    "whatsappClicks": 233,
    "aboutText": "Requinte Jóias & Relógios Suíços é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Par de Alianças Ouro 18k Tradicional",
        "price": "R$ 1.490,00",
        "desc": "Ouro certificado com garantia eterna e estojo de veludo nobre.",
        "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional REQUINTECG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Requinte Jóias & Relógios Suíços?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "loja-do-vaqueiro-country-sertanejo",
    "name": "Loja do Vaqueiro & Country Sertanejo",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Botas texanas em couro exótico, chapéus de feltro legítimos, camisas xadrez e fivelas campeiras.",
    "offer": "10% de desconto na compra de bota texana + cinto campeiro.",
    "rating": 4.9,
    "reviewsCount": 435,
    "neighborhood": "Liberdade",
    "address": "R. Rio Branco, 320 - Liberdade, Campina Grande - PB",
    "phone": "(83) 3321-2511",
    "whatsapp": "5583990022170",
    "instagram": "@lojadovaqueirocountrysertanejo",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "VAQUEIRO10",
    "highlights": [
      "Mais tradicional de Liberdade",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://loja-do-vaqueiro-country-sertanejo.com.br",
    "viewsCount": 190,
    "whatsappClicks": 240,
    "aboutText": "Loja do Vaqueiro & Country Sertanejo é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Liberdade, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Bota Texana Artesanal Couro Bovino",
        "price": "R$ 380,00",
        "desc": "Solado de couro costurado à mão com cano bordado tradicional.",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional VAQUEIRO10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Loja do Vaqueiro & Country Sertanejo?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "otica-relojoaria-visao-de-prata",
    "name": "Ótica & Relojoaria Visão de Prata",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Armações estilosas das principais grifes de óculos solares e de grau, além de conserto de relógios automáticos.",
    "offer": "Óculos de sol polarizados com 20% de desconto no Pix.",
    "rating": 5,
    "reviewsCount": 448,
    "neighborhood": "Prata",
    "address": "R. Duque de Caxias, 85 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-2928",
    "whatsapp": "5583990022909",
    "instagram": "@oticarelojoariavisaodeprata",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "VISAOPRATA",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://otica-relojoaria-visao-de-prata.com.br",
    "viewsCount": 219,
    "whatsappClicks": 247,
    "aboutText": "Ótica & Relojoaria Visão de Prata é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Óculos Solar Polarizado com Proteção UV400",
        "price": "R$ 219,00",
        "desc": "Lentes antirreflexo de alta nitidez para direção e praia.",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional VISAOPRATA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Ótica & Relojoaria Visão de Prata?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "camisaria-borborema-sob-medida",
    "name": "Camisaria Borborema Sob Medida",
    "category": "Moda & Acessórios",
    "categoryId": "moda",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Camisas masculinas e femininas sob medida. Escolha o tecido, o colarinho e os punhos para um caimento sem igual.",
    "offer": "Na encomenda de 3 camisas sob medida, ganhe a 4ª camisa de presente.",
    "rating": 4.7,
    "reviewsCount": 461,
    "neighborhood": "Centro",
    "address": "R. Venâncio Neiva, 310 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-3345",
    "whatsapp": "5583990023648",
    "instagram": "@camisariaborboremasobmedida",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "CAMISASOBMEDIDA",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://camisaria-borborema-sob-medida.com.br",
    "viewsCount": 248,
    "whatsappClicks": 254,
    "aboutText": "Camisaria Borborema Sob Medida é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Camisa Social Algodão Egípcio Sob Medida",
        "price": "R$ 195,00",
        "desc": "Costura milimétrica ajustada ao seu biotipo com iniciais bordadas.",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional CAMISASOBMEDIDA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Camisaria Borborema Sob Medida?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "redepharma-drogaria-manipulacao-cg",
    "name": "Redepharma Drogaria & Manipulação CG",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "A maior rede de farmácias da Paraíba com laboratório próprio de manipulação, medicamentos de referência e entrega expressa.",
    "offer": "15% de desconto em fórmulas manipuladas com envio de receita via WhatsApp.",
    "rating": 4.8,
    "reviewsCount": 474,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 310 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-3762",
    "whatsapp": "5583990024387",
    "instagram": "@redepharmadrogariamanipulacaocg",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "REDEPHARMA15",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://redepharma-drogaria-manipulacao-cg.com.br",
    "viewsCount": 277,
    "whatsappClicks": 261,
    "aboutText": "Redepharma Drogaria & Manipulação CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Fórmula Manipulada Personalizada",
        "price": "Sob Consulta",
        "desc": "Matérias-primas importadas com controle rigoroso de qualidade farmacêutica.",
        "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional REDEPHARMA15 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Redepharma Drogaria & Manipulação CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "clinica-integrada-dr-severino-alves",
    "name": "Clínica Integrada Dr. Severino Alves",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Centro médico multidisciplinar com cardiologia, dermatologia, pediatria e exames laboratoriais no polo médico da Prata.",
    "offer": "Check-up preventivo completo com 10% de desconto pelo portal.",
    "rating": 4.9,
    "reviewsCount": 487,
    "neighborhood": "Prata",
    "address": "R. Rodrigues Alves, 780 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-4179",
    "whatsapp": "5583990025126",
    "instagram": "@clinicaintegradadrseverinoalves",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "CLINICAPRATA",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Prata"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://clinica-integrada-dr-severino-alves.com.br",
    "viewsCount": 306,
    "whatsappClicks": 268,
    "aboutText": "Clínica Integrada Dr. Severino Alves é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Consulta Médica Especializada",
        "price": "R$ 180,00",
        "desc": "Atendimento humanizado com médicos especialistas renomados.",
        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional CLINICAPRATA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Clínica Integrada Dr. Severino Alves?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "oticas-diniz-campina-grande",
    "name": "Óticas Diniz Campina Grande",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Armações nacionais e importadas, tecnologia alemã em lentes multifocais e garantia total de adaptação visual.",
    "offer": "Armação gratuita na compra do bloco de lentes multifocais digitais.",
    "rating": 5,
    "reviewsCount": 50,
    "neighborhood": "Centro",
    "address": "R. Afonso Campos, 40 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-4596",
    "whatsapp": "5583990025865",
    "instagram": "@oticasdinizcampinagrande",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "DINIZCG",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://oticas-diniz-campina-grande.com.br",
    "viewsCount": 335,
    "whatsappClicks": 275,
    "aboutText": "Óticas Diniz Campina Grande é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Lente Multifocal Digital Antirreflexo",
        "price": "A partir de R$ 390",
        "desc": "Amplo campo de visão com proteção contra luz azul de telas.",
        "image": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DINIZCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Óticas Diniz Campina Grande?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "laboratorio-maurilio-de-almeida-diagnosticos",
    "name": "Laboratório Maurílio de Almeida Diagnósticos",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Pioneirismo em exames clínicos, genéticos e toxicológicos em Campina Grande com agilidade e coleta domiciliar sem taxa.",
    "offer": "Coleta domiciliar gratuita em toda a zona urbana de Campina Grande.",
    "rating": 4.7,
    "reviewsCount": 63,
    "neighborhood": "Centro",
    "address": "R. Treze de Maio, 190 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-5013",
    "whatsapp": "5583990026604",
    "instagram": "@laboratoriomauriliodealmeidadiagnosticos",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "LABALMEIDA",
    "highlights": [
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://laboratorio-maurilio-de-almeida-diagnosticos.com.br",
    "viewsCount": 364,
    "whatsappClicks": 32,
    "aboutText": "Laboratório Maurílio de Almeida Diagnósticos é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Painel de Exames Toxicológicos e Rotina",
        "price": "Sob Consulta",
        "desc": "Resultados online rápidos com laudo assinado digitalmente.",
        "image": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional LABALMEIDA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Laboratório Maurílio de Almeida Diagnósticos?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "academia-korpus-centro-catole",
    "name": "Academia Korpus Centro & Catolé",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "A maior estrutura fitness de Campina Grande. Musculação com equipamentos biomecânicos modernos, piscina aquecida e lutas.",
    "offer": "Matrícula grátis + 1 mês de personal trainer cortesia no plano anual.",
    "rating": 4.8,
    "reviewsCount": 76,
    "neighborhood": "Catolé",
    "address": "Av. Pref. Severino Bezerra Cabral, 1050 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-5430",
    "whatsapp": "5583990027343",
    "instagram": "@academiakorpuscentrocatole",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "KORPUSFIT",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://academia-korpus-centro-catole.com.br",
    "viewsCount": 393,
    "whatsappClicks": 39,
    "aboutText": "Academia Korpus Centro & Catolé é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Plano Anual Acesso Total",
        "price": "R$ 139,90/mês",
        "desc": "Acesso livre à musculação, spinning, natação e aulas coletivas.",
        "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional KORPUSFIT ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Academia Korpus Centro & Catolé?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "oralsin-implantes-odontologia-digital",
    "name": "OralSin Implantes & Odontologia Digital",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Referência em implantes dentários com carga rápida, alinhadores invisíveis e estética do sorriso com scanner 3D.",
    "offer": "Avaliação odontológica completa com câmera intraoral sem custos.",
    "rating": 4.9,
    "reviewsCount": 89,
    "neighborhood": "Prata",
    "address": "R. Índios Cariris, 280 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-5847",
    "whatsapp": "5583990028082",
    "instagram": "@oralsinimplantesodontologiadigital",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "ORALSINCG",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://oralsin-implantes-odontologia-digital.com.br",
    "viewsCount": 422,
    "whatsappClicks": 46,
    "aboutText": "OralSin Implantes & Odontologia Digital é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Tratamento com Alinhadores Invisíveis",
        "price": "Sob Consulta",
        "desc": "Alinhamento dentário estético e confortável sem bráquetes metálicos.",
        "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional ORALSINCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a OralSin Implantes & Odontologia Digital?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "espaco-pilates-fisioterapia-movimente",
    "name": "Espaço Pilates & Fisioterapia Movimente",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Studio completo de Pilates clássico e contemporâneo com foco em alívio de dores nas costas, postura e reabilitação física.",
    "offer": "Primeira aula experimental gratuita com fisioterapeuta pós-graduado.",
    "rating": 5,
    "reviewsCount": 102,
    "neighborhood": "Mirante",
    "address": "R. Luiza Bezerra Mota, 410 - Mirante, Campina Grande - PB",
    "phone": "(83) 3321-6264",
    "whatsapp": "5583990028821",
    "instagram": "@espacopilatesfisioterapiamovimente",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "PILATESCG",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://espaco-pilates-fisioterapia-movimente.com.br",
    "viewsCount": 451,
    "whatsappClicks": 53,
    "aboutText": "Espaço Pilates & Fisioterapia Movimente é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Mirante, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Mensalidade Pilates em Aparelhos 2x/Semana",
        "price": "R$ 190,00",
        "desc": "Aulas em grupos reduzidos de até 3 alunos por fisioterapeuta.",
        "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PILATESCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Espaço Pilates & Fisioterapia Movimente?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "clinica-de-nutricao-emagrecimento-nutrivida",
    "name": "Clínica de Nutrição & Emagrecimento NutriVida",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Acompanhamento nutricional individualizado com bioimpedância de precisão, planos para hipertrofia e reeducação alimentar.",
    "offer": "Exame de Bioimpedância InBody cortesia na primeira consulta.",
    "rating": 4.7,
    "reviewsCount": 115,
    "neighborhood": "Alto Branco",
    "address": "Av. Manoel Tavares, 320 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-6681",
    "whatsapp": "5583990029560",
    "instagram": "@clinicadenutricaoemagrecimentonutrivida",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "NUTRIVIDA",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Alto Branco"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://clinica-de-nutricao-emagrecimento-nutrivida.com.br",
    "viewsCount": 480,
    "whatsappClicks": 60,
    "aboutText": "Clínica de Nutrição & Emagrecimento NutriVida é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Consulta Nutricional + Bioimpedância Tetrapolar",
        "price": "R$ 160,00",
        "desc": "Plano alimentar pelo app com acompanhamento contínuo no WhatsApp.",
        "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional NUTRIVIDA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Clínica de Nutrição & Emagrecimento NutriVida?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "farmacia-de-manipulacao-bioformula-cg",
    "name": "Farmácia de Manipulação BioFórmula CG",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Manipulação de cosméticos dermatológicos, fitoterápicos e suplementos de performance esportiva com garantia farmacêutica.",
    "offer": "10% de desconto no Pix e entrega sem taxa em Campina Grande.",
    "rating": 4.8,
    "reviewsCount": 128,
    "neighborhood": "Centro",
    "address": "R. Peregrino de Carvalho, 85 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-7098",
    "whatsapp": "5583990030299",
    "instagram": "@farmaciademanipulacaobioformulacg",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "BIOFORMULA",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://farmacia-de-manipulacao-bioformula-cg.com.br",
    "viewsCount": 509,
    "whatsappClicks": 67,
    "aboutText": "Farmácia de Manipulação BioFórmula CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Sérum Anti-idade com Ácido Hialurônico",
        "price": "R$ 78,00",
        "desc": "Fórmula manipulada com alta concentração de ativos rejuvenescedores.",
        "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional BIOFORMULA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Farmácia de Manipulação BioFórmula CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "studio-de-estetica-avancada-botox-mariana-lima",
    "name": "Studio de Estética Avançada & Botox Mariana Lima",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Harmonização facial com toxina botulínica, preenchimentos labiais com ácido hialurônico e drenagem linfática pós-operatória.",
    "offer": "Aplicação de Botox facial completo com 15% de desconto no Pix.",
    "rating": 4.9,
    "reviewsCount": 141,
    "neighborhood": "Catolé",
    "address": "R. Vigário Calixto, 1100 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-7515",
    "whatsapp": "5583990031038",
    "instagram": "@studiodeesteticaavancadabotoxmarianalima",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "BOTOXCG",
    "highlights": [
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://studio-de-estetica-avancada-botox-mariana-lima.com.br",
    "viewsCount": 538,
    "whatsappClicks": 74,
    "aboutText": "Studio de Estética Avançada & Botox Mariana Lima é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Toxina Botulínica Facial Completa",
        "price": "R$ 750,00",
        "desc": "Linhas de expressão da testa, glabela e pés de galinha com retoque.",
        "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional BOTOXCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Studio de Estética Avançada & Botox Mariana Lima?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "espaco-psicologico-terapias-mente-sa",
    "name": "Espaço Psicológico & Terapias Mente Sã",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Atendimento psicológico clínico para adultos, adolescentes e casais. Abordagem cognitivo-comportamental acolhedora.",
    "offer": "Primeira sessão de acolhimento com valor especial de apresentação.",
    "rating": 5,
    "reviewsCount": 154,
    "neighborhood": "Prata",
    "address": "R. Duque de Caxias, 420 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-7932",
    "whatsapp": "5583990031777",
    "instagram": "@espacopsicologicoterapiasmentesa",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MENTESA",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://espaco-psicologico-terapias-mente-sa.com.br",
    "viewsCount": 567,
    "whatsappClicks": 81,
    "aboutText": "Espaço Psicológico & Terapias Mente Sã é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Sessão de Psicoterapia Individual (50 min)",
        "price": "R$ 130,00",
        "desc": "Atendimento presencial climatizado no bairro da Prata ou online.",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MENTESA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Espaço Psicológico & Terapias Mente Sã?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "centro-auditivo-campinense-aparelhos",
    "name": "Centro Auditivo Campinense Aparelhos",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Exames de audiometria computadorizada e adaptação dos aparelhos auditivos recarregáveis e invisíveis mais modernos do mundo.",
    "offer": "Teste domiciliar grátis de aparelho auditivo por 7 dias sem compromisso.",
    "rating": 4.7,
    "reviewsCount": 167,
    "neighborhood": "Centro",
    "address": "R. Venâncio Neiva, 180 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-8349",
    "whatsapp": "5583990032516",
    "instagram": "@centroauditivocampinenseaparelhos",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "OUVIRBEM",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://centro-auditivo-campinense-aparelhos.com.br",
    "viewsCount": 596,
    "whatsappClicks": 88,
    "aboutText": "Centro Auditivo Campinense Aparelhos é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Aparelho Auditivo Recarregável Bluetooth",
        "price": "Sob Consulta",
        "desc": "Conexão direta com smartphone para ligações e músicas sem ruído.",
        "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional OUVIRBEM ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Centro Auditivo Campinense Aparelhos?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "crossfit-borborema-centro-de-treinamento",
    "name": "CrossFit Borborema Centro de Treinamento",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Box oficial com treinos de alta intensidade que queimam gordura e constroem massa magra com acompanhamento de coaches certificados.",
    "offer": "Semana inteira de treinos experimentais sem custo para novatos.",
    "rating": 4.8,
    "reviewsCount": 180,
    "neighborhood": "Bodocongó",
    "address": "R. Aprígio Veloso, 1200 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-8766",
    "whatsapp": "5583990033255",
    "instagram": "@crossfitborboremacentrodetreinamento",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "CROSSBORBOREMA",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://crossfit-borborema-centro-de-treinamento.com.br",
    "viewsCount": 625,
    "whatsappClicks": 95,
    "aboutText": "CrossFit Borborema Centro de Treinamento é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Plano Ilimitado CrossFit",
        "price": "R$ 170,00/mês",
        "desc": "Aulas em diversos horários das 06h às 21h com levantamento de peso e ginástica.",
        "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional CROSSBORBOREMA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a CrossFit Borborema Centro de Treinamento?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "podologia-cuidados-dos-pes-campina",
    "name": "Podologia & Cuidados dos Pés Campina",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Tratamento de unhas encravadas, calosidades, pés diabéticos e reflexologia podal com esterilização cirúrgica em autoclave.",
    "offer": "Hidratação profunda com parafina quente de brinde no primeiro atendimento.",
    "rating": 4.9,
    "reviewsCount": 193,
    "neighborhood": "Centro",
    "address": "R. Floriano Peixoto, 280 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-9183",
    "whatsapp": "5583990033994",
    "instagram": "@podologiacuidadosdospescampina",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "PESLEVES",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://podologia-cuidados-dos-pes-campina.com.br",
    "viewsCount": 654,
    "whatsappClicks": 102,
    "aboutText": "Podologia & Cuidados dos Pés Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Sessão Completa de Podologia Preventiva",
        "price": "R$ 90,00",
        "desc": "Higienização, remoção de cutículas mortas e massagem relaxante.",
        "image": "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PESLEVES ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Podologia & Cuidados dos Pés Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "drogaria-sao-paulo-campina-grande",
    "name": "Drogaria São Paulo Campina Grande",
    "category": "Saúde & Óticas",
    "categoryId": "saude",
    "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Medicamentos genéricos com até 60% de desconto, atendimento 24h e linha completa de produtos de higiene e cuidados para o bebê.",
    "offer": "Aferição de pressão e teste de glicemia gratuitos todos os sábados.",
    "rating": 5,
    "reviewsCount": 206,
    "neighborhood": "Liberdade",
    "address": "R. Odon Bezerra, 190 - Liberdade, Campina Grande - PB",
    "phone": "(83) 3321-9600",
    "whatsapp": "5583990034733",
    "instagram": "@drogariasaopaulocampinagrande",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "DROGARIASP",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Liberdade",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://drogaria-sao-paulo-campina-grande.com.br",
    "viewsCount": 683,
    "whatsappClicks": 109,
    "aboutText": "Drogaria São Paulo Campina Grande é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Liberdade, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Medicamentos Genéricos e Similares",
        "price": "Sob Consulta",
        "desc": "Os menores preços da zona leste de Campina com entrega rápida.",
        "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DROGARIASP ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Drogaria São Paulo Campina Grande?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "istore-campina-apple-assistencia-express",
    "name": "iStore Campina Apple & Assistência Express",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Especialistas em iPhones novos e seminovos com 1 ano de garantia, troca de vidro e bateria em 35 minutos com peças originais.",
    "offer": "Película 3D de brinde e carregador rápido com 20% de desconto.",
    "rating": 4.7,
    "reviewsCount": 219,
    "neighborhood": "Catolé",
    "address": "Av. Brasília, 480 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-0018",
    "whatsapp": "5583990035472",
    "instagram": "@istorecampinaappleassistenciaexpress",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "ISTORECG",
    "highlights": [
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://istore-campina-apple-assistencia-express.com.br",
    "viewsCount": 712,
    "whatsappClicks": 116,
    "aboutText": "iStore Campina Apple & Assistência Express é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Troca de Tela iPhone Express (40 min)",
        "price": "A partir de R$ 180",
        "desc": "Display original com calibração TrueTone e garantia escrita de 6 meses.",
        "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80"
      },
      {
        "name": "iPhone 13 128GB Seminovo Impecável",
        "price": "R$ 2.890,00",
        "desc": "Saúde de bateria acima de 85%, sem marcas e com 1 ano de garantia.",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional ISTORECG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a iStore Campina Apple & Assistência Express?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "master-informatica-notebooks-cg",
    "name": "Master Informática & Notebooks CG",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Conserto de placas-mãe de notebooks, upgrades de SSD, montagem de PCs Gamer de alta performance e venda de periféricos.",
    "offer": "Upgrade para SSD 240GB com formatação e backup por apenas R$ 169,90.",
    "rating": 4.8,
    "reviewsCount": 232,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 420 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-0435",
    "whatsapp": "5583990036211",
    "instagram": "@masterinformaticanotebookscg",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MASTERSSD",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://master-informatica-notebooks-cg.com.br",
    "viewsCount": 741,
    "whatsappClicks": 123,
    "aboutText": "Master Informática & Notebooks CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Manutenção Preventiva e Troca de Pasta Térmica",
        "price": "R$ 90,00",
        "desc": "Limpeza profunda de ventoinhas, pasta de prata e otimização do Windows.",
        "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MASTERSSD ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Master Informática & Notebooks CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "gamer-zone-campina-pecas-consoles",
    "name": "Gamer Zone Campina Peças & Consoles",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Tudo para games: PlayStation 5, Xbox Series, Nintendo Switch, cadeiras ergonômicas e monitores 144Hz para eSports.",
    "offer": "10% de desconto à vista em jogos físicos e periféricos gamer.",
    "rating": 4.9,
    "reviewsCount": 245,
    "neighborhood": "Prata",
    "address": "R. Duque de Caxias, 510 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-0852",
    "whatsapp": "5583990036950",
    "instagram": "@gamerzonecampinapecasconsoles",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "GAMERCG",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://gamer-zone-campina-pecas-consoles.com.br",
    "viewsCount": 770,
    "whatsappClicks": 130,
    "aboutText": "Gamer Zone Campina Peças & Consoles é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Controle Sem Fio PS5 DualSense",
        "price": "R$ 389,90",
        "desc": "Gatilhos adaptáveis com resposta tátil imersiva e garantia oficial Sony.",
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional GAMERCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Gamer Zone Campina Peças & Consoles?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "megasom-acessorios-audio-bluetooth",
    "name": "MegaSom Acessórios & Áudio Bluetooth",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Caixas de som JBL originais, fones de ouvido com cancelamento ativo de ruído, microfones para podcast e iluminação ring light.",
    "offer": "Fone de ouvido sem fio TWS com 20% de desconto no Pix.",
    "rating": 5,
    "reviewsCount": 258,
    "neighborhood": "Centro",
    "address": "R. Venâncio Neiva, 75 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-1269",
    "whatsapp": "5583990037689",
    "instagram": "@megasomacessoriosaudiobluetooth",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MEGASOM20",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://megasom-acessorios-audio-bluetooth.com.br",
    "viewsCount": 799,
    "whatsappClicks": 137,
    "aboutText": "MegaSom Acessórios & Áudio Bluetooth é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Caixa de Som Bluetooth À Prova D'Água",
        "price": "R$ 279,00",
        "desc": "Bateria de até 12 horas contínuas de som potente com graves profundos.",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MEGASOM20 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a MegaSom Acessórios & Áudio Bluetooth?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "techfix-assistencia-multimarcas-android-xiaomi",
    "name": "TechFix Assistência Multimarcas Android & Xiaomi",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Especialistas em reparos rápidos para Samsung Galaxy, Motorola e Xiaomi. Troca de conectores de carga tipo C e vidros.",
    "offer": "Troque a bateria do seu celular e ganhe um cabo de carregamento turbo.",
    "rating": 4.7,
    "reviewsCount": 271,
    "neighborhood": "Bodocongó",
    "address": "R. Aprígio Veloso, 410 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-1686",
    "whatsapp": "5583990038428",
    "instagram": "@techfixassistenciamultimarcasandroidxiaomi",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "TECHFIXCG",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Bodocongó"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://techfix-assistencia-multimarcas-android-xiaomi.com.br",
    "viewsCount": 828,
    "whatsappClicks": 144,
    "aboutText": "TechFix Assistência Multimarcas Android & Xiaomi é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Troca de Conector de Carga e Microfone",
        "price": "R$ 75,00",
        "desc": "Solda de precisão para celulares que não carregam ou estão com mau contato.",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional TECHFIXCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a TechFix Assistência Multimarcas Android & Xiaomi?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "smarthouse-automacao-seguranca-residencial",
    "name": "SmartHouse Automação & Segurança Residencial",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Fechaduras digitais biométricas, câmeras Wi-Fi com visão noturna, lâmpadas inteligentes integradas com Alexa e alarmes.",
    "offer": "Instalação inclusa sem custo na compra de fechadura digital biométrica.",
    "rating": 4.8,
    "reviewsCount": 284,
    "neighborhood": "Mirante",
    "address": "R. Luiza Bezerra Mota, 580 - Mirante, Campina Grande - PB",
    "phone": "(83) 3321-2103",
    "whatsapp": "5583990039167",
    "instagram": "@smarthouseautomacaosegurancaresidencial",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "SMARTHOUSE",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Mirante",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://smarthouse-automacao-seguranca-residencial.com.br",
    "viewsCount": 857,
    "whatsappClicks": 151,
    "aboutText": "SmartHouse Automação & Segurança Residencial é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Mirante, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Fechadura Digital Biométrica com Senha e App",
        "price": "R$ 589,00",
        "desc": "Abertura por impressão digital, senha ou smartphone com travamento automático.",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SMARTHOUSE ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a SmartHouse Automação & Segurança Residencial?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "drones-action-cams-campina",
    "name": "Drones & Action Cams Campina",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Venda e manutenção de drones DJI, câmeras GoPro, estabilizadores gimbals e acessórios para criadores de conteúdo.",
    "offer": "Curso básico de pilotagem de drone grátis na compra de qualquer modelo 4K.",
    "rating": 4.9,
    "reviewsCount": 297,
    "neighborhood": "Alto Branco",
    "address": "Av. Manoel Tavares, 890 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-2520",
    "whatsapp": "5583990039906",
    "instagram": "@dronesactioncamscampina",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "DRONECG",
    "highlights": [
      "Mais tradicional de Alto Branco",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://drones-action-cams-campina.com.br",
    "viewsCount": 886,
    "whatsappClicks": 158,
    "aboutText": "Drones & Action Cams Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Drone 4K Compacto com Estabilizador de 3 Eixos",
        "price": "R$ 3.490,00",
        "desc": "Alcance de 10km, resistência ao vento e sensores anti-colisão inteligentes.",
        "image": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DRONECG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Drones & Action Cams Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "rede-net-provedor-de-internet-fibra-optica-cg",
    "name": "Rede Net Provedor de Internet Fibra Óptica CG",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Planos de internet 100% fibra óptica com ultravelocidade, roteadores Wi-Fi 6 de última geração e suporte 24h na cidade.",
    "offer": "Instalação e roteador Wi-Fi 6 grátis nos planos a partir de 400 Mega.",
    "rating": 5,
    "reviewsCount": 310,
    "neighborhood": "Cruzeiro",
    "address": "Av. Juscelino Kubitschek, 890 - Cruzeiro, Campina Grande - PB",
    "phone": "(83) 3321-2937",
    "whatsapp": "5583990040645",
    "instagram": "@redenetprovedordeinternetfibraopticacg",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "FIBRACG",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://rede-net-provedor-de-internet-fibra-optica-cg.com.br",
    "viewsCount": 915,
    "whatsappClicks": 165,
    "aboutText": "Rede Net Provedor de Internet Fibra Óptica CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Cruzeiro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Plano Fibra 500 Mega + Wi-Fi 6",
        "price": "R$ 89,90/mês",
        "desc": "Upload simétrico, baixa latência para jogos e suporte prioritário no WhatsApp.",
        "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional FIBRACG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Rede Net Provedor de Internet Fibra Óptica CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "top-caps-capinhas-acessorios-de-celular",
    "name": "Top Caps Capinhas & Acessórios de Celular",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Mais de 10.000 modelos de capinhas antichoque, películas de privacidade, suportes veiculares e cabos reforçados.",
    "offer": "Compre 2 capinhas antichoque e ganhe uma película de vidro temperado.",
    "rating": 4.7,
    "reviewsCount": 323,
    "neighborhood": "Centro",
    "address": "R. Marquês do Herval, 210 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-3354",
    "whatsapp": "5583990041384",
    "instagram": "@topcapscapinhasacessoriosdecelular",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "TOPCAPAS",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://top-caps-capinhas-acessorios-de-celular.com.br",
    "viewsCount": 144,
    "whatsappClicks": 172,
    "aboutText": "Top Caps Capinhas & Acessórios de Celular é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Capa Antishock MagSafe Reforçada",
        "price": "R$ 49,90",
        "desc": "Proteção militar contra quedas de até 2 metros compatível com carregador magnético.",
        "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional TOPCAPAS ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Top Caps Capinhas & Acessórios de Celular?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "borborema-cartuchos-impressoras",
    "name": "Borborema Cartuchos & Impressoras",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Recarga expressa de toners e cartuchos, conserto de impressoras térmicas e a laser, e venda de tintas originais Epson.",
    "offer": "Recarga de cartucho preto com 15% de desconto no balcão.",
    "rating": 4.8,
    "reviewsCount": 336,
    "neighborhood": "Prata",
    "address": "R. Rodrigues Alves, 310 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-3771",
    "whatsapp": "5583990042123",
    "instagram": "@borboremacartuchosimpressoras",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "RECARGACG",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://borborema-cartuchos-impressoras.com.br",
    "viewsCount": 173,
    "whatsappClicks": 179,
    "aboutText": "Borborema Cartuchos & Impressoras é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Manutenção e Desentupimento de Cabeçote",
        "price": "R$ 80,00",
        "desc": "Recuperação de qualidade de impressão com alinhamento e limpeza profunda.",
        "image": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional RECARGACG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Borborema Cartuchos & Impressoras?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "cyber-security-alarmes-monitoramento-24h",
    "name": "Cyber Security Alarmes & Monitoramento 24h",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Centrais de alarme com alerta no smartphone, circuito fechado de TV em alta resolução e cerca elétrica de alta voltagem.",
    "offer": "2 meses grátis de monitoramento na contratação do sistema completo.",
    "rating": 4.9,
    "reviewsCount": 349,
    "neighborhood": "Catolé",
    "address": "Av. Elpídio de Almeida, 1600 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-4188",
    "whatsapp": "5583990042862",
    "instagram": "@cybersecurityalarmesmonitoramento24h",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "SEGURANCACG",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Catolé"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://cyber-security-alarmes-monitoramento-24h.com.br",
    "viewsCount": 202,
    "whatsappClicks": 186,
    "aboutText": "Cyber Security Alarmes & Monitoramento 24h é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Kit 4 Câmeras Full HD + DVR com Acesso no Celular",
        "price": "R$ 1.150,00",
        "desc": "Instalação profissional inclusa com visualização em tempo real de qualquer lugar.",
        "image": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SEGURANCACG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Cyber Security Alarmes & Monitoramento 24h?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "macbook-center-conserto-especializado-apple",
    "name": "MacBook Center Conserto Especializado Apple",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Laboratório exclusivo para MacBooks, iMacs e iPads. Reparo avançado em placas lógicas, troca de telas retina e teclados.",
    "offer": "Diagnóstico técnico de placa sem custo de orçamento prévio.",
    "rating": 5,
    "reviewsCount": 362,
    "neighborhood": "Centro",
    "address": "R. João Pessoa, 240 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-4605",
    "whatsapp": "5583990043601",
    "instagram": "@macbookcenterconsertoespecializadoapple",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MACBOOKCG",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://macbook-center-conserto-especializado-apple.com.br",
    "viewsCount": 231,
    "whatsappClicks": 193,
    "aboutText": "MacBook Center Conserto Especializado Apple é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Reparo de Placa Lógica MacBook (Sem Ligar)",
        "price": "Sob Consulta",
        "desc": "Microeletrônica com garantia de 1 ano para Macs que molharam ou apagaram.",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MACBOOKCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a MacBook Center Conserto Especializado Apple?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "solar-tech-energia-fotovoltaica-campina",
    "name": "Solar Tech Energia Fotovoltaica Campina",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Reduza até 95% da sua conta de energia com placas solares de alta eficiência. Engenharia completa homologada na Energisa.",
    "offer": "Projeto de engenharia e homologação gratuitos no contrato solar.",
    "rating": 4.7,
    "reviewsCount": 375,
    "neighborhood": "Alto Branco",
    "address": "Av. Manoel Tavares, 1450 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-5022",
    "whatsapp": "5583990044340",
    "instagram": "@solartechenergiafotovoltaicacampina",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "SOLARCG",
    "highlights": [
      "Mais tradicional de Alto Branco",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://solar-tech-energia-fotovoltaica-campina.com.br",
    "viewsCount": 260,
    "whatsappClicks": 200,
    "aboutText": "Solar Tech Energia Fotovoltaica Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Instalação de Sistema Solar Residencial 500 kWh",
        "price": "Financiado em até 60x",
        "desc": "Painéis monocristalinos com 25 anos de garantia de geração.",
        "image": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SOLARCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Solar Tech Energia Fotovoltaica Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "smart-watch-acessorios-inteligentes-cg",
    "name": "Smart Watch & Acessórios Inteligentes CG",
    "category": "Tecnologia & Celulares",
    "categoryId": "tecnologia",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Relógios inteligentes com monitoramento cardíaco, GPS para corrida, oxímetro e pulseiras de silicone, couro e metal.",
    "offer": "Na compra de um smartwatch, ganhe 2 pulseiras extras à sua escolha.",
    "rating": 4.8,
    "reviewsCount": 388,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 160 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-5439",
    "whatsapp": "5583990045079",
    "instagram": "@smartwatchacessoriosinteligentescg",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "SMARTWATCH",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://smart-watch-acessorios-inteligentes-cg.com.br",
    "viewsCount": 289,
    "whatsappClicks": 207,
    "aboutText": "Smart Watch & Acessórios Inteligentes CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Smartwatch AMOLED Esportivo com GPS",
        "price": "R$ 299,00",
        "desc": "Resistente à água 5ATM com medição de batimentos, sono e chamadas no pulso.",
        "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SMARTWATCH ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Smart Watch & Acessórios Inteligentes CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "campina-auto-center-pneus-michelin",
    "name": "Campina Auto Center & Pneus Michelin",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Alinhamento 3D computadorizado, balanceamento a laser, suspensão, freios ABS e revenda autorizada Michelin e Pirelli.",
    "offer": "Alinhamento 3D + Balanceamento das 4 rodas por R$ 89,90 com o cupom.",
    "rating": 4.9,
    "reviewsCount": 401,
    "neighborhood": "Catolé",
    "address": "Av. Canal (Pref. Severino Bezerra Cabral), 450 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-5856",
    "whatsapp": "5583990045818",
    "instagram": "@campinaautocenterpneusmichelin",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "AUTOCENTER",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://campina-auto-center-pneus-michelin.com.br",
    "viewsCount": 318,
    "whatsappClicks": 214,
    "aboutText": "Campina Auto Center & Pneus Michelin é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Alinhamento 3D e Balanceamento das 4 Rodas",
        "price": "R$ 89,90",
        "desc": "Geometria precisa que evita desgaste irregular e economiza combustível.",
        "image": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional AUTOCENTER ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Campina Auto Center & Pneus Michelin?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "pneubras-centro-automotivo-baterias",
    "name": "Pneubrás Centro Automotivo & Baterias",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Pneus nacionais e importados com montagem grátis, troca de óleo com filtros originais e baterias Moura com entrega rápida.",
    "offer": "Instalação e entrega grátis de bateria Moura em até 30 minutos em CG.",
    "rating": 5,
    "reviewsCount": 414,
    "neighborhood": "Liberdade",
    "address": "Av. Assis Chateaubriand, 1200 - Liberdade, Campina Grande - PB",
    "phone": "(83) 3321-6273",
    "whatsapp": "5583990046557",
    "instagram": "@pneubrascentroautomotivobaterias",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "PNEUBRAS",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://pneubras-centro-automotivo-baterias.com.br",
    "viewsCount": 347,
    "whatsappClicks": 221,
    "aboutText": "Pneubrás Centro Automotivo & Baterias é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Liberdade, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Bateria Moura 60Ah com Entrega e Instalação Grátis",
        "price": "R$ 440,00",
        "desc": "A base de troca com 2 anos de garantia nacional de fábrica.",
        "image": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PNEUBRAS ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Pneubrás Centro Automotivo & Baterias?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "estetica-automotiva-vitrificacao-detailer-cg",
    "name": "Estética Automotiva & Vitrificação Detailer CG",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Polimento técnico com remoção de micro-riscos, vitrificação de pintura com proteção de 3 anos e higienização interna de bancos.",
    "offer": "15% de desconto no pacote de Vitrificação Cerâmica com o cupom.",
    "rating": 4.7,
    "reviewsCount": 427,
    "neighborhood": "Alto Branco",
    "address": "R. João Suassuna, 840 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-6690",
    "whatsapp": "5583990047296",
    "instagram": "@esteticaautomotivavitrificacaodetailercg",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "DETAILER15",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Alto Branco"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://estetica-automotiva-vitrificacao-detailer-cg.com.br",
    "viewsCount": 376,
    "whatsappClicks": 228,
    "aboutText": "Estética Automotiva & Vitrificação Detailer CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Vitrificação Cerâmica com Proteção de 3 Anos",
        "price": "R$ 850,00",
        "desc": "Brilho espelhado profundo, repelência à água e proteção contra raios solares.",
        "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DETAILER15 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Estética Automotiva & Vitrificação Detailer CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "oficina-mecanica-injecao-eletronica-dr-carro",
    "name": "Oficina Mecânica Injeção Eletrônica Dr. Carro",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Diagnóstico computadorizado de injeção direta, revisão de câmbio automático, troca de correia dentada e suspensão.",
    "offer": "Diagnóstico completo com scanner de injeção sem custo na troca de óleo.",
    "rating": 4.8,
    "reviewsCount": 440,
    "neighborhood": "Bodocongó",
    "address": "Av. Floriano Peixoto, 1850 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-7107",
    "whatsapp": "5583990048035",
    "instagram": "@oficinamecanicainjecaoeletronicadrcarro",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "DRCARRO",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Bodocongó",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://oficina-mecanica-injecao-eletronica-dr-carro.com.br",
    "viewsCount": 405,
    "whatsappClicks": 235,
    "aboutText": "Oficina Mecânica Injeção Eletrônica Dr. Carro é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Revisão Preventiva de 10.000km com Scanner",
        "price": "R$ 190,00",
        "desc": "Verificação de 40 itens de segurança incluindo freios, luzes e suspensão.",
        "image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DRCARRO ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Oficina Mecânica Injeção Eletrônica Dr. Carro?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "lava-jato-higienizacao-ecologica-agua-viva",
    "name": "Lava Jato & Higienização Ecológica Água Viva",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Lavagem detalhada de chassi, motor a vapor, aspiração profunda, cera de carnaúba pura e hidratação de bancos de couro.",
    "offer": "Aplicação de cera de carnaúba nobre grátis na lavagem completa.",
    "rating": 4.9,
    "reviewsCount": 453,
    "neighborhood": "Centro",
    "address": "R. Treze de Maio, 450 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-7524",
    "whatsapp": "5583990048774",
    "instagram": "@lavajatohigienizacaoecologicaaguaviva",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "AGUAVIVA",
    "highlights": [
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://lava-jato-higienizacao-ecologica-agua-viva.com.br",
    "viewsCount": 434,
    "whatsappClicks": 242,
    "aboutText": "Lava Jato & Higienização Ecológica Água Viva é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Lavagem Completa com Cera e Aspiração",
        "price": "R$ 65,00",
        "desc": "Limpeza minuciosa de cantos de portas, painel com silicone fosco e pneus.",
        "image": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional AGUAVIVA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Lava Jato & Higienização Ecológica Água Viva?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "auto-eletrica-ar-condicionado-automotivo-friomax",
    "name": "Auto Elétrica & Ar Condicionado Automotivo FrioMax",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Carga de gás ecológica R134a, higienização com ozônio contra ácaros, conserto de compressores e motores de partida.",
    "offer": "Higienização de ar com ozônio grátis na recarga de gás do ar-condicionado.",
    "rating": 5,
    "reviewsCount": 466,
    "neighborhood": "Prata",
    "address": "R. Rodrigues Alves, 920 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-7941",
    "whatsapp": "5583990049513",
    "instagram": "@autoeletricaarcondicionadoautomotivofriomax",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "FRIOMAX",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://auto-eletrica-ar-condicionado-automotivo-friomax.com.br",
    "viewsCount": 463,
    "whatsappClicks": 249,
    "aboutText": "Auto Elétrica & Ar Condicionado Automotivo FrioMax é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Carga de Gás Ecológica + Troca de Filtro de Cabine",
        "price": "R$ 139,00",
        "desc": "Ar-condicionado gelando rápido com eliminação total de odores e fungos.",
        "image": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional FRIOMAX ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Auto Elétrica & Ar Condicionado Automotivo FrioMax?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "som-acessorios-automotivos-somcar-cg",
    "name": "Som & Acessórios Automotivos SomCar CG",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Instalação de centrais multimídia com Apple CarPlay e Android Auto sem fio, películas térmicas fumê e módulos de vidro.",
    "offer": "Instalação gratuita de câmera de ré na compra de central multimídia.",
    "rating": 4.7,
    "reviewsCount": 479,
    "neighborhood": "Liberdade",
    "address": "R. Odon Bezerra, 610 - Liberdade, Campina Grande - PB",
    "phone": "(83) 3321-8358",
    "whatsapp": "5583990050252",
    "instagram": "@somacessoriosautomotivossomcarcg",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "SOMCAR",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://som-acessorios-automotivos-somcar-cg.com.br",
    "viewsCount": 492,
    "whatsappClicks": 256,
    "aboutText": "Som & Acessórios Automotivos SomCar CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Liberdade, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Central Multimídia 9 Polegadas com GPS e Wi-Fi",
        "price": "R$ 790,00",
        "desc": "Espelhamento sem fio para iPhone e Android com comando de volante ativo.",
        "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SOMCAR ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Som & Acessórios Automotivos SomCar CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "borracharia-socorro-24-horas-campinense",
    "name": "Borracharia & Socorro 24 Horas Campinense",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Atendimento de emergência 24h para troca de pneus furados, chupeta de bateria e reboque de veículos leves em toda Campina.",
    "offer": "Socorro móvel rápido com desconto de 15% via WhatsApp.",
    "rating": 4.8,
    "reviewsCount": 492,
    "neighborhood": "Cruzeiro",
    "address": "Av. Juscelino Kubitschek, 1400 - Cruzeiro, Campina Grande - PB",
    "phone": "(83) 3321-8775",
    "whatsapp": "5583990050991",
    "instagram": "@borrachariasocorro24horascampinense",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "SOCORRO24",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://borracharia-socorro-24-horas-campinense.com.br",
    "viewsCount": 521,
    "whatsappClicks": 263,
    "aboutText": "Borracharia & Socorro 24 Horas Campinense é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Cruzeiro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Socorro de Troca de Pneu / Bateria no Local",
        "price": "R$ 80,00",
        "desc": "Mecânico motorizado chega em até 20 minutos no seu bairro com ferramentas.",
        "image": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional SOCORRO24 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Borracharia & Socorro 24 Horas Campinense?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "autopecas-rainha-da-borborema",
    "name": "Autopeças Rainha da Borborema",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Mais de 40.000 itens a pronta entrega para todas as marcas nacionais e importadas: pastilhas, amortecedores e radiadores.",
    "offer": "10% de desconto à vista em amortecedores Cofap e pastilhas Fras-le.",
    "rating": 4.9,
    "reviewsCount": 55,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 580 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-9192",
    "whatsapp": "5583990051730",
    "instagram": "@autopecasrainhadaborborema",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "AUTOPECAS10",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://autopecas-rainha-da-borborema.com.br",
    "viewsCount": 550,
    "whatsappClicks": 270,
    "aboutText": "Autopeças Rainha da Borborema é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Par de Amortecedores Dianteiros com Garantia",
        "price": "R$ 380,00",
        "desc": "Peça 100% original com nota fiscal e garantia de 2 anos de fábrica.",
        "image": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional AUTOPECAS10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Autopeças Rainha da Borborema?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "parabrisas-vidros-automotivos-campinense",
    "name": "Parabrisas & Vidros Automotivos Campinense",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Troca e reparo de trincas em para-brisas originais com selo do Inmetro e credenciamento nas principais seguradoras.",
    "offer": "Reparo de trinca em para-brisa em até 25 minutos por R$ 69,90.",
    "rating": 5,
    "reviewsCount": 68,
    "neighborhood": "Catolé",
    "address": "Av. Brasília, 1450 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-9609",
    "whatsapp": "5583990052469",
    "instagram": "@parabrisasvidrosautomotivoscampinense",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "VIDROSCG",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://parabrisas-vidros-automotivos-campinense.com.br",
    "viewsCount": 579,
    "whatsappClicks": 277,
    "aboutText": "Parabrisas & Vidros Automotivos Campinense é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Reparo de Trincas e Olho de Boi no Para-brisa",
        "price": "R$ 69,90",
        "desc": "Injeção de resina acrílica óptica que restaura 95% da transparência original.",
        "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional VIDROSCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Parabrisas & Vidros Automotivos Campinense?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "peliculas-envelopamento-automotivo-nanofilm",
    "name": "Películas & Envelopamento Automotivo NanoFilm",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Películas de nanocerâmica com retenção de até 90% do calor, proteção contra raios solares e envelopamento total fosco.",
    "offer": "Película térmica frontal de parabrisa com 20% de desconto.",
    "rating": 4.7,
    "reviewsCount": 81,
    "neighborhood": "Mirante",
    "address": "R. Luiza Bezerra Mota, 650 - Mirante, Campina Grande - PB",
    "phone": "(83) 3321-0027",
    "whatsapp": "5583990053208",
    "instagram": "@peliculasenvelopamentoautomotivonanofilm",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "NANOFILM20",
    "highlights": [
      "Mais tradicional de Mirante",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://peliculas-envelopamento-automotivo-nanofilm.com.br",
    "viewsCount": 608,
    "whatsappClicks": 34,
    "aboutText": "Películas & Envelopamento Automotivo NanoFilm é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Mirante, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Aplicação Completa Película Cerâmica Anticalor",
        "price": "R$ 490,00",
        "desc": "Redução térmica comprovada que economiza o uso do ar-condicionado no carro.",
        "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional NANOFILM20 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Películas & Envelopamento Automotivo NanoFilm?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "troca-de-oleo-express-filtros-petrobras",
    "name": "Troca de Óleo Express & Filtros Petrobras",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Troca rápida de óleo sintético Lubrax, Castrol e Motul em menos de 15 minutos com checagem gratuita de 15 itens.",
    "offer": "Filtro de óleo grátis na troca com óleo 100% sintético.",
    "rating": 4.8,
    "reviewsCount": 94,
    "neighborhood": "Bodocongó",
    "address": "Av. Floriano Peixoto, 2300 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-0444",
    "whatsapp": "5583990053947",
    "instagram": "@trocadeoleoexpressfiltrospetrobras",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "OLEOEXPRESS",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://troca-de-oleo-express-filtros-petrobras.com.br",
    "viewsCount": 637,
    "whatsappClicks": 41,
    "aboutText": "Troca de Óleo Express & Filtros Petrobras é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Troca de Óleo 100% Sintético 5W30 (4 Litros)",
        "price": "R$ 170,00",
        "desc": "Inclui mão de obra, anel de vedação e descarte ecológico do óleo usado.",
        "image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional OLEOEXPRESS ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Troca de Óleo Express & Filtros Petrobras?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "centro-de-martelinho-de-ouro-pintura-estufa-cg",
    "name": "Centro de Martelinho de Ouro & Pintura Estufa CG",
    "category": "Automotivo & Serviços",
    "categoryId": "automotivo",
    "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Recuperação de amassados sem danificar a pintura original do veículo e pintura automotiva em estufa climatizada sem poeira.",
    "offer": "Orçamento por foto no WhatsApp com 10% de desconto no serviço.",
    "rating": 4.9,
    "reviewsCount": 107,
    "neighborhood": "Prata",
    "address": "R. Afonso Campos, 520 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-0861",
    "whatsapp": "5583990054686",
    "instagram": "@centrodemartelinhodeouropinturaestufacg",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "MARTELINHO10",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://centro-de-martelinho-de-ouro-pintura-estufa-cg.com.br",
    "viewsCount": 666,
    "whatsappClicks": 48,
    "aboutText": "Centro de Martelinho de Ouro & Pintura Estufa CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Remoção de Amassado sem Pintura (Martelinho)",
        "price": "A partir de R$ 90",
        "desc": "Preserva a originalidade do carro e mantém o valor de revenda de fábrica.",
        "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MARTELINHO10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Centro de Martelinho de Ouro & Pintura Estufa CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "armazem-paraiba-materiais-de-construcao",
    "name": "Armazém Paraíba Materiais de Construção",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Do alicerce ao acabamento: cimento, tijolos, ferros, porcelanatos e tintas com entrega rápida e frota própria na cidade.",
    "offer": "Cimento com preço direto da fábrica e entrega expressa em CG.",
    "rating": 5,
    "reviewsCount": 120,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 50 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-1278",
    "whatsapp": "5583990055425",
    "instagram": "@armazemparaibamateriaisdeconstrucao",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "PARAIBA10",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://armazem-paraiba-materiais-de-construcao.com.br",
    "viewsCount": 695,
    "whatsappClicks": 55,
    "aboutText": "Armazém Paraíba Materiais de Construção é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Cimento CP II 50kg Nacional",
        "price": "R$ 34,90",
        "desc": "Alta resistência inicial e secagem uniforme para lajes e rebocos.",
        "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PARAIBA10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Armazém Paraíba Materiais de Construção?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "casa-do-eletricista-iluminacao-led-cg",
    "name": "Casa do Eletricista & Iluminação LED CG",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Fios antichamas certificados pelo Inmetro, disjuntores industriais, refletores solares e perfis de LED de sobrepor.",
    "offer": "12% de desconto à vista em iluminação em LED e luminárias.",
    "rating": 4.7,
    "reviewsCount": 133,
    "neighborhood": "Prata",
    "address": "R. Rodrigues Alves, 190 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-1695",
    "whatsapp": "5583990056164",
    "instagram": "@casadoeletricistailuminacaoledcg",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "ELETRICA12",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Prata"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://casa-do-eletricista-iluminacao-led-cg.com.br",
    "viewsCount": 724,
    "whatsappClicks": 62,
    "aboutText": "Casa do Eletricista & Iluminação LED CG é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Perfil de LED Alumínio com Fita 120 Leds/m",
        "price": "R$ 55,00/m",
        "desc": "Iluminação linear moderna e aconchegante para sancas e marcenarias.",
        "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional ELETRICA12 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Casa do Eletricista & Iluminação LED CG?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "marmoraria-granitos-da-borborema",
    "name": "Marmoraria Granitos da Borborema",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Bancadas de cozinha em granito São Gabriel, cubas esculpidas em mármore travertino e soleiras sob medida com acabamento bisotado.",
    "offer": "Cuba esculpida no próprio mármore com 20% de desconto no pacote.",
    "rating": 4.8,
    "reviewsCount": 146,
    "neighborhood": "Bodocongó",
    "address": "Av. Floriano Peixoto, 2800 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-2112",
    "whatsapp": "5583990056903",
    "instagram": "@marmorariagranitosdaborborema",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MARMORE20",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Bodocongó",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://marmoraria-granitos-da-borborema.com.br",
    "viewsCount": 753,
    "whatsappClicks": 69,
    "aboutText": "Marmoraria Granitos da Borborema é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Bancada Cozinha Granito Preto São Gabriel",
        "price": "R$ 380,00/m²",
        "desc": "Resistente a calor e manchas, com corte para cooktop e cuba embutida.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MARMORE20 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Marmoraria Granitos da Borborema?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "tintas-campina-centro-de-cores-suvinil",
    "name": "Tintas Campina & Centro de Cores Suvinil",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Sistema tintométrico com mais de 2.500 cores Suvinil e Coral preparadas na hora, esmaltes sintéticos e texturas rústicas.",
    "offer": "Ganhe um kit profissional de rolo e pincel na compra de lata 18L.",
    "rating": 4.9,
    "reviewsCount": 159,
    "neighborhood": "Catolé",
    "address": "Av. Brasília, 920 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-2529",
    "whatsapp": "5583990057642",
    "instagram": "@tintascampinacentrodecoressuvinil",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "TINTASCG",
    "highlights": [
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://tintas-campina-centro-de-cores-suvinil.com.br",
    "viewsCount": 782,
    "whatsappClicks": 76,
    "aboutText": "Tintas Campina & Centro de Cores Suvinil é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Lata Tinta Acrílica Fosca Lavável 18L",
        "price": "R$ 389,00",
        "desc": "Máxima cobertura e sem odor em 3 horas para áreas internas e externas.",
        "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional TINTASCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Tintas Campina & Centro de Cores Suvinil?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "vidracaria-esquadrias-de-aluminio-vidrobox",
    "name": "Vidraçaria & Esquadrias de Alumínio VidroBox",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Boxes para banheiro em vidro temperado 8mm, portas de correr de alumínio preto, espelhos bisotados e fechamento de varandas.",
    "offer": "Instalação de Box Blindex em até 48h com garantia de 5 anos nas roldanas.",
    "rating": 5,
    "reviewsCount": 172,
    "neighborhood": "Liberdade",
    "address": "R. Odon Bezerra, 890 - Liberdade, Campina Grande - PB",
    "phone": "(83) 3321-2946",
    "whatsapp": "5583990058381",
    "instagram": "@vidracariaesquadriasdealuminiovidrobox",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "VIDROBOX",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://vidracaria-esquadrias-de-aluminio-vidrobox.com.br",
    "viewsCount": 811,
    "whatsappClicks": 83,
    "aboutText": "Vidraçaria & Esquadrias de Alumínio VidroBox é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Liberdade, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Box de Banheiro Vidro Temperado 8mm Incolor",
        "price": "R$ 340,00",
        "desc": "Trilho de alumínio nobre com película de segurança instalada.",
        "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional VIDROBOX ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Vidraçaria & Esquadrias de Alumínio VidroBox?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "marcenaria-moveis-planejados-campinense",
    "name": "Marcenaria Móveis Planejados Campinense",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Cozinhas planejadas, guarda-roupas sob medida em MDF 100% naval com corrediças telescópicas e amortecedores suaves.",
    "offer": "Projeto 3D realista gratuito na contratação da marcenaria completa.",
    "rating": 4.7,
    "reviewsCount": 185,
    "neighborhood": "Mirante",
    "address": "R. Luiza Bezerra Mota, 820 - Mirante, Campina Grande - PB",
    "phone": "(83) 3321-3363",
    "whatsapp": "5583990059120",
    "instagram": "@marcenariamoveisplanejadoscampinense",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "PLANEJADOSCG",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://marcenaria-moveis-planejados-campinense.com.br",
    "viewsCount": 840,
    "whatsappClicks": 90,
    "aboutText": "Marcenaria Móveis Planejados Campinense é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Mirante, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Cozinha Completa Planejada em MDF 100%",
        "price": "A partir de R$ 3.800",
        "desc": "Armários aéreos, balcão de pia e gavetões com amortecimento slow-motion.",
        "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PLANEJADOSCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Marcenaria Móveis Planejados Campinense?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "hidraulica-tubos-tigre-campina",
    "name": "Hidráulica & Tubos Tigre Campina",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Tubos e conexões para esgoto e água quente Tigre e Amanco, caixas d'água Fortlev de 1000L e bombas d'água pressurizadoras.",
    "offer": "Caixa d'água 1.000L com frete grátis em toda a zona urbana de CG.",
    "rating": 4.8,
    "reviewsCount": 198,
    "neighborhood": "Centro",
    "address": "R. Cardoso Vieira, 320 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-3780",
    "whatsapp": "5583990059859",
    "instagram": "@hidraulicatubostigrecampina",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "HIDRAULICA",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://hidraulica-tubos-tigre-campina.com.br",
    "viewsCount": 869,
    "whatsappClicks": 97,
    "aboutText": "Hidráulica & Tubos Tigre Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Caixa d'Água Fortlev 1.000 Litros com Tampa",
        "price": "R$ 389,00",
        "desc": "Polietileno de alta densidade antimicrobiano resistente a intempéries.",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional HIDRAULICA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Hidráulica & Tubos Tigre Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "gesso-drywall-decoracoes-borborema",
    "name": "Gesso & Drywall Decorações Borborema",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Forros de gesso acartonado, sancas iluminadas, paredes de drywall com isolamento acústico e divisórias comerciais rápidas.",
    "offer": "10% de desconto em forro de gesso acartonado a partir de 50m².",
    "rating": 4.9,
    "reviewsCount": 211,
    "neighborhood": "Cruzeiro",
    "address": "Av. Juscelino Kubitschek, 450 - Cruzeiro, Campina Grande - PB",
    "phone": "(83) 3321-4197",
    "whatsapp": "5583990060598",
    "instagram": "@gessodrywalldecoracoesborborema",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "GESSOCG",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Cruzeiro"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://gesso-drywall-decoracoes-borborema.com.br",
    "viewsCount": 898,
    "whatsappClicks": 104,
    "aboutText": "Gesso & Drywall Decorações Borborema é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Cruzeiro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Forro de Drywall Instalado com Fita e Massa",
        "price": "R$ 68,00/m²",
        "desc": "Acabamento liso pronto para receber pintura com isolamento térmico.",
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional GESSOCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Gesso & Drywall Decorações Borborema?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "ceramica-porcelanatos-pavicenter",
    "name": "Cerâmica & Porcelanatos Pavicenter",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Grandes formatos em porcelanatos retificados polidos e acetinados Portobello e Elizabeth com pronta entrega imediata.",
    "offer": "Argamassa ACIII de brinde a cada 20m² de porcelanato comprado.",
    "rating": 5,
    "reviewsCount": 224,
    "neighborhood": "Alto Branco",
    "address": "Av. Manoel Tavares, 1720 - Alto Branco, Campina Grande - PB",
    "phone": "(83) 3321-4614",
    "whatsapp": "5583990061337",
    "instagram": "@ceramicaporcelanatospavicenter",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "PAVICENTER",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Alto Branco",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://ceramica-porcelanatos-pavicenter.com.br",
    "viewsCount": 127,
    "whatsappClicks": 111,
    "aboutText": "Cerâmica & Porcelanatos Pavicenter é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Alto Branco, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Porcelanato Retificado Polido 84x84cm",
        "price": "R$ 64,90/m²",
        "desc": "Borda reta com junta mínima de 1mm e acabamento marmorizado luxuoso.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PAVICENTER ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Cerâmica & Porcelanatos Pavicenter?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "serralheria-portoes-eletronicos-ferroforte",
    "name": "Serralheria & Portões Eletrônicos FerroForte",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Portões basculantes de ferro galvanizado que não enferrujam, motores PPA ultrarrápidos e grades de segurança residenciais.",
    "offer": "Motor eletrônico com 2 controles grátis na encomenda de portão basculante.",
    "rating": 4.7,
    "reviewsCount": 237,
    "neighborhood": "Malvinas",
    "address": "R. das Malvinas, 1100 - Malvinas, Campina Grande - PB",
    "phone": "(83) 3321-5031",
    "whatsapp": "5583990062076",
    "instagram": "@serralheriaportoeseletronicosferroforte",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "FERROFORTE",
    "highlights": [
      "Mais tradicional de Malvinas",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://serralheria-portoes-eletronicos-ferroforte.com.br",
    "viewsCount": 156,
    "whatsappClicks": 118,
    "aboutText": "Serralheria & Portões Eletrônicos FerroForte é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Malvinas, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Portão Basculante em Aço Galvanizado 3x2,20m",
        "price": "R$ 1.950,00",
        "desc": "Pintura eletrostática antiferrugem com motor PPA instalado e configurado.",
        "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional FERROFORTE ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Serralheria & Portões Eletrônicos FerroForte?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "madeireira-telhas-sertaneja-campina",
    "name": "Madeireira & Telhas Sertaneja Campina",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Madeiramento certificado para telhado (maçaranduba, jatobá), telhas esmaltadas impermeáveis e compensados navais.",
    "offer": "10% de desconto no pacote completo de madeira para telhado.",
    "rating": 4.8,
    "reviewsCount": 250,
    "neighborhood": "Bodocongó",
    "address": "R. Aprígio Veloso, 1500 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-5448",
    "whatsapp": "5583990062815",
    "instagram": "@madeireiratelhassertanejacampina",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MADEIRACG",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://madeireira-telhas-sertaneja-campina.com.br",
    "viewsCount": 185,
    "whatsappClicks": 125,
    "aboutText": "Madeireira & Telhas Sertaneja Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Vigas de Maçaranduba Aparelhada",
        "price": "Sob Consulta",
        "desc": "Madeira nobre tratada contra cupins com resistência estrutural máxima.",
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MADEIRACG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Madeireira & Telhas Sertaneja Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "ferreira-parafusos-ferramentas-profissionais",
    "name": "Ferreira & Parafusos Ferramentas Profissionais",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Furadeiras de impacto Bosch e Makita, compressores de ar, parafusos em inox e EPIs para obras industriais e residenciais.",
    "offer": "Kit com 50 brocas de brinde na compra de parafusadeira a bateria.",
    "rating": 4.9,
    "reviewsCount": 263,
    "neighborhood": "Centro",
    "address": "R. Desembargador Trindade, 120 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-5865",
    "whatsapp": "5583990063554",
    "instagram": "@ferreiraparafusosferramentasprofissionais",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "FERRAMENTAS",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://ferreira-parafusos-ferramentas-profissionais.com.br",
    "viewsCount": 214,
    "whatsappClicks": 132,
    "aboutText": "Ferreira & Parafusos Ferramentas Profissionais é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Parafusadeira e Furadeira de Impacto a Bateria 20V",
        "price": "R$ 499,00",
        "desc": "Com 2 baterias de lítio, carregador bivolt e maleta de transporte resistente.",
        "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional FERRAMENTAS ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Ferreira & Parafusos Ferramentas Profissionais?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "climatizacao-ar-condicionado-split-polo-frio",
    "name": "Climatização & Ar-Condicionado Split Polo Frio",
    "category": "Construção & Lar",
    "categoryId": "construcao",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Instalação credenciada pelas fábricas (LG, Midea, Gree) mantendo garantia de até 10 anos no compressor, e limpeza química.",
    "offer": "Instalação completa com 3 metros de tubulação de cobre por R$ 280.",
    "rating": 5,
    "reviewsCount": 276,
    "neighborhood": "Prata",
    "address": "R. Irineu Joffily, 420 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-6282",
    "whatsapp": "5583990064293",
    "instagram": "@climatizacaoarcondicionadosplitpolofrio",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "POLOFRIO",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://climatizacao-ar-condicionado-split-polo-frio.com.br",
    "viewsCount": 243,
    "whatsappClicks": 139,
    "aboutText": "Climatização & Ar-Condicionado Split Polo Frio é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Instalação Padrão de Ar-Condicionado Split Inverter",
        "price": "R$ 280,00",
        "desc": "Vácuo no sistema com bomba de 2 estágios e fiação elétrica inclusa.",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional POLOFRIO ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Climatização & Ar-Condicionado Split Polo Frio?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "pet-shop-clinica-veterinaria-bicho-mimado",
    "name": "Pet Shop & Clínica Veterinária Bicho Mimado",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Banho e tosa com água morna e toalhas higienizadas individuais, atendimento veterinário 24h e farmácia pet completa.",
    "offer": "Hidratação de pelos grátis no primeiro banho agendado pelo WhatsApp.",
    "rating": 4.7,
    "reviewsCount": 289,
    "neighborhood": "Catolé",
    "address": "Av. Elpídio de Almeida, 940 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-6699",
    "whatsapp": "5583990065032",
    "instagram": "@petshopclinicaveterinariabichomimado",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "PETMIMADO",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Catolé"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://pet-shop-clinica-veterinaria-bicho-mimado.com.br",
    "viewsCount": 272,
    "whatsappClicks": 146,
    "aboutText": "Pet Shop & Clínica Veterinária Bicho Mimado é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Banho e Tosa Higiênica Completa",
        "price": "R$ 65,00",
        "desc": "Corte de unhas, limpeza de ouvidos e perfume hipoalergênico.",
        "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional PETMIMADO ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Pet Shop & Clínica Veterinária Bicho Mimado?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "livraria-espaco-cultural-campinense",
    "name": "Livraria & Espaço Cultural Campinense",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Best-sellers, literatura paraibana clássica e contemporânea, mangás, HQs e cafeteria cultural para leitura tranquila.",
    "offer": "15% de desconto em qualquer livro de literatura brasileira.",
    "rating": 4.8,
    "reviewsCount": 302,
    "neighborhood": "Centro",
    "address": "R. Venâncio Neiva, 110 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-7116",
    "whatsapp": "5583990065771",
    "instagram": "@livrariaespacoculturalcampinense",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "LIVROSCG",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://livraria-espaco-cultural-campinense.com.br",
    "viewsCount": 301,
    "whatsappClicks": 153,
    "aboutText": "Livraria & Espaço Cultural Campinense é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Livros Físicos Selecionados",
        "price": "A partir de R$ 34,90",
        "desc": "Os títulos mais vendidos do Brasil com pronta entrega no Centro.",
        "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional LIVROSCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Livraria & Espaço Cultural Campinense?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "floricultura-flores-da-serra-cestas-de-cafe",
    "name": "Floricultura Flores da Serra & Cestas de Café",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Buquês de rosas vermelhas colombianas, orquídeas raras, cestas de café da manhã gourmet e arranjos fúnebres 24h.",
    "offer": "Entrega expressa sem taxa no Centro e Prata para buquês de flores.",
    "rating": 4.9,
    "reviewsCount": 315,
    "neighborhood": "Prata",
    "address": "R. Afonso Campos, 180 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-7533",
    "whatsapp": "5583990066510",
    "instagram": "@floriculturafloresdaserracestasdecafe",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "FLORES10",
    "highlights": [
      "Mais tradicional de Prata",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://floricultura-flores-da-serra-cestas-de-cafe.com.br",
    "viewsCount": 330,
    "whatsappClicks": 160,
    "aboutText": "Floricultura Flores da Serra & Cestas de Café é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Buquê Luxo com 12 Rosas Colombianas",
        "price": "R$ 159,00",
        "desc": "Rosas vermelhas selecionadas com folhagens nobres e laço de cetim.",
        "image": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional FLORES10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Floricultura Flores da Serra & Cestas de Café?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "lavanderia-express-lav-sec-campina",
    "name": "Lavanderia Express Lav & Sec Campina",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Lavagem a seco de ternos, edredons king size, vestidos de noiva e serviço de cesto de roupas do dia a dia lavado e passado.",
    "offer": "Lave 1 edredom e o 2º sai pela metade do preço com o cupom.",
    "rating": 5,
    "reviewsCount": 328,
    "neighborhood": "Centro",
    "address": "R. João Pessoa, 380 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-7950",
    "whatsapp": "5583990067249",
    "instagram": "@lavanderiaexpresslavseccampina",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "LAVASEC",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://lavanderia-express-lav-sec-campina.com.br",
    "viewsCount": 359,
    "whatsappClicks": 167,
    "aboutText": "Lavanderia Express Lav & Sec Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Lavagem e Higienização de Edredom Casal / King",
        "price": "R$ 38,00",
        "desc": "Secagem e esterilização contra ácaros com embalagem selada a vácuo.",
        "image": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional LAVASEC ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Lavanderia Express Lav & Sec Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "escola-de-idiomas-wizard-campina-grande",
    "name": "Escola de Idiomas Wizard Campina Grande",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Inglês e Espanhol com metodologia líder mundial. Foco total em conversação prática desde a primeira aula para todas as idades.",
    "offer": "Matrícula grátis + 30% de desconto na primeira mensalidade do curso.",
    "rating": 4.7,
    "reviewsCount": 341,
    "neighborhood": "Catolé",
    "address": "Av. Brasília, 1280 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-8367",
    "whatsapp": "5583990067988",
    "instagram": "@escoladeidiomaswizardcampinagrande",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "WIZARDCG",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://escola-de-idiomas-wizard-campina-grande.com.br",
    "viewsCount": 388,
    "whatsappClicks": 174,
    "aboutText": "Escola de Idiomas Wizard Campina Grande é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Curso de Inglês com Foco em Conversação",
        "price": "Mensalidades a partir de R$ 189",
        "desc": "Material didático internacional com plataforma de IA interativa.",
        "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional WIZARDCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Escola de Idiomas Wizard Campina Grande?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "imobiliaria-morada-nobre-campina",
    "name": "Imobiliária Morada Nobre Campina",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Venda e locação de apartamentos de alto padrão no Mirante, Catolé e Prata com assessoria jurídica completa.",
    "offer": "Avaliação imobiliária com laudo técnico gratuito para proprietários.",
    "rating": 4.8,
    "reviewsCount": 354,
    "neighborhood": "Mirante",
    "address": "R. Luiza Bezerra Mota, 120 - Mirante, Campina Grande - PB",
    "phone": "(83) 3321-8784",
    "whatsapp": "5583990068727",
    "instagram": "@imobiliariamoradanobrecampina",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "MORADANOBRE",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://imobiliaria-morada-nobre-campina.com.br",
    "viewsCount": 417,
    "whatsappClicks": 181,
    "aboutText": "Imobiliária Morada Nobre Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Mirante, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Consultoria para Compra e Venda de Imóveis",
        "price": "Sob Consulta",
        "desc": "Assessoria documental completa para financiamento bancário Caixa e bancos privados.",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional MORADANOBRE ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Imobiliária Morada Nobre Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "papelaria-grafica-rapida-copiadora-central",
    "name": "Papelaria & Gráfica Rápida Copiadora Central",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Impressão de banners em lona, encadernações em capa dura para TCCs, plastificações, carimbos na hora e plotagem de projetos.",
    "offer": "10% de desconto em encadernações de monografias e TCCs.",
    "rating": 4.9,
    "reviewsCount": 367,
    "neighborhood": "Centro",
    "address": "R. Floriano Peixoto, 180 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-9201",
    "whatsapp": "5583990069466",
    "instagram": "@papelariagraficarapidacopiadoracentral",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "COPIADORA10",
    "highlights": [
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://papelaria-grafica-rapida-copiadora-central.com.br",
    "viewsCount": 446,
    "whatsappClicks": 188,
    "aboutText": "Papelaria & Gráfica Rápida Copiadora Central é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Encadernação Capa Dura Oficial com Letras Douradas",
        "price": "R$ 45,00",
        "desc": "Padrão ABNT rígido para entrega de trabalhos universitários da UEPB e UFCG.",
        "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional COPIADORA10 ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Papelaria & Gráfica Rápida Copiadora Central?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "hotel-pousada-borborema-conforto",
    "name": "Hotel & Pousada Borborema Conforto",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Hospedagem confortável no coração da cidade com café da manhã regional farto, Wi-Fi veloz e estacionamento seguro.",
    "offer": "Diária para casal com 15% de desconto em reservas diretas no WhatsApp.",
    "rating": 5,
    "reviewsCount": 380,
    "neighborhood": "Centro",
    "address": "R. Maciel Pinheiro, 290 - Centro, Campina Grande - PB",
    "phone": "(83) 3321-9618",
    "whatsapp": "5583990070205",
    "instagram": "@hotelpousadaborboremaconforto",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "HOTELCG",
    "highlights": [
      "Garantia e procedência comprovada",
      "Mais tradicional de Centro",
      "Atendimento ágil via WhatsApp"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://hotel-pousada-borborema-conforto.com.br",
    "viewsCount": 475,
    "whatsappClicks": 195,
    "aboutText": "Hotel & Pousada Borborema Conforto é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Centro, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Diária Suíte Casal com Café da Manhã Incluso",
        "price": "R$ 180,00",
        "desc": "Quarto com ar Split, frigobar, TV Smart e enxoval 100% algodão.",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional HOTELCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Hotel & Pousada Borborema Conforto?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "barbearia-retro-dom-barba-campina",
    "name": "Barbearia Retrô Dom Barba Campina",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Cortes modernos degradê, barba feita na toalha quente com navalha e óleo essencial, cerveja artesanal e sinuca.",
    "offer": "Combo Cabelo + Barba na toalha quente por apenas R$ 60.",
    "rating": 4.7,
    "reviewsCount": 393,
    "neighborhood": "Catolé",
    "address": "Av. Elpídio de Almeida, 1480 - Catolé, Campina Grande - PB",
    "phone": "(83) 3321-0036",
    "whatsapp": "5583990070944",
    "instagram": "@barbeariaretrodombarbacampina",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "DOMBARBA",
    "highlights": [
      "Mais tradicional de Catolé",
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://barbearia-retro-dom-barba-campina.com.br",
    "viewsCount": 504,
    "whatsappClicks": 202,
    "aboutText": "Barbearia Retrô Dom Barba Campina é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Catolé, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Corte Masculino Degradê + Barboterapia",
        "price": "R$ 60,00",
        "desc": "Lavagem especial, massagem facial e finalização com pomada matte.",
        "image": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional DOMBARBA ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Barbearia Retrô Dom Barba Campina?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "autoescola-rainha-habilitacao-a-e-b",
    "name": "Autoescola Rainha Habilitação A e B",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Recomendado TV",
    "description": "Conquiste sua CNH com instrutores pacientes e credenciados pelo Detran-PB. Carros e motos novas com ar-condicionado.",
    "offer": "Primeira habilitação categoria AB com taxa de matrícula grátis.",
    "rating": 4.8,
    "reviewsCount": 406,
    "neighborhood": "Liberdade",
    "address": "R. Odon Bezerra, 540 - Liberdade, Campina Grande - PB",
    "phone": "(83) 3321-0453",
    "whatsapp": "5583990071683",
    "instagram": "@autoescolarainhahabilitacaoaeb",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "HABILITACG",
    "highlights": [
      "Atendimento ágil via WhatsApp",
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://autoescola-rainha-habilitacao-a-e-b.com.br",
    "viewsCount": 533,
    "whatsappClicks": 209,
    "aboutText": "Autoescola Rainha Habilitação A e B é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Liberdade, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Pacote Completo CNH Categoria B (Carro)",
        "price": "R$ 1.250,00",
        "desc": "Aulas teóricas e práticas com simulador e agendamento flexível de horários.",
        "image": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional HABILITACG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Autoescola Rainha Habilitação A e B?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "estudio-fotografico-memorias-campinenses",
    "name": "Estúdio Fotográfico Memórias Campinenses",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Referência Local",
    "description": "Ensaios fotográficos de gestantes, famílias, formaturas e produtos publicitários com iluminação de cinema e estúdio amplo.",
    "offer": "Mini-ensaio fotográfico em estúdio com 10 fotos tratadas por R$ 150.",
    "rating": 4.9,
    "reviewsCount": 419,
    "neighborhood": "Prata",
    "address": "R. Duque de Caxias, 680 - Prata, Campina Grande - PB",
    "phone": "(83) 3321-0870",
    "whatsapp": "5583990072422",
    "instagram": "@estudiofotograficomemoriascampinenses",
    "featuredInShow": "Programa Destaque Empresarial",
    "discountCoupon": "FOTOSCG",
    "highlights": [
      "Aceita Pix, Débito e Cartões em até 12x",
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://estudio-fotografico-memorias-campinenses.com.br",
    "viewsCount": 562,
    "whatsappClicks": 216,
    "aboutText": "Estúdio Fotográfico Memórias Campinenses é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Prata, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Ensaio Fotográfico Profissional 20 Fotos Tratadas",
        "price": "R$ 290,00",
        "desc": "Trocas de figurino em estúdio climatizado com entrega em alta resolução.",
        "image": "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional FOTOSCG ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Estúdio Fotográfico Memórias Campinenses?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  },
  {
    "id": "lava-car-estofados-limpeza-domiciliar-higiclean",
    "name": "Lava Car & Estofados Limpeza Domiciliar HigiClean",
    "category": "Outros",
    "categoryId": "outros",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "tagTv": "⭐ Destaque Campina",
    "description": "Higienização profunda de sofás, colchões, cadeiras de escritório e poltronas na sua residência com extração a vácuo antibacteriana.",
    "offer": "15% de desconto na higienização de sofá de 3 lugares + impermeabilização.",
    "rating": 5,
    "reviewsCount": 432,
    "neighborhood": "Bodocongó",
    "address": "Av. Floriano Peixoto, 2900 - Bodocongó, Campina Grande - PB",
    "phone": "(83) 3321-1287",
    "whatsapp": "5583990073161",
    "instagram": "@lavacarestofadoslimpezadomiciliarhigiclean",
    "featuredInShow": "Giro Comercial CG",
    "discountCoupon": "HIGICLEAN",
    "highlights": [
      "Entrega express em toda Campina Grande",
      "Estacionamento facilitado no local",
      "Garantia e procedência comprovada"
    ],
    "isVerifiedTv": true,
    "openingHours": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
    "website": "https://lava-car-estofados-limpeza-domiciliar-higiclean.com.br",
    "viewsCount": 591,
    "whatsappClicks": 223,
    "aboutText": "Lava Car & Estofados Limpeza Domiciliar HigiClean é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro Bodocongó, unimos tradição paraibana e inovação contínua.",
    "aboutImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "services": [
      {
        "name": "Higienização Profunda de Sofá 3 Lugares a Domicílio",
        "price": "R$ 140,00",
        "desc": "Remoção de ácaros, fungos e odores com secagem rápida em até 3 horas.",
        "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "testimonials": [
      {
        "name": "Mariana Medeiros",
        "neighborhood": "Catolé",
        "comment": "Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.",
        "rating": 5
      },
      {
        "name": "Rodrigo Albuquerque",
        "neighborhood": "Alto Branco",
        "comment": "Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.",
        "rating": 5
      },
      {
        "name": "Camila Fernandes",
        "neighborhood": "Prata",
        "comment": "Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.",
        "rating": 5
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Contato Inicial",
        "description": "Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande."
      },
      {
        "step": 2,
        "title": "Atendimento & Orçamento",
        "description": "Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso."
      },
      {
        "step": 3,
        "title": "Separação & Preparo",
        "description": "Seu pedido é separado e embalado com rigoroso controle de qualidade."
      },
      {
        "step": 4,
        "title": "Retirada ou Entrega Express",
        "description": "Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa."
      }
    ],
    "faq": [
      {
        "question": "Quais são as formas de pagamento aceitas?",
        "answer": "Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado."
      },
      {
        "question": "Vocês realizam entregas em todos os bairros de Campina Grande?",
        "answer": "Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express."
      },
      {
        "question": "Como faço para utilizar o cupom de desconto?",
        "answer": "Basta informar o código promocional HIGICLEAN ao iniciar sua conversa em nosso atendimento no WhatsApp."
      }
    ],
    "ctaTitle": "Pronto para ter a melhor experiência com a Lava Car & Estofados Limpeza Domiciliar HigiClean?",
    "ctaSubtitle": "Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.",
    "visibleSections": {
      "hero": true,
      "offer": true,
      "about": true,
      "benefits": true,
      "services": true,
      "process": true,
      "testimonials": true,
      "gallery": true,
      "faq": true,
      "cta": true,
      "contact": true,
      "floatingWhatsapp": true
    }
  }
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
    id: 'plano-bronze',
    name: 'Presença Digital Local',
    badge: 'Básico',
    originalPrice: 'R$ 199/mês',
    promoPrice: 'R$ 99/mês',
    period: 'no plano anual',
    features: [
      'Página exclusiva no portal Comércio Campina',
      'Botão direto de WhatsApp para fechamento de vendas',
      'Divulgação de cupons e catálogo de fotos',
      'Localização no mapa e rotas GPS',
    ],
    recommended: false,
  },
  {
    id: 'plano-prata',
    name: 'Destaque na Categoria',
    badge: 'Mais Escolhido ⭐',
    originalPrice: 'R$ 399/mês',
    promoPrice: 'R$ 199/mês',
    period: '50% OFF Fundadores',
    features: [
      'Tudo do plano Presença Digital',
      'Posição prioritária na categoria do seu comércio',
      'Selo dourado "⭐ Empresa Verificada" no portal',
      'Destaque no carrossel de empresas da página principal',
      'Link direto para WhatsApp e redes sociais',
    ],
    recommended: true,
  },
  {
    id: 'plano-ouro',
    name: 'Banner Master Comercial',
    badge: 'Máxima Visibilidade',
    originalPrice: 'R$ 799/mês',
    promoPrice: 'R$ 399/mês',
    period: 'Vagas Limitadas',
    features: [
      'Tudo do plano Destaque',
      'Banner rotativo exclusivo de alta visibilidade no topo',
      'Destaque na primeira dobra da página inicial',
      'Inclusão nas campanhas promocionais do comércio local',
      'Relatório mensal de cliques, visualizações e contatos gerados',
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
    badge: '⭐ Destaque Saúde & Óticas',
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
    badge: '⭐ Culinária Regional',
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
    id: 'banner-casa-iluminacao',
    merchantId: 'casa-construtora-borborema',
    merchantName: 'Casa & Iluminação Borborema',
    headline: 'Pisos, Porcelanatos & Iluminação em LED com até 30% OFF',
    subtitle: 'Tudo para sua reforma e construção com entrega rápida e expressa em toda a cidade de Campina Grande.',
    badge: '⭐ Destaque Construção & Lar',
    mediaType: 'image',
    mediaUrl: '/src/assets/images/campina_tech_store_1793926202240.jpg',
    ctaText: 'Solicitar Orçamento no WhatsApp',
    ctaWhatsapp: '5583997707000',
    ctaStoreId: 'casa-construtora-borborema',
    status: 'active',
    validUntil: '31/12/2026',
    order: 4,
    clicksCount: 420,
    monthlyInvestment: 'R$ 299/mês',
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
    selectedPlan: 'Destaque na Categoria (R$ 199/mês)',
    createdAt: 'Hoje, 09:15',
    status: 'novo',
    notes: 'Interessado em anunciar seus serviços para motoristas de Campina.',
  },
  {
    id: 'lead-2',
    companyName: 'Espaço Mulher Moda Feminina',
    ownerName: 'Mariana Medeiros',
    whatsapp: '(83) 99123-5678',
    category: 'Moda & Acessórios',
    neighborhood: 'Centro',
    selectedPlan: 'Banner Master Comercial (R$ 399/mês)',
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
    selectedPlan: 'Presença Digital Local (R$ 99/mês)',
    createdAt: '3 dias atrás',
    status: 'aprovado',
    notes: 'Contrato assinado. Loja ativa na vitrine.',
  },
];
