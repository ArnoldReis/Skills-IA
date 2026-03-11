/**
 * Query para listar colunas no Postgres.
 */
export function getTableDefinitionQuery(table: string): string {
  return `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '\${table}';`;
}
