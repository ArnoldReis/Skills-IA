/**
 * Exemplo de check de heartbeat entre balanceadores.
 */
export function checkPeerHealth(peerIp: string) {
  // Why: O balanceador é o gargalo de entrada; sua redundância é vital para qualquer SLA acima de 99.9%.
  return `Health check sent to \${peerIp}`;
}
