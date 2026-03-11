/**
 * Retorna as opções de assinatura de token.
 */
export function getJwtOptions(expiresIn: string = '1h') {
  // Why: Definir expiração curta obriga a renovação frequente, aumentando a segurança.
  return { expiresIn, algorithm: 'HS256' };
}
