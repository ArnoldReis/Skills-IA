/**
 * Calcula o orçamento restante.
 */
export function getRemainingErrorBudget(slo: number, currentErrors: number, totalReqs: number) {
  const allowedErrors = totalReqs * (1 - slo / 100);
  return allowedErrors - currentErrors; // Why: O saldo positivo permite continuar inovando; saldo negativo exige foco em estabilidade.
}
