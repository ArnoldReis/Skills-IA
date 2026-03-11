/**
 * Calcula próximo delay com jitter.
 */
export function getRetryDelay(attempt: number): number {
  // Why: Jitter evita que todos os clientes "acordem" e ataquem o servidor simultaneamente após uma queda.
  const base = Math.pow(2, attempt) * 100;
  return base + Math.random() * 100;
}
