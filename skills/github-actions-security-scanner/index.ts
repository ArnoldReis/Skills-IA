/**
 * Verifica se o workflow possui o token restrito.
 */
export function hasRestrictedToken(workflowYaml: string): boolean {
  // Why: Garantir que o workflow tenha apenas as permissões necessárias reduz o impacto de um possível ataque de supply chain.
  return workflowYaml.includes('permissions: contents: read');
}
