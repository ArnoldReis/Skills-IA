/**
 * Exemplo de Least Connections logic.
 */
export function getBestServer(servers: { id: string, activeConns: number }[]) {
  // Why: Direcionar tráfego para quem está menos ocupado otimiza o tempo de resposta global.
  return servers.sort((a, b) => a.activeConns - b.activeConns)[0];
}
