/**
 * Opções de mitigação L7.
 */
export function getDdosProtectionConfig() {
  return {
    challengeMode: 'CAPTCHA', // Why: O desafio por CAPTCHA impede que bots simples inundem endpoints pesados.
    minTrafficToActive: 1000,
    burstLimit: 50
  };
}
