/**
 * Log de severidade de incidente.
 */
export function classifyIncident(score: number): 'LOW'|'MEDIUM'|'HIGH'|'CRITICAL' {
  if (score > 90) return 'CRITICAL';
  if (score > 70) return 'HIGH';
  return 'MEDIUM';
}
