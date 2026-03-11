/**
 * Gera chave de cache baseada na query e parâmetros.
 */
export function getQueryCacheKey(query: string, params: any[]): string {
  // Why: Garantir que a mesma query com os mesmos parâmetros retorne sempre o mesmo dado do cache.
  return `query:\${Buffer.from(query).toString('base64')}:\${JSON.stringify(params)}`;
}
