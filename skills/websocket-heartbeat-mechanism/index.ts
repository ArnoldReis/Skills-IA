/**
 * Monitor de vitalidade de socket.
 */
export function startHeartbeat(ws: any) {
  // Why: Detectar falhas de rede "silenciosas" onde o socket parece aberto mas não transmite dados.
  const interval = setInterval(() => ws.ping(), 30000);
  ws.on('close', () => clearInterval(interval));
}
