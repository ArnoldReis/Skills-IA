/**
 * Config de Bulkhead.
 */
export const BULKHEAD_CONFIG = {
  maxConcurrentCalls: 10, // Why: Limitar chamadas simultâneas evita que timeouts em cascata exaustem os recursos do servidor.
  maxWaitDurationMs: 500
};
