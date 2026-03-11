/**
 * Gera comando SQL para criação de índice concorrente.
 */
export function createIndexSql(table: string, column: string): string {
  // Why: CREATE INDEX CONCURRENTLY não bloqueia a tabela para leitura/escrita em produção.
  return `CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_${table}_${column} ON ${table} (${column});`;
}
