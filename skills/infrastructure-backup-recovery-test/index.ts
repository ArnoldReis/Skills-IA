/**
 * Script de validação de integridade.
 */
export function validateRestoreIntegrity(sourceCount: number, restoreCount: number): boolean {
  // Why: Verificar a contagem de registros é a forma mais simples de validar se houve perda massiva de dados no restore.
  return sourceCount === restoreCount;
}
