import React, { useState } from 'react';
import { TV_PROGRAMS } from '../data/mockData';

interface BroadcastModuleProps {
  onOpenSchedule?: () => void;
  onOpenRegister?: () => void;
}

// Helper to extract a YouTube Video ID or return a clean embed URL
function extractYouTubeEmbed(urlOrId: string): string {
  if (!urlOrId) {
    return 'https://www.youtube-nocookie.com/embed/live_stream?channel=TVBorborema&autoplay=1&mute=1&playsinline=1';
  }

  const trimmed = urlOrId.trim();

  // If already an 11-char YouTube ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return `https://www.youtube-nocookie.com/embed/${trimmed}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }

  // If already an embed URL
  if (trimmed.includes('youtube.com/embed/') || trimmed.includes('youtube-nocookie.com/embed/')) {
    const base = trimmed.split('?')[0];
    return `${base}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }

  // https://youtu.be/VIDEO_ID
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortMatch[1]}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }

  // https://www.youtube.com/watch?v=VIDEO_ID or /live/VIDEO_ID
  const standardMatch = trimmed.match(/(?:v=|\/live\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);
  if (standardMatch) {
    return `https://www.youtube-nocookie.com/embed/${standardMatch[1]}?autoplay=1&mute=1&playsinline=1&rel=0`;
  }

  return trimmed;
}

const DEFAULT_YOUTUBE_LINK = 'https://www.youtube.com/@TVBorborema/live';

export const BroadcastModule: React.FC<BroadcastModuleProps> = () => {
  const [currentYoutubeUrl] = useState<string>(() => {
    return localStorage.getItem('tv_borborema_youtube_url') || DEFAULT_YOUTUBE_LINK;
  });

  const embedUrl = extractYouTubeEmbed(currentYoutubeUrl);

  return (
    <section id="tv-ao-vivo" className="py-5 sm:py-7 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Grid: Video Player (7 cols) + Clean Program List (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Main YouTube Video Player */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-sm border border-slate-200">
              <iframe
                src={embedUrl}
                title="TV Borborema Ao Vivo - Transmissão no YouTube"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Column: Clean Program List */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-4 sm:p-5">
              
              {/* Clean Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    Programação Local
                  </h3>
                  <p className="text-[11px] text-slate-500">TV Borborema · Canal 9.1 HD</p>
                </div>
                <span className="text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                  Segunda a Sexta
                </span>
              </div>

              {/* Minimal Clean List */}
              <div className="divide-y divide-slate-200/70">
                {TV_PROGRAMS.map((prog) => (
                  <div key={prog.id} className="py-2.5 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h4 className="text-sm font-bold text-slate-900">
                          {prog.title}
                        </h4>
                        {prog.isLiveNow && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                            No Ar
                          </span>
                        )}
                      </div>
                      
                      <span className="text-xs font-semibold text-slate-500 font-mono tabular-nums shrink-0">
                        {prog.timeSlot}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
