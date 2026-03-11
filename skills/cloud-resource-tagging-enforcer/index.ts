/**
 * Valida se o objeto de tags possui as chaves mínimas.
 */
export function validateMandatoryTags(tags: Record<string, string>): boolean {
  // Why: Sem tags adequadas, é impossível rastrear o gasto de um projeto específico em faturas de milhares de dólares.
  const mandatory = ['Project', 'Environment', 'CostCenter'];
  return mandatory.every(tag => tag in tags);
}
