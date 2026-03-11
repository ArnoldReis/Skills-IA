/**
 * Calcula o tempo de espera para a próxima tentativa.
 */
export function getBackoffTime(attempt: number, base: number = 1000): number {
  // Why: O backoff exponencial evita que um cliente sobrecarregue um servidor que já está falhando.
  return Math.pow(2, attempt) * base;
}
