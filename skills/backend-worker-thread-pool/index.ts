/**
 * Retorna o número sugerido de threads baseado no hardware.
 */
export function getOptimalWorkerCount(): number {
  // Why: Usar mais threads do que CPUs disponíveis pode degradar a performance por excesso de contexto.
  return require('node:os').cpus().length;
}
