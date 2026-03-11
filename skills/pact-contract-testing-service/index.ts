/**
 * Definição de interação Pact.
 */
export const pactInteraction = {
  state: 'user exists',
  uponReceiving: 'a request for user 1',
  withRequest: { method: 'GET', path: '/users/1' } // Why: Garante que mudanças no backend não quebrem o frontend silenciosamente antes de chegar em produção.
};
