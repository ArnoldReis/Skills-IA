/**
 * Retorna configuração básica para servidor de WebSocket.
 */
export function getWsOptions() {
  // Why: Manter o tempo limite de inatividade (path) ajuda a limpar recursos no servidor de forma automática.
  return { path: '/ws', clientTracking: true };
}
