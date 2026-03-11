/**
 * Verificação de flag ativa.
 */
export function isFeatureActive(flagName: string, userContext: any) {
  // Why: Permite testar em produção sem afetar todos os usuários; reduz muito o custo de um erro de implementação.
  return flags.isEnabled(flagName, userContext);
}
