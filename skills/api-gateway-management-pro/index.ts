/**
 * Configuração de rota dinâmica.
 */
export function getGatewayRoute(path: string, target: string) {
  return { path, target, rewrite: true };
}
