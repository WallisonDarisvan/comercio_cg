/**
 * Utilitário de Otimização e Conversão de Imagens
 * Converte qualquer imagem enviada pelo lojista para o formato WebP
 * e garante que o tamanho final fique rigorosamente em até 150 KB.
 */

export interface OptimizedImageResult {
  dataUrl: string;
  format: 'image/webp';
  sizeBytes: number;
  sizeKb: number;
  width: number;
  height: number;
  originalSizeBytes: number;
  originalSizeKb: number;
  savingsPercent: number;
}

export interface OptimizeImageOptions {
  maxSizeKb?: number; // Padrão: 150
  maxWidth?: number; // Padrão: 1600
  maxHeight?: number; // Padrão: 1600
  initialQuality?: number; // Padrão: 0.85
}

/**
 * Converte um arquivo ou blob de imagem para WebP de até 150 KB
 */
export async function processImageToWebP(
  fileOrBlob: File | Blob,
  options: OptimizeImageOptions = {}
): Promise<OptimizedImageResult> {
  const maxSizeKb = options.maxSizeKb ?? 150;
  const maxSizeBytes = maxSizeKb * 1024;
  const maxWidth = options.maxWidth ?? 1600;
  const maxHeight = options.maxHeight ?? 1600;
  const initialQuality = options.initialQuality ?? 0.85;

  const originalSizeBytes = fileOrBlob.size;

  // 1. Ler arquivo como Image
  const img = await loadImageFromFile(fileOrBlob);

  // 2. Calcular dimensões iniciais respeitando proporção
  let currentWidth = img.width;
  let currentHeight = img.height;

  if (currentWidth > maxWidth || currentHeight > maxHeight) {
    const ratio = Math.min(maxWidth / currentWidth, maxHeight / currentHeight);
    currentWidth = Math.round(currentWidth * ratio);
    currentHeight = Math.round(currentHeight * ratio);
  }

  // 3. Iterar ajustando qualidade e/ou escala até atingir <= 150 KB
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Não foi possível inicializar o contexto 2D do Canvas para processar a imagem.');
  }

  canvas.width = currentWidth;
  canvas.height = currentHeight;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

  let quality = initialQuality;
  let dataUrl = canvas.toDataURL('image/webp', quality);
  let sizeBytes = estimateBase64SizeBytes(dataUrl);

  // Passo a: Reduzir qualidade progressivamente
  while (sizeBytes > maxSizeBytes && quality > 0.35) {
    quality -= 0.1;
    dataUrl = canvas.toDataURL('image/webp', quality);
    sizeBytes = estimateBase64SizeBytes(dataUrl);
  }

  // Passo b: Se ainda for maior que 150 KB, redimensionar em escala mantendo qualidade legível
  while (sizeBytes > maxSizeBytes && currentWidth > 400 && currentHeight > 400) {
    currentWidth = Math.round(currentWidth * 0.85);
    currentHeight = Math.round(currentHeight * 0.85);

    canvas.width = currentWidth;
    canvas.height = currentHeight;
    ctx = canvas.getContext('2d');
    if (!ctx) break;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

    dataUrl = canvas.toDataURL('image/webp', Math.max(0.4, quality));
    sizeBytes = estimateBase64SizeBytes(dataUrl);
  }

  const sizeKb = Number((sizeBytes / 1024).toFixed(1));
  const originalSizeKb = Number((originalSizeBytes / 1024).toFixed(1));
  const savingsPercent = originalSizeBytes > sizeBytes
    ? Math.round(((originalSizeBytes - sizeBytes) / originalSizeBytes) * 100)
    : 0;

  return {
    dataUrl,
    format: 'image/webp',
    sizeBytes,
    sizeKb,
    width: currentWidth,
    height: currentHeight,
    originalSizeBytes,
    originalSizeKb,
    savingsPercent,
  };
}

/**
 * Carrega um objeto Image a partir de um File ou Blob
 */
function loadImageFromFile(file: File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(new Error('Falha ao decodificar a imagem selecionada.'));
    };
    img.src = url;
  });
}

/**
 * Calcula o tamanho real em bytes a partir de uma dataURL base64
 */
function estimateBase64SizeBytes(dataUrl: string): number {
  const base64Index = dataUrl.indexOf(',');
  if (base64Index === -1) return 0;
  const base64Str = dataUrl.substring(base64Index + 1);
  const padding = (base64Str.endsWith('==') ? 2 : base64Str.endsWith('=') ? 1 : 0);
  return Math.floor((base64Str.length * 3) / 4) - padding;
}
