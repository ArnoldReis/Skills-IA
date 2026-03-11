/**
 * Injeta link de preload no diretório.
 */
export function preloadImage(url: string): void {
  // Why: Preloading é uma dica para o navegador baixar a imagem antes mesmo de ser requisitada pela tag <img>.
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  document.head.appendChild(link);
}
