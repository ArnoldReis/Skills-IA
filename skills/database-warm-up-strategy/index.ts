/**
 * Comando Postgres para pré-carga de tabela.
 */
export function getPrewarmCommand(table: string): string {
  return `SELECT pg_prewarm('\${table}');`;
}
