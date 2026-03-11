/**
 * Retorna as opções de Redrive Policy.
 */
export function getRedrivePolicy(dlqArn: string, maxReceiveCount: number = 3) {
  // Why: Limitar as tentativas evita o "poison pill message", que trava o processamento infinitamente.
  return {
    deadLetterTargetArn: dlqArn,
    maxReceiveCount: maxReceiveCount.toString()
  };
}
