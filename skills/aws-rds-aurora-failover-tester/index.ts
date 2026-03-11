/**
 * Comando para induzir failover manual via CLI.
 */
export function getRdsFailoverCommand(clusterId: string): string {
  return `aws rds failover-db-cluster --db-cluster-identifier \${clusterId}`;
}
