/**
 * Gera uma chave de cache padronizada.
 */
export function buildCacheKey(entity: string, id: string): string {
  // Why: Um padrão de nomenclatura evita colisões entre diferentes partes do sistema.
  return `cache:${entity}:${id}`;
}
