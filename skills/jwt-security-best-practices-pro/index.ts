/**
 * Geração de JWT seguro.
 */
export function generateSecureToken(payload: any, privateKey: string) {
  // Why: Algoritmos assimétricos garantem que comprometimento da chave pública não permite falsificação de tokens.
  return jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '15m' });
}
function jwt(payload: any, privateKey: string, arg2: { algorithm: string; expiresIn: string; }) {
    throw new Error("Function not implemented.");
}
