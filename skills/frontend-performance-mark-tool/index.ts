/**
 * Envolve a execução de uma tarefa com marcas de timing.
 */
export async function trackExecution(label: string, task: Function): Promise<void> {
  performance.mark(`${label}-start`);
  await task();
  performance.mark(`${label}-end`);
  performance.measure(label, `${label}-start`, `${label}-end`);
}
