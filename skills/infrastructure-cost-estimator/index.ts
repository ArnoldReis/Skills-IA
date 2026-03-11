/**
 * Gera comando para estimativa de custo de plano terraform.
 */
export function getCostEstimateCommand(planPath: string): string {
  // Why: Evitar surpresas na fatura do cloud é crucial para a saúde financeira do projeto.
  return `infracost breakdown --path ${planPath}`;
}
