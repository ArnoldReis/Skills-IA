/**
 * Classes base para imagem com lazy load e fade.
 */
export function getLazyImageClasses(): string {
  // Why: 'opacity-0' permite animar a entrada da imagem após o carregamento total via JS.
  return 'loading-lazy opacity-0 transition-opacity duration-300';
}
