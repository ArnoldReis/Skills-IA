/**
 * Config de rota básica Gateway.
 */
export const GATEWAY_ROUTE = {
  path: '/users/*',
  target: 'http://user-service:3000',
  stripPrefix: true // Why: Desacopla o path público da estrutura interna de microserviços.
};
