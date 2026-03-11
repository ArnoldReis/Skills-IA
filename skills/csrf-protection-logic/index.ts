/**
 * Configuração de cookie segura para CSRF.
 */
export function getSafeCookieConfig() {
  return {
    httpOnly: true,
    secure: true,
    sameSite: 'lax', // Why: O SameSite=Lax impede que o navegador envie cookies em requisições cross-site de mutação.
  };
}
