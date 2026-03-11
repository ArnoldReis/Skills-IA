/**
 * Identificação de tarefas pesadas.
 */
export function trackHeavyOperation(label: string, op: () => void) {
  // Why: Medir o tempo real de execução permite tomar decisões baseadas em dados sobre o que precisa de refatoração urgente.
  console.time(label);
  op();
  console.timeEnd(label);
}
