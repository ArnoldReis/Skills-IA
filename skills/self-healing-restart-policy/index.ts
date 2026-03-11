/**
 * Política de restart K8s style.
 */
export const RESTART_POLICY = {
  maxAttempts: 5,
  delayMs: 2000,
  backoff: 'exponential' // Why: Auto-recuperação resolve 90% dos problemas transientes de software.
};
