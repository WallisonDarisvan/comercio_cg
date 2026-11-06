import React from 'react';
import { X, Clock, User, Share2, Newspaper, Tv, Check } from 'lucide-react';
import { NewsArticle } from '../data/mockData';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  article,
  onClose,
  onOpenRegister,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.summary,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${article.title} - ${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col mt-auto sm:my-auto">
        
        {/* Mobile Drag Handle */}
        <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-20 w-10 h-1.5 bg-white/70 rounded-full pointer-events-none" />

        {/* Cover */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 shrink-0">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-bold">
              {article.category}
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-amber-300 mb-1">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-slate-700">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 font-medium">
              <User className="w-4 h-4 text-[#F26522]" />
              <span>Por {article.reporter}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-slate-600 hover:text-[#0B3B60] font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link copiado!' : 'Compartilhar'}</span>
            </button>
          </div>

          <p className="text-sm font-semibold text-slate-900 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            "{article.summary}"
          </p>

          <div className="text-sm text-slate-700 leading-relaxed space-y-3">
            <p>{article.content}</p>
            <p>
              Acompanhe a cobertura completa e entrevistas exclusivas com os protagonistas do desenvolvimento econômico de Campina Grande nas edições diárias de O Povo na TV, Comando Policial, NC Sports e SBT Paraíba na TV Borborema.
            </p>
          </div>

          {/* TV Borborema commercial box in news */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Tv className="w-5 h-5 text-[#0B3B60] shrink-0" />
              <span className="text-slate-800 font-medium">
                Tem uma empresa em Campina Grande? Faça parte da vitrine de parceiros oficiais da TV.
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="px-3.5 py-2 rounded-xl bg-[#0B3B60] hover:bg-[#145388] text-white font-bold whitespace-nowrap min-h-[38px] shrink-0"
            >
              Cadastrar com 50% OFF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
