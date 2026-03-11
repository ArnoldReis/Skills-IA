/**
 * Retorna as classes de aspect ratio baseadas na proporção desejada.
 */
export function getAspectClasses(ratio: 'video' | 'square' | 'auto'): string {
  // Why: Manter a proporção correta é a base para evitar saltos de layout (CLS).
  return `aspect-${ratio} w-full object-cover`;
}
