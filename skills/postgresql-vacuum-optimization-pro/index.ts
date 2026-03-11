/**
 * Query para checar tabelas que precisam de vacuum.
 */
export function getVacuumNeededQuery(): string {
  return "SELECT relname, n_dead_tup, last_vacuum FROM pg_stat_user_tables WHERE n_dead_tup > 1000;";
}
