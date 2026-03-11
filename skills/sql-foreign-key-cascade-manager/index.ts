/**
 * Retorna SQL para FK segura.
 */
export function getRestrictFkSql(table: string, ref: string): string {
  // Why: RESTRICT impede que um registro pai seja deletado se houver filhos, garantindo a integridade manual.
  return `ALTER TABLE \${table} ADD CONSTRAINT fk_\${table} FOREIGN KEY (ref_id) REFERENCES \${ref}(id) ON DELETE RESTRICT;`;
}
