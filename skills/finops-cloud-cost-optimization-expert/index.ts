/**
 * Alerta de anomalia de custo.
 */
export function checkCostSpike(current: number, average: number) {
  // Why: Evita surpresas desagradáveis na fatura causadas por loops infinitos ou ataques de negação de serviço.
  return current > average * 1.5;
}
