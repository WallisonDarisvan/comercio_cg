import { Newspaper, ArrowRight, Clock, User } from 'lucide-react';
import { NEWS_ARTICLES, NewsArticle } from '../data/mockData';

interface NewsFeedProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ onSelectArticle }) => {
  return (
    <section className="py-8 sm:py-12 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3B60] text-xs font-bold">
                <Newspaper className="w-3.5 h-3.5 text-[#0B3B60]" />
                BASTIDORES & TELEJORNALISMO
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Cobertura TV Borborema
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Economia & Negócios em Campina Grande
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Fique por dentro das movimentações do comércio, feiras tradicionais, incentivos aos lojistas e polos de inovação da Rainha da Borborema.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Atualizado diariamente pela Redação</span>
          </div>
        </div>

        {/* 3-Column News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[11px] font-bold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3B60] transition-colors leading-snug mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <User className="w-3.5 h-3.5 text-[#F26522]" />
                    <span className="truncate max-w-[140px]">{article.reporter}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[#F26522] font-semibold text-xs group-hover:translate-x-0.5 transition-transform">
                    Ler matéria
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
