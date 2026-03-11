/**
 * Gera hash de cache baseado na request.
 */
export function getRequestHash(url: string, params: object): string {
  // Why: Incluir os params garante que buscas diferentes tenham entradas de cache diferentes.
  return `req:${url}:${JSON.stringify(params)}`;
}
