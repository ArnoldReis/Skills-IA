/**
 * Verifica se o arquivo de migração possui o método down.
 */
export function hasRollbackImplementation(content: string): boolean {
  // Why: Sem um plano de rollback, uma migração corrompida pode causar downtime prolongado.
  return content.includes('module.exports.down') || content.includes('async function down');
}
