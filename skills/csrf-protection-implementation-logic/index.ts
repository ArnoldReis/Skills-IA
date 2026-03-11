/**
 * Validação de Token CSRF.
 */
export function validateCsrfToken(reqToken: string, sessionToken: string) {
  // Why: Impede que um usuário clique em um link "pegadinha" que dispara uma ação (ex: transferir dinheiro) sem seu consentimento.
  return reqToken === sessionToken;
}
