/**
 * Opção de busca consistente.
 */
export function getQuorumReadOptions() {
  return { consistency: 'QUORUM' }; // Why: Forçar quórum garante que a maioria dos nós concorda com o dado antes de retornar.
}
