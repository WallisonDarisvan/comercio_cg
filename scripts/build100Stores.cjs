const fs = require('fs');
const path = require('path');
const { stores } = require('./generateStoresData.cjs');

console.log(`Carregando ${stores.length} lojas base...`);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Generate realistic details for each store adhering to the 12 landing page sections
const completeStores = stores.map((s, index) => {
  const slug = slugify(s.name);
  const cleanPhoneNum = (990000000 + (index * 739) % 999999).toString();
  const landlineNum = (33210000 + (index * 417) % 9999).toString();
  
  const phone = `(83) ${landlineNum.slice(0, 4)}-${landlineNum.slice(4)}`;
  const whatsapp = `55839${cleanPhoneNum.slice(1)}`;

  const highlightsPool = [
    `Mais tradicional de ${s.bairro}`,
    'Atendimento ágil via WhatsApp',
    'Aceita Pix, Débito e Cartões em até 12x',
    'Entrega express em toda Campina Grande',
    'Estacionamento facilitado no local',
    'Garantia e procedência comprovada'
  ];

  const highlights = [
    highlightsPool[index % highlightsPool.length],
    highlightsPool[(index + 1) % highlightsPool.length],
    highlightsPool[(index + 2) % highlightsPool.length],
  ];

  const defaultServices = [
    {
      name: `Atendimento / Produto Principal ${s.name.split(' ')[0]}`,
      price: 'Consulte Condições',
      description: `Solução especializada com alta qualidade e padrão de excelência em Campina Grande.`,
      image: s.img
    },
    {
      name: `Pacote Especial ${s.cat}`,
      price: 'A partir de R$ 49,90',
      description: `Condição exclusiva para clientes do portal Comércio Campina Grande.`,
      image: s.img
    }
  ];

  const testimonials = [
    {
      name: 'Mariana Medeiros',
      neighborhood: 'Catolé',
      comment: `Excelente atendimento! Sempre compro com eles e a qualidade do serviço aqui em Campina Grande é impecável.`,
      rating: 5
    },
    {
      name: 'Rodrigo Albuquerque',
      neighborhood: 'Alto Branco',
      comment: `Recomendo demais. Preço justo, agilidade e profissionais super educados e competentes.`,
      rating: 5
    },
    {
      name: 'Camila Fernandes',
      neighborhood: 'Prata',
      comment: `Nota 10! Tiraram todas as minhas dúvidas pelo WhatsApp e o pedido chegou bem rápido.`,
      rating: 5
    }
  ];

  const processSteps = [
    { step: 1, title: 'Contato Inicial', description: 'Clique no botão de WhatsApp para falar direto com nossa equipe em Campina Grande.' },
    { step: 2, title: 'Atendimento & Orçamento', description: 'Tire suas dúvidas, conheça os produtos e receba orçamentos personalizados sem compromisso.' },
    { step: 3, title: 'Separação & Preparo', description: 'Seu pedido é separado e embalado com rigoroso controle de qualidade.' },
    { step: 4, title: 'Retirada ou Entrega Express', description: 'Retire na nossa loja física ou receba com rapidez e segurança no conforto da sua casa.' }
  ];

  const faq = [
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix (com confirmação imediata), dinheiro e todos os principais cartões de crédito e débito com parcelamento facilitado.'
    },
    {
      question: 'Vocês realizam entregas em todos os bairros de Campina Grande?',
      answer: 'Sim! Entregamos em todas as regiões de Campina Grande (Centro, Catolé, Bodocongó, Alto Branco, Liberdade, Cruzeiro, Malvinas, etc.) via motoboy express.'
    },
    {
      question: 'Como faço para utilizar o cupom de desconto?',
      answer: `Basta informar o código promocional ${s.coupon || 'CAMPINACG'} ao iniciar sua conversa em nosso atendimento no WhatsApp.`
    }
  ];

  const gallery = [
    s.img,
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  ];

  return {
    id: index === 0 ? 'tudo-celular-cg' : slug,
    name: index === 0 ? 'Tudo Celular CG Premium' : s.name,
    category: s.cat,
    categoryId: s.catId,
    image: s.img,
    tagTv: index % 3 === 0 ? '⭐ Destaque Campina' : index % 3 === 1 ? '⭐ Recomendado TV' : '⭐ Referência Local',
    description: s.desc,
    offer: s.offer || 'Condições especiais e vantagens exclusivas para clientes do portal.',
    rating: Number((4.7 + (index % 4) * 0.1).toFixed(1)),
    reviewsCount: 45 + (index * 13) % 450,
    neighborhood: s.bairro,
    address: `${s.rua} - ${s.bairro}, Campina Grande - PB`,
    phone,
    whatsapp,
    instagram: `@${slug.replace(/-/g, '')}`,
    featuredInShow: index % 2 === 0 ? 'Programa Destaque Empresarial' : 'Giro Comercial CG',
    discountCoupon: s.coupon || 'CAMPINACG',
    highlights,
    isVerifiedTv: true,
    openingHours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00',
    website: `https://${slug}.com.br`,
    viewsCount: 120 + (index * 29) % 800,
    whatsappClicks: 30 + (index * 7) % 250,
    aboutText: `${s.name} é uma empresa consolidada em Campina Grande - PB, oferecendo soluções com alto padrão de qualidade, atendimento caloroso e compromisso com a satisfação de cada cliente. Localizada no bairro ${s.bairro}, unimos tradição paraibana e inovação contínua.`,
    aboutImage: s.img,
    services: s.serv && s.serv.length > 0 ? s.serv : defaultServices,
    testimonials,
    gallery,
    processSteps,
    faq,
    ctaTitle: `Pronto para ter a melhor experiência com a ${s.name}?`,
    ctaSubtitle: `Fale agora mesmo com nossa equipe pelo WhatsApp oficial e garanta seu atendimento personalizado com desconto exclusivo.`,
    visibleSections: {
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
      floatingWhatsapp: true
    }
  };
});

