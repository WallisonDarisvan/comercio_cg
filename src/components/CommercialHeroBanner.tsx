import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  Store,
} from 'lucide-react';
import { CommercialBanner } from '../data/mockData';

interface CommercialHeroBannerProps {
  banners: CommercialBanner[];
  onSelectStoreById?: (storeId: string) => void;
  onOpenRegister?: () => void;
}

// Helper to extract clean embed URL for YouTube
function getYouTubeEmbedUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();

  // If already an 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return `https://www.youtube-nocookie.com/embed/${trimmed}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }
  // If already an embed URL
  if (trimmed.includes('youtube.com/embed/') || trimmed.includes('youtube-nocookie.com/embed/')) {
    const base = trimmed.split('?')[0];
    return `${base}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }
  // Short URL
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortMatch[1]}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }
  // Standard Watch / Live
  const stdMatch = trimmed.match(/(?:v=|\/live\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);
  if (stdMatch) {
    return `https://www.youtube-nocookie.com/embed/${stdMatch[1]}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }

  return trimmed;
}

export const CommercialHeroBanner: React.FC<CommercialHeroBannerProps> = ({
  banners,
  onSelectStoreById,
}) => {
  const activeBanners = banners.filter((b) => b.status === 'active');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-advance banner every 6 seconds if not paused by hover or interaction
  useEffect(() => {
    if (activeBanners.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeBanners.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeBanners.length, isPaused]);

  if (activeBanners.length === 0) {
    return null;
  }

  const currentBanner = activeBanners[currentIndex % activeBanners.length];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeBanners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeBanners.length) % activeBanners.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 35;
    const isRightSwipe = distance < -35;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleOpenWhatsapp = (whatsapp: string, company: string) => {
    const msg = encodeURIComponent(
      `Olá! Vi o banner do ${company} no portal Comércio Campina e gostaria de mais informações sobre as ofertas!`
    );
    window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank');
  };

  const embedVideoUrl = currentBanner.mediaType === 'video' ? getYouTubeEmbedUrl(currentBanner.mediaUrl) : '';
  const isVideoValid = Boolean(embedVideoUrl && (embedVideoUrl.includes('youtube.com/embed/') || embedVideoUrl.includes('youtube-nocookie.com/embed/')));

  return (
    <section
      className="w-full bg-[#F8FAFC] pt-2 sm:pt-3 pb-3 sm:pb-4 select-none touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Banner card aligned with site standard container, media filling its container */}
        <div className="relative w-full h-[310px] sm:h-[350px] lg:h-[360px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-lg flex items-stretch">
        
        {/* MOBILE VIEW (below lg breakpoint): Immersive full-bleed backdrop with dark gradient scrim */}
        <div className="lg:hidden absolute inset-0 w-full h-full z-0 overflow-hidden">
          {isVideoValid ? (
            <iframe
              src={embedVideoUrl}
              title={currentBanner.headline}
              className="w-full h-full border-0 absolute inset-0 opacity-40 scale-105 pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          ) : (
            <img
              src={currentBanner.mediaUrl}
              alt={currentBanner.headline}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105"
            />
          )}
          {/* Multi-stage dark gradient scrim for 100% text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-black/50" />
        </div>

        {/* DESKTOP SPLIT VIEW & MOBILE FOREGROUND CONTENT */}
        <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          {/* Desktop Left Col: Media (Photo or Video Spot) - Hidden on Mobile to avoid squishing */}
          <div className="hidden lg:block lg:col-span-7 xl:col-span-7 relative bg-slate-950 h-full overflow-hidden">
            {isVideoValid ? (
              <iframe
                src={embedVideoUrl}
                title={currentBanner.headline}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={currentBanner.mediaUrl}
                  alt={currentBanner.headline}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900" />
              </div>
            )}
          </div>

          {/* Right Col / Mobile Card Content: Merchant Offer Details & Conversion CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between lg:bg-gradient-to-br lg:from-slate-900 lg:via-slate-900 lg:to-[#0B3B60] text-white">
            
            {/* Top Details */}
            <div>
              {/* Badge & Merchant Name */}
              <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#F26522] to-amber-500 text-white text-[10px] sm:text-[11px] font-bold shadow-xs">
                  {currentBanner.badge}
                </span>
                <span className="text-[11px] text-amber-300/90 font-semibold truncate max-w-[170px] sm:max-w-none">
                  {currentBanner.merchantName}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-base sm:text-xl lg:text-2xl font-extrabold text-white leading-snug sm:leading-tight mb-1.5 sm:mb-2 line-clamp-2">
                {currentBanner.headline}
              </h3>

              {/* Subtitle / Differential */}
              <p className="text-[11px] sm:text-xs lg:text-sm text-slate-200 lg:text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {currentBanner.subtitle}
              </p>
            </div>

            {/* Action Buttons & Footer (Ergonomic for thumbs on mobile) */}
            <div className="space-y-2 sm:space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenWhatsapp(currentBanner.ctaWhatsapp, currentBanner.merchantName)}
                  className="flex-1 py-3 px-3 sm:px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span className="truncate">{currentBanner.ctaText}</span>
                </button>

                {currentBanner.ctaStoreId && onSelectStoreById && (
                  <button
                    onClick={() => onSelectStoreById(currentBanner.ctaStoreId!)}
                    className="py-3 px-3 sm:px-4 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white text-xs font-semibold transition-all border border-white/20 flex items-center justify-center gap-1.5 min-h-[46px] cursor-pointer shrink-0"
                    title="Visitar site oficial da loja"
                  >
                    <Store className="w-4 h-4" />
                    <span className="hidden sm:inline">Visitar Site</span>
                  </button>
                )}
              </div>

              {/* Micro Guarantee & Slide Position */}
              <div className="flex items-center justify-between text-[10px] text-slate-300/80 lg:text-slate-400 pt-0.5">
                <span>Válido até {currentBanner.validUntil}</span>
                <span className="text-slate-300/70">
                  Deslize para ver mais anúncios
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Slide Indicators / Dots */}
        {activeBanners.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            {activeBanners.map((banner, index) => {
              const isActive = index === (currentIndex % activeBanners.length);
              return (
                <button
                  key={banner.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                    isActive ? 'w-5 sm:w-6 bg-[#F26522]' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para banner ${index + 1}: ${banner.merchantName}`}
                />
              );
            })}
          </div>
        )}

        </div>
      </div>
    </section>
  );
};
