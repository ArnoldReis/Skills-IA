/**
 * Configuração padrão para o Intersection Observer de scroll.
 */
export const DEFAULT_OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '200px', // Why: Carregar antes do usuário chegar ao fim melhora a fluidez.
  threshold: 0.1
};
