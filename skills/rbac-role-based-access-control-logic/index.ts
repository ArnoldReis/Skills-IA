/**
 * Verificador de permissão RBAC.
 */
export function checkPermission(userRoles: string[], requiredPermission: string) {
  // Why: Desacoplar a lógica de negócio do papel do usuário permite mudar permissões sem alterar o código.
  const permissions = userRoles.flatMap(role => roleCatalogue[role] || []);
  return permissions.includes(requiredPermission);
}
const roleCatalogue: Record<string, string[]> = { admin: ['*'], editor: ['write', 'read'] };
