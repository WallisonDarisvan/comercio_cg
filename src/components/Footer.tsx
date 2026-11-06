import { MapPin, Phone, Mail, Instagram, Youtube, Radio, Heart } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenSchedule: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRegister,
  onOpenSchedule,
  onOpenAdmin,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & TV Partnership */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B3B60] to-[#145388] flex items-center justify-center text-amber-400 font-extrabold text-base border border-white/10">
                CC
              </div>
              <span className="text-lg font-extrabold text-white">
                Comércio<span className="text-[#F26522]">Campina</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              O maior portal de conexão entre os consumidores e os comércios locais de Campina Grande, com a credibilidade e alcance de sinal da <strong>TV Borborema (Canal 9.1 HD)</strong>.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> Sinal Digital 9.1
              </span>
              <span className="text-[11px] text-amber-400 font-semibold bg-amber-400/10 px-2 py-1 rounded-lg border border-amber-400/20">
                SBT Paraíba
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#tv-ao-vivo" className="hover:text-[#F26522] transition-colors">
                  Assistir TV Borborema Ao Vivo
                </a>
              </li>
              <li>
                <a href="#vitrine-lojas" className="hover:text-[#F26522] transition-colors">
                  Vitrine de Estabelecimentos Recomendados
                </a>
              </li>
              <li>
                <button onClick={onOpenSchedule} className="hover:text-[#F26522] transition-colors text-left">
                  Grade de Programação Oficial
                </button>
              </li>
              <li>
                <button onClick={onOpenRegister} className="text-[#F26522] font-semibold hover:underline text-left">
                  Cadastrar Loja com 50% OFF
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="text-slate-400 hover:text-white transition-colors text-left flex items-center gap-1.5 pt-1">
                  <span>Área Administrativa (Gestão)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Business & TV Broadcast */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Para Empreendedores
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <span className="block text-slate-200 font-semibold">Anúncios Integrados:</span>
                Chamadas de 15s e 30s nos intervalos comerciais dos telejornais da TV Borborema.
              </li>
              <li>
                <span className="block text-slate-200 font-semibold">Merchandising ao Vivo:</span>
                Apresentadores recomendando produtos com links QR Code diretamente no ar.
              </li>
              <li>
                <span className="block text-slate-200 font-semibold">Selo Verificado:</span>
                Garantia de procedência e credibilidade para o consumidor de Campina Grande.
              </li>
            </ul>
          </div>

          {/* Headquarters & Contacts */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Sede TV Borborema & Redação
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                <span>Rua Venâncio Neiva, Centro - Campina Grande - PB</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Redação WhatsApp: (83) 99999-0909</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>comercial@comerciocampina.com.br</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://youtube.com/@tvborborema"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                title="YouTube TV Borborema"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/tvborboremaoficial"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                title="Instagram TV Borborema"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <p>
            © 2026 Comércio Campina. Todos os direitos reservados. Feito com orgulho na Rainha da Borborema.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1">
            <span>Conectando negócios e famílias com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>em Campina Grande</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
