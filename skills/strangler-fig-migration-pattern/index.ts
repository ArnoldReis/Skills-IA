/**
 * Lógica de roteamento Strangler Fig.
 */
export function getMigrationRoute(isMigrated: boolean, legacyUrl: string, newUrl: string) {
  // Why: O roteamento dinâmico permite migrar usuários em lotes, reduzindo o risco de falhas catastróficas.
  return isMigrated ? newUrl : legacyUrl;
}
