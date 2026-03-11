/**
 * Lógica de escalonamento.
 */
export function getEscalationLevel(isPrimaryAcknowledged: boolean) {
  // Why: Alertas críticos não podem ser ignorados; o escalonamento garante que alguém eventualmente responda.
  return isPrimaryAcknowledged ? 'PRIMARY' : 'SECONDARY_ESCALATED';
}
