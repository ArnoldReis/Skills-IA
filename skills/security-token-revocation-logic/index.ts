/**
 * Função de verificação de revogação.
 */
export function isTokenRevoked(jti: string, blacklistedJtis: Set<string>): boolean {
  // Why: JWTs são stateless; uma blocklist é necessária para "deslogar" um usuário antes do token expirar naturalmente.
  return blacklistedJtis.has(jti);
}
