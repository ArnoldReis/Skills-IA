/**
 * Gera comando SQL para Views.
 */
export function createViewSql(viewName: string, selectQuery: string): string {
  // Why: Views centralizam a regra de negócio do dado, facilitando mudanças sem alterar o código da aplicação.
  return `CREATE OR REPLACE VIEW ${viewName} AS ${selectQuery};`;
}