console.log(`Geradas ${completeStores.length} lojas completas.`);

// Read src/data/mockData.ts
const mockDataPath = path.resolve(__dirname, '../src/data/mockData.ts');
let mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

// Replace CATEGORIES count
const updatedCategories = `export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Todos os Comércios', iconName: 'Store', count: 100, color: 'text-blue-600 bg-blue-50' },
  { id: 'gastronomia', name: 'Alimentação & Sabores', iconName: 'Utensils', count: 18, color: 'text-amber-600 bg-amber-50' },
  { id: 'moda', name: 'Moda & Acessórios', iconName: 'ShoppingBag', count: 15, color: 'text-pink-600 bg-pink-50' },
  { id: 'saude', name: 'Saúde & Óticas', iconName: 'Glasses', count: 15, color: 'text-emerald-600 bg-emerald-50' },
  { id: 'tecnologia', name: 'Tecnologia & Celulares', iconName: 'Smartphone', count: 14, color: 'text-cyan-600 bg-cyan-50' },
  { id: 'automotivo', name: 'Serviços Automotivos', iconName: 'Car', count: 13, color: 'text-orange-600 bg-orange-50' },
  { id: 'construcao', name: 'Construção & Lar', iconName: 'Hammer', count: 13, color: 'text-indigo-600 bg-indigo-50' },
  { id: 'outros', name: 'Outros Serviços', iconName: 'Tag', count: 12, color: 'text-slate-600 bg-slate-50' },
];`;

const categoriesRegex = /export const CATEGORIES: Category\[\] = \[[\s\S]*?\];/;
if (categoriesRegex.test(mockDataContent)) {
  mockDataContent = mockDataContent.replace(categoriesRegex, updatedCategories);
  console.log('CATEGORIES atualizadas com sucesso.');
}

// Replace STORES_DATA
const storesDataString = `export const STORES_DATA: Store[] = ${JSON.stringify(completeStores, null, 2)};`;
const storesDataRegex = /export const STORES_DATA: Store\[\] = \[[\s\S]*?\n\];/;

if (storesDataRegex.test(mockDataContent)) {
  mockDataContent = mockDataContent.replace(storesDataRegex, storesDataString);
  fs.writeFileSync(mockDataPath, mockDataContent, 'utf8');
  console.log(`src/data/mockData.ts atualizado com ${completeStores.length} lojas!`);
} else {
  console.error('Regex para STORES_DATA não encontrou o array.');
}
