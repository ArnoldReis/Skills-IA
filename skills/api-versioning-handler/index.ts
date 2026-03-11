/**
 * Auxiliar para prefixo de rotas.
 */
export function getRoutePrefix(version: string = 'v1'): string {
  // Why: Centralizar a versão facilita a migração global no futuro.
  return `/api/${version}/`;
}
