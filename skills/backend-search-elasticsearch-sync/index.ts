/**
 * Retorna as configurações base de indexação.
 */
export function getIndexOptions(indexName: string) {
  return { index: indexName, refresh: 'wait_for' };
}
