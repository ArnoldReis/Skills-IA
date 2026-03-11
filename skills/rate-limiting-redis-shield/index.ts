/**
 * Calcula se uma requisição deve ser bloqueada.
 */
export function shouldRateLimit(count: number, limit: number): boolean {
  // Why: Manter a lógica de decisão simples permite que o middleware de rede seja ultra-rápido.
  return count > limit;
}
