/**
 * Gera parâmetro state aleatório.
 */
export function generateOAuthState(): string {
  // Why: O 'state' vincula a requisição à resposta do IdP, prevenindo que um atacante injete seu próprio token.
  return Math.random().toString(36).substring(2, 15);
}
