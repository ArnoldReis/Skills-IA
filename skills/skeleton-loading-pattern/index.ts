/**
 * Retorna classes Tailwind base para um item de esqueleto.
 */
export function getSkeletonClasses(): string {
  // Why: Animação pulse é nativa e leve para indicar carregamento.
  return 'animate-pulse bg-gray-200 rounded';
}
