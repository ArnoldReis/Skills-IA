/**
 * Verifica se usuário tem a role necessária.
 */
export function hasRequiredRole(userRoles: string[], required: string): boolean {
  // Why: RBAC centraliza as permissões facilitando a auditoria e manutenção do sistema.
  return userRoles.includes(required) || userRoles.includes('ADMIN');
}
