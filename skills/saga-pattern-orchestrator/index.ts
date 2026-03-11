/**
 * Passo de Saga Orquestrada.
 */
export interface SagaStep {
  action: () => Promise<void>;
  compensate: () => Promise<void>; // Why: Transações distribuídas não têm rollback nativo; a compensação é essencial para consistência.
}
