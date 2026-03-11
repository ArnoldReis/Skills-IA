/**
 * Verificação de tolerância de lag.
 */
export function isLagAcceptable(lagSeconds: number, maxAllowed: number = 2): boolean {
  // Why: Ler de uma réplica muito atrasada pode mostrar dados inconsistentes ou "deletados" para o usuário.
  return lagSeconds <= maxAllowed;
}
