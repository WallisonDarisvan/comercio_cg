import React, { useState } from 'react';
import { X, Lock, Mail, Store, User, Phone, MapPin, Tag, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CATEGORIES, NEIGHBORHOODS, Store as StoreType } from '../../data/mockData';
import { merchantLoginApi, merchantRegisterApi, MerchantUser } from '../../services/api';

interface MerchantAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (merchant: MerchantUser, store: StoreType) => void;
}

export const MerchantAuthModal: React.FC<MerchantAuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regStoreName, setRegStoreName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regWhatsapp, setRegWhatsapp] = useState('');
  const [regCategory, setRegCategory] = useState(CATEGORIES[1]?.name || 'Alimentação & Gastronomia');
  const [regCategoryId, setRegCategoryId] = useState(CATEGORIES[1]?.id || 'gastronomia');
  const [regNeighborhood, setRegNeighborhood] = useState('Centro');

  if (!isOpen) return null;

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const catId = e.target.value;
    const found = CATEGORIES.find((c) => c.id === catId);
    if (found) {
      setRegCategoryId(found.id);
      setRegCategory(found.name);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const res = await merchantLoginApi({
        email: loginEmail,
        password: loginPassword,
      });

      if (res.ok && res.data) {
        localStorage.setItem('comercio_cg_merchant_token', res.data.token);
        localStorage.setItem('comercio_cg_merchant_user', JSON.stringify(res.data.merchant));
        if (res.data.store) {
          localStorage.setItem('comercio_cg_merchant_store', JSON.stringify(res.data.store));
        }
        setSuccessMessage('Acesso liberado! Carregando seu painel...');
        setTimeout(() => {
          onAuthSuccess(res.data!.merchant, res.data!.store);
          onClose();
        }, 600);
      } else {
        // Fallback local se o backend estiver desconectado
        const savedStores: StoreType[] = JSON.parse(localStorage.getItem('comercio_campina_stores') || '[]');
        const fallbackStore = savedStores[0] || null;
        if (loginEmail === 'lojista@comerciocg.com.br' && loginPassword === 'lojista123') {
          const mockUser: MerchantUser = {
            id: 'merchant-demo',
            name: 'Carlos Eduardo',
            email: loginEmail,
            whatsapp: '83998881234',
            storeId: fallbackStore ? fallbackStore.id : 'store-1',
          };
          localStorage.setItem('comercio_cg_merchant_token', 'mock-demo-token');
          localStorage.setItem('comercio_cg_merchant_user', JSON.stringify(mockUser));
          if (fallbackStore) {
            localStorage.setItem('comercio_cg_merchant_store', JSON.stringify(fallbackStore));
          }
          setSuccessMessage('Acesso demo liberado! Carregando seu painel...');
          setTimeout(() => {
            onAuthSuccess(mockUser, fallbackStore);
            onClose();
          }, 600);
          return;
        }

        setErrorMessage(res.error || 'E-mail ou senha incorretos.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Erro ao conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const res = await merchantRegisterApi({
        name: regName,
        storeName: regStoreName,
        email: regEmail,
        password: regPassword,
        whatsapp: regWhatsapp,
        category: regCategory,
        categoryId: regCategoryId,
        neighborhood: regNeighborhood,
        address: `${regNeighborhood}, Campina Grande - PB`,
      });

      if (res.ok && res.data) {
        localStorage.setItem('comercio_cg_merchant_token', res.data.token);
        localStorage.setItem('comercio_cg_merchant_user', JSON.stringify(res.data.merchant));
        localStorage.setItem('comercio_cg_merchant_store', JSON.stringify(res.data.store));
        
        // Também salva a nova loja no localStorage de lojas caso esteja offline
        const localStores: StoreType[] = JSON.parse(localStorage.getItem('comercio_campina_stores') || '[]');
        localStorage.setItem('comercio_campina_stores', JSON.stringify([res.data.store, ...localStores]));

        setSuccessMessage('Conta e página da loja criadas com sucesso!');
        setTimeout(() => {
          onAuthSuccess(res.data!.merchant, res.data!.store);
          onClose();
        }, 800);
      } else {
        setErrorMessage(res.error || 'Falha ao criar conta de lojista.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Erro ao criar conta.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = () => {
    setLoginEmail('lojista@comerciocg.com.br');
    setLoginPassword('lojista123');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#0B3B60] via-[#0e4875] to-[#124d7c] px-6 pt-6 pb-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-2">
            <Store className="w-3.5 h-3.5" />
            <span>Portal do Comerciante</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Área do Lojista
          </h3>
          <p className="text-xs text-blue-100/90 mt-1">
            Acesse e gerencie exclusivamente a página do seu estabelecimento em Campina Grande.
          </p>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 p-1 bg-black/20 rounded-xl mt-4">
            <button
              type="button"
              onClick={() => {
                setTab('login');
                setErrorMessage('');
              }}
              className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                tab === 'login'
                  ? 'bg-white text-[#0B3B60] shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Fazer Login
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('register');
                setErrorMessage('');
              }}
              className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                tab === 'register'
                  ? 'bg-white text-[#0B3B60] shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Cadastrar Minha Loja
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Alerts */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* TAB 1: LOGIN */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  E-mail do Lojista
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="ex: contato@sualoja.com.br"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Senha
                  </label>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Sua senha secreta"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Demo Fill Helper */}
              <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
                <span>Deseja testar rapidamente?</span>
                <button
                  type="button"
                  onClick={fillDemo}
                  className="text-[#F26522] hover:underline font-semibold cursor-pointer"
                >
                  Usar Conta Demo
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-[#0B3B60] to-[#124d7c] hover:brightness-110 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Entrando...</span>
                  </>
                ) : (
                  <>
                    <span>Acessar Meu Painel</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* TAB 2: REGISTER */}
          {tab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Seu Nome (Responsável)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="ex: Carlos Silva"
                    className="w-full pl-10 pr-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome do Estabelecimento
                </label>
                <div className="relative">
                  <Store className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={regStoreName}
                    onChange={(e) => setRegStoreName(e.target.value)}
                    placeholder="ex: Barbearia Central Campina"
                    className="w-full pl-10 pr-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Categoria
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={regCategoryId}
                      onChange={handleCategoryChange}
                      className="w-full pl-10 pr-2 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none bg-white transition-all"
                    >
                      {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Bairro
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={regNeighborhood}
                      onChange={(e) => setRegNeighborhood(e.target.value)}
                      className="w-full pl-10 pr-2 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] outline-none bg-white transition-all"
                    >
                      {NEIGHBORHOODS.filter((n) => n !== 'Todos os Bairros').map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp Comercial
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={regWhatsapp}
                    onChange={(e) => setRegWhatsapp(e.target.value)}
                    placeholder="(83) 99999-9999"
                    className="w-full pl-10 pr-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  E-mail de Login
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="email@exemplo.com"
                    className="w-full pl-10 pr-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Criar Senha
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full pl-10 pr-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#0B3B60] focus:ring-2 focus:ring-[#0B3B60]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 py-3 px-4 bg-gradient-to-r from-[#F26522] to-[#ff7a3d] hover:brightness-105 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Criando sua loja...</span>
                  </>
                ) : (
                  <>
                    <span>Criar Minha Loja & Entrar</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Footer Guarantee */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              Controle exclusivo da sua página · Conexão segura PostgreSQL
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

