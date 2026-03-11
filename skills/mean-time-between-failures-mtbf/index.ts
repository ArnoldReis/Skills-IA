/**
 * Cálculo MTBF.
 */
export function calculateMtbf(totalOperationalTime: number, failureCount: number) {
  // Why: Manter um MTBF alto significa um sistema confiável que exige menos intervenções emergenciais da equipe.
  return totalOperationalTime / failureCount;
}
