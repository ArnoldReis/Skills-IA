/**
 * Retorna as métricas de sucesso de um failover.
 */
export function getFailoverSuccessCriteria() {
  return {
    rto_minutes: 15, // Recovery Time Objective
    rpo_minutes: 5,  // Recovery Point Objective
    data_consistency: true
  };
}
