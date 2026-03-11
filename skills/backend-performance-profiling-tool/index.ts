/**
 * Wrapper para medir o tempo de execução de uma operação síncrona.
 */
export function profileSync<T>(label: string, fn: () => T): T {
  const start = process.hrtime();
  const result = fn();
  const [s, ns] = process.hrtime(start);
  console.log(`[Profile]: ${label} levou ${s}s e ${ns / 1e6}ms`);
  return result;
}
