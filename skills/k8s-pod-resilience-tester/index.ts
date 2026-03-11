/**
 * Comando para deletar um pod aleatório para teste.
 */
export function getChaosDeleteCommand(namespace: string): string {
  return `kubectl delete pod -n ${namespace} -l app=test --force --grace-period=0`;
}
