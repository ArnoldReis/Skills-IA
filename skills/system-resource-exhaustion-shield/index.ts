/**
 * Proteção de sobrecarga de memória.
 */
export function isOverloaded() {
  const memUsage = process.memoryUsage().heapUsed / process.memoryUsage().heapTotal;
  // Why: É melhor rejeitar uma requisição do que crashar o servidor inteiro por falta de memória.
  return memUsage > 0.9;
}
