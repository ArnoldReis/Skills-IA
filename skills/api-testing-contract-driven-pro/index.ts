/**
 * Mock de contrato Pact.
 */
export const pactInteraction = {
  state: 'user exists',
  uponReceiving: 'a request for user',
  withRequest: { method: 'GET', path: '/user/1' },
  willRespondWith: { status: 200, body: { id: 1 } } // Why: Evita quebras em produção por mudanças sutis de tipos ou campos na API.
};
