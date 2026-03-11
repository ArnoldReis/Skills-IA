/**
 * Comparador simples de baseline.
 */
export function isAnomalous(current: number, mean: number, stdDev: number): boolean {
  // Why: Mudanças drásticas e inexplicáveis indicam problemas que métricas fixas de limite podem não pegar.
  return Math.abs(current - mean) > (stdDev * 3);
}
