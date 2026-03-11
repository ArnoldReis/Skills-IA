/**
 * Configuração WebAuthn básica.
 */
export function getWebAuthnOptions() {
  return {
    authenticatorSelection: { userVerification: 'required' },
    attestation: 'direct'
  };
}
