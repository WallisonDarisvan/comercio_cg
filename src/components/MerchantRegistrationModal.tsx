import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Building,
  Phone,
  User,
  MapPin,
  Clock,
} from 'lucide-react';
import { COMMERCIAL_PLANS, CATEGORIES, NEIGHBORHOODS, LeadSubmission } from '../data/mockData';

interface MerchantRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted?: (lead: LeadSubmission) => void;
}

export const MerchantRegistrationModal: React.FC<MerchantRegistrationModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmitted,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState('plano-prata');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [category, setCategory] = useState(CATEGORIES[1].id);
  const [neighborhood, setNeighborhood] = useState('Centro');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const protocol = `CC-LOJA-${randomCode}`;
      const selectedPlan = COMMERCIAL_PLANS.find((p) => p.id === selectedPlanId);
      const catObj = CATEGORIES.find((c) => c.id === category);

      if (onLeadSubmitted) {
        onLeadSubmitted({
          id: `lead-${Date.now()}`,
          companyName: companyName || 'Nova Empresa',
          ownerName: contactName || 'Proprietário',
          whatsapp: whatsapp || '(83) 99999-0000',
          category: catObj ? catObj.name : 'Geral',
          neighborhood: neighborhood || 'Centro',
          selectedPlan: selectedPlan?.name || 'Destaque na Categoria',
          createdAt: 'Agora mesmo',
          status: 'novo',
          notes: `Protocolo gerado: ${protocol}`,
        });
      }

      setSubmittedProtocol(protocol);
      setIsSubmitting(false);
    }, 900);
  };

  const handleWhatsappCommercial = () => {
    const selectedPlan = COMMERCIAL_PLANS.find((p) => p.id === selectedPlanId);
    const msg = encodeURIComponent(
      `Olá Depto. Comercial Comércio Campina!\n` +
      `Gostaria de confirmar a adesão com 50% OFF para minha empresa:\n` +
      `Empresa: ${companyName}\n` +
      `Responsável: ${contactName}\n` +
      `Bairro: ${neighborhood}\n` +
      `Plano escolhido: ${selectedPlan?.name}\n` +
      `Protocolo: ${submittedProtocol}`
    );
    window.open(`https://wa.me/5583999990909?text=${msg}`, '_blank');
  };

  const resetAndClose = () => {
    setSubmittedProtocol(null);
    setCompanyName('');
    setContactName('');
    setWhatsapp('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={resetAndClose} />

      {/* Modal Card (Bottom Sheet on Mobile, Centered Modal on Desktop) */}
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col mt-auto sm:my-auto">
        
        {/* Mobile Drag Handle */}
        <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-20 w-10 h-1.5 bg-white/60 rounded-full pointer-events-none" />

        {/* Top Header */}
        <div className="p-4 sm:p-6 pt-5 sm:pt-6 bg-gradient-to-r from-[#0B3B60] via-[#124d7c] to-[#F26522] text-white shrink-0 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px] cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-extrabold uppercase tracking-tight shadow-sm">
              50% OFF · PLANOS FUNDADORES
            </span>
            <span className="text-xs text-blue-100 flex items-center gap-1 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Comércio Campina Oficial
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            Coloque Sua Loja em Destaque no Portal Regional
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
            Aumente o fluxo de clientes na sua empresa e multiplique vendas com o portal de maior presença comercial em Campina Grande.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {submittedProtocol ? (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Proposta de Adesão Gerada com Sucesso!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Seu desconto de <strong className="text-[#F26522]">50% OFF</strong> foi reservado para <strong>{companyName || 'sua empresa'}</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm mx-auto text-xs text-slate-700">
                <span className="text-slate-500 block uppercase font-medium text-[10px]">Número de Protocolo:</span>
                <span className="font-mono font-bold text-lg text-[#0B3B60]">{submittedProtocol}</span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Nossa equipe de atendimento do Comércio Campina entrará em contato em instantes pelo WhatsApp.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsappCommercial}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Finalizar Atendimento Imediato no WhatsApp</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors min-h-[44px] cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Select Plan */}
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
                  1. Escolha o Plano Ideal para seu Negócio:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {COMMERCIAL_PLANS.map((plan) => {
                    const isSelected = selectedPlanId === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#0B3B60] bg-blue-50/40 shadow-md ring-2 ring-[#0B3B60]/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                              {plan.badge}
                            </span>
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-[#0B3B60] bg-[#0B3B60]' : 'border-slate-300'
                            }`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 mb-1">{plan.name}</h4>
                          
                          <div className="mb-3">
                            <span className="text-xs text-slate-400 line-through mr-1.5">
                              {plan.originalPrice}
                            </span>
                            <span className="text-base font-extrabold text-[#F26522]">
                              {plan.promoPrice}
                            </span>
                            <span className="text-[10px] text-slate-500 block font-medium">
                              {plan.period}
                            </span>
                          </div>

                          <ul className="space-y-1.5 text-[11px] text-slate-600 mb-2">
                            {plan.features.slice(0, 3).map((feat, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="leading-tight">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Company Information */}
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
                  2. Dados do seu Comércio em Campina Grande:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Company Name */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Nome da Loja / Empresa *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Ex: Óptica Central CG"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-xl text-base sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B60] min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Nome do Responsável *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Ex: Maria Medeiros"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-xl text-base sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B60] min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      WhatsApp Comercial para Atendimento *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(83) 99999-0000"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-xl text-base sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B60] min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Neighborhood */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Bairro em Campina Grande *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <select
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-xl text-base sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B60] min-h-[44px]"
                      >
                        {NEIGHBORHOODS.filter((n) => n !== 'Todos os Bairros').map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Segmento de Atuação *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 rounded-xl text-base sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B60] min-h-[44px]"
                    >
                      {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>

              {/* Guarantees note */}
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center gap-2.5 text-xs text-[#0B3B60]">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Sem taxa de adesão e sem fidelidade obrigatória. Sua empresa receberá selo de verificação e destaque imediato no portal.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F26522] to-amber-500 hover:brightness-105 active:scale-98 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                {isSubmitting ? (
                  <span>Processando Adesão com 50% OFF...</span>
                ) : (
                  <>
                    <span>Garantir Vaga de Membro Fundador</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
