/**
 * Configuração de comando isolado.
 */
export const HYSTRIX_SETTINGS = {
  timeoutMs: 1000,
  errorThreshold: 50, // 50%
  sleepWindowMs: 5000
};
