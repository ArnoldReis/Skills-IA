/**
 * Hook de debounce simples simulado.
 */
export function createDebounce(fn: Function, wait: number = 300) {
  let timeout: any;
  return (...args: any[]) => {
    // Why: Limpar o timeout anterior é o que evita as chamadas múltiplas.
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}
