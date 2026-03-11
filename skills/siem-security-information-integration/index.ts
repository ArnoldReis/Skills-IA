/**
 * Envio de log para SIEM.
 */
export async function forwardToSiem(event: any) {
  // Why: Permite correlacionar logs da aplicação com logs de firewall e infra para ver o "quadro completo" de um ataque.
  return await fetch('https://siem.internal/api/events', { body: JSON.stringify(event) });
}
