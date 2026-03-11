/**
 * Chamada WebAuthn (Simplificada).
 */
export async function registerCredential() {
  // Why: WebAuthn é imune a ataques de Phishing, pois a credencial é vinculada permanentemente ao domínio do site.
  return await navigator.credentials.create({ publicKey: { /* config */ } });
}
declare const navigator: any;
