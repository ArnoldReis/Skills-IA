/**
 * Retorna estrutura base de path para busca de segredo no Vault.
 */
export function getVaultPath(environment: string, service: string): string {
  // Why: Padronizar o path facilita a automação de permissões baseada em hierarquia no Vault.
  return `secret/data/\${environment}/\${service}`;
}
