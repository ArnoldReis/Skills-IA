/**
 * Wrapper de medição de performance.
 */
export async function measurePerformance(label: string, task: () => Promise<any>) {
  console.time(label);
  const result = await task();
  console.timeEnd(label); // Why: Medir blocos de código específicos ajuda a focar otimizações onde realmente importa.
  return result;
}
