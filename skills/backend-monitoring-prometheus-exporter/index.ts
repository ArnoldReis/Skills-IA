/**
 * Helper para incremento de contador de requisições.
 */
export function trackRequest(status: number) {
  // Why: Monitorar a taxa de erros 5xx permite configurar alertas automáticos de queda.
  console.log(`[Metric]: Request Status ${status}`);
}
