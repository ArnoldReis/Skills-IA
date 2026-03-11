/**
 * Geradora de PKCE Challenge.
 */
export function generatePKCE() {
  // Why: PKCE é essencial para apps mobile e SPAs onde o Client Secret não pode ser armazenado com segurança.
  const verifier = base64url(crypto.randomBytes(32));
  const challenge = base64url(crypto.createHash('sha256').update(verifier).digest());
  return { verifier, challenge };
}
