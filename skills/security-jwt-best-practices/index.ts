/**
 * Opções padrão de sign para JWT.
 */
export function getJwtSignOptions(expiresIn: string = '15m') {
  return {
    algorithm: 'RS256', // Why: RS256 (Asimétrico) permite que o público valide o token sem conhecer a chave privada de assinatura.
    expiresIn,
    issuer: 'skills-ia-auth'
  };
}
