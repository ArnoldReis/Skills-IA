/**
 * Cálculo MTTR.
 */
export function calculateMttr(totalOutageTime: number, incidentCount: number) {
  // Why: Reduzir o MTTR é tão ou mais importante do que evitar incidentes, pois falhas são inevitáveis.
  return totalOutageTime / incidentCount;
}
