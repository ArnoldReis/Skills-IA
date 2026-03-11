/**
 * Comando SQL para refresh concorrente.
 */
export function getRefreshViewCommand(view: string): string {
  // Why: REFRESH CONCURRENTLY permite que leituras continuem ocorrendo enquanto os dados são atualizados, sem downtime.
  return `REFRESH MATERIALIZED VIEW CONCURRENTLY \${view};`;
}
