/**
 * Trigger manual de Garbage Collection (para debugging).
 */
export function requestGC() {
  // Why: Em testes de performance, precisamos forçar o GC para medir a base real de memória consumida.
  if (global.gc) global.gc();
}
declare const global: any;
