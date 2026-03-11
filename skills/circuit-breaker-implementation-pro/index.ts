/**
 * Estados do Circuit Breaker.
 */
export enum CircuitState {
  CLOSED = "Processando Normalmente",
  OPEN = "Bloqueando Chamadas (Fail Fast)",
  HALF_OPEN = "Testando Recuperação"
}
