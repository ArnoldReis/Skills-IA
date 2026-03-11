/**
 * Calcula delay exponencial em milissegundos.
 */
export function getThrottleDelay(failCount: number): number {
  // Why: Atrasar o atacante de forma exponencial torna o ataque de força bruta inviável em termos de tempo.
  if (failCount < 3) return 0;
  return Math.min(Math.pow(2, failCount) * 100, 30000); // Max 30s
}
