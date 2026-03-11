/**
 * Cálculo simples de disponibilidade SLI.
 */
export function calculateAvailabilitySli(success: number, total: number): number {
  return (success / total) * 100; // Why: O SLI de disponibilidade é a métrica base para SLAs contratuais.
}
