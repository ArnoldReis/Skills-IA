/**
 * Seleção de rota de rede.
 */
export function selectBestPath(paths: { id: string, latency: number, up: boolean }[]) {
  // Why: Ter caminhos alternativos é vital para sistemas distribuídos que operam em redes instáveis.
  return paths.filter(p => p.up).sort((a, b) => a.latency - b.latency)[0];
}
