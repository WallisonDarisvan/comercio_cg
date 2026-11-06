import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Trash2,
  Image as ImageIcon,
  Sparkles,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { processImageToWebP, OptimizedImageResult } from '../utils/imageOptimizer';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  helperText?: string;
  maxSizeKb?: number;
  aspectRatio?: 'banner' | 'square' | 'video';
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label,
  helperText,
  maxSizeKb = 150,
  aspectRatio = 'banner',
  className = '',
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<OptimizedImageResult | null>(null);
  const [showUrlFallback, setShowUrlFallback] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];

    // Verifica se é imagem
    if (!file.type.startsWith('image/')) {
      setError('Por favor, selecione um arquivo de imagem válido (JPG, PNG, WebP ou AVIF).');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const result = await processImageToWebP(file, { maxSizeKb });
      setStats(result);
      onChange(result.dataUrl);
    } catch (err: any) {
      console.error('[ImageUpload] Erro na conversão:', err);
      setError(err.message || 'Erro ao converter a imagem para WebP.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    setStats(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square max-h-56';
      case 'video':
        return 'aspect-video max-h-56';
      case 'banner':
      default:
        return 'aspect-[16/8] sm:aspect-[21/9] max-h-64';
    }
  };

  const isWebPDataUrl = value && value.startsWith('data:image/webp');

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label and Helper */}
      {label && (
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            {label}
          </label>
          <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>WebP até {maxSizeKb} KB</span>
          </span>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp,image/avif"
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />

      {/* Main Upload / Preview Area */}
      {value ? (
        /* Image Preview Box with Controls */
        <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 group bg-slate-900 shadow-sm">
          <div className={`w-full ${getAspectClass()} relative overflow-hidden flex items-center justify-center`}>
            <img
              src={value}
              alt="Pré-visualização"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 opacity-70 group-hover:opacity-90 transition-opacity" />

            {/* Badges on preview */}
            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold backdrop-blur-md shadow-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>WebP Otimizado</span>
              </span>
              {stats && (
                <span className="px-2 py-1 rounded-full bg-black/60 text-emerald-300 text-[10px] font-bold backdrop-blur-md">
                  {stats.sizeKb} KB (reduziu {stats.savingsPercent}%)
                </span>
              )}
            </div>

            {/* Action buttons over preview */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing}
                className="px-3 py-1.5 rounded-xl bg-white/95 hover:bg-white active:scale-95 text-slate-800 text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-600" />
                <span>Trocar Foto</span>
              </button>

              <button
                type="button"
                onClick={handleRemove}
                disabled={isProcessing}
                className="px-2.5 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-600 active:scale-95 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1 cursor-pointer"
                title="Remover foto"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Remover</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Upload Dropzone */
        <div
          onClick={() => !isProcessing && fileInputRef.current?.click()}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2.5 ${
            dragActive
              ? 'border-emerald-500 bg-emerald-50/70 scale-[1.01]'
              : 'border-slate-300 hover:border-[#0B3B60] bg-white hover:bg-slate-50/70'
          } ${isProcessing ? 'pointer-events-none opacity-80' : ''}`}
        >
          {isProcessing ? (
            <div className="flex flex-col items-center gap-2 py-4">
              <Loader2 className="w-9 h-9 text-emerald-600 animate-spin" />
              <div className="text-sm font-bold text-slate-800">
                Otimizando imagem para WebP...
              </div>
              <p className="text-xs text-slate-500">
                Redimensionando e compactando para até {maxSizeKb} KB.
              </p>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                <UploadCloud className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">
                  Clique para selecionar ou arraste uma foto aqui
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Formatos aceitos: JPG, PNG, WEBP ou AVIF. Conversão automática para WebP até {maxSizeKb} KB.
                </p>
              </div>
              <button
                type="button"
                className="mt-1 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Escolher Foto do Computador/Celular</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Helper text and optional URL toggle */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
        <span>{helperText || `As fotos são salvas otimizadas diretamente no banco de dados da sua loja.`}</span>
        <button
          type="button"
          onClick={() => setShowUrlFallback(!showUrlFallback)}
          className="text-slate-400 hover:text-slate-700 underline cursor-pointer"
        >
          {showUrlFallback ? 'Ocultar link' : 'Inserir link direto'}
        </button>
      </div>

      {/* Fallback URL Input if user really wants to paste a link */}
      {showUrlFallback && (
        <div className="pt-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Ou cole uma URL direta da imagem (https://...)"
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0B3B60] outline-none"
          />
        </div>
      )}
    </div>
  );
};
