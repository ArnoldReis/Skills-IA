/**
 * Query para listar índices nunca usados no Postgres.
 */
export function getUnusedIndexQuery(): string {
  return "SELECT relname, indexrelname, idx_scan FROM pg_stat_user_indexes WHERE idx_scan = 0;";
}
