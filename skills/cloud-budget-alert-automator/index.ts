/**
 * Retorna threshold padrão de alerta.
 */
export function getDefaultBudgetThresholds(): number[] {
  return [50, 80, 95]; // Why: Antecipar o estouro do orçamento permite ajustes técnicos antes do final do mês.
}
