/**
 * Filtro de severidade de alerta.
 */
export function shouldPageOnCall(severity: string): boolean {
  // Why: Alertas críticos devem acordar o engenheiro, enquanto avisos de baixa prioridade apenas geram logs/tickets.
  return severity === 'CRITICAL' || severity === 'BLOCKER';
}
