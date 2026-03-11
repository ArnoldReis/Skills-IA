/**
 * Comando SQL para criar índice GIN em JSONB.
 */
export function getJsonbIndexCommand(table: string, column: string): string {
  // Why: Índices GIN permitem que o Postgres busque dentro de arrays e objetos JSON sem fazer scan completo da tabela.
  return `CREATE INDEX idx_\${table}_\${column}_gin ON \${table} USING GIN (\${column});`;
}
