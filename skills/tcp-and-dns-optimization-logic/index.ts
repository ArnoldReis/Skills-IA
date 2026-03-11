/**
 * Configuração de Keep-Alive HTTP.
 */
export const httpAgentOptions = {
  keepAlive: true, // Why: Reduz drasticamente a latência de rede eliminando a necessidade de abrir novas conexões para cada request.
  maxSockets: 100,
  keepAliveMsecs: 1000
};
