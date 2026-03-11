/**
 * Verificação de posse de tabela.
 */
export function assertTableOwnership(tableName: string, ownerService: string) {
  if (tableName === 'users' && ownerService !== 'auth-service') {
    throw new Error('Access Violation: Only auth-service can write to users table.');
  }
}
