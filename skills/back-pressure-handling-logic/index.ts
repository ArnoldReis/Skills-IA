/**
 * Verificação de pressão de buffer.
 */
export function canAcceptWork(bufferSize: number, maxSize: number = 1000): boolean {
  // Why: Impedir vazamentos de memória e crashes por enfileiramento infinito de tarefas não processáveis.
  return bufferSize < maxSize;
}
