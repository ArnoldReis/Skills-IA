/**
 * Exemplo de busca que favorece o pruning.
 */
export function getOptimizedPartitionSearch(startDate: string, endDate: string): string {
  // Why: Fornecer o range exato permite que o BD descarte partições de meses/anos que não precisam ser scanneadas.
  return `SELECT * FROM big_table WHERE created_at >= '\${startDate}' AND created_at <= '\${endDate}';`;
}
