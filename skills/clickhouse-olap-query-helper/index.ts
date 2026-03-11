/**
 * Retorna comando para contar linhas de forma estimada e rápida.
 */
export function getApproximateCountQuery(table: string): string {
  return `SELECT count(*) FROM \${table} SAMPLE 0.1`;
}
