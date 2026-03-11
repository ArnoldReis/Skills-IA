/**
 * Prefixador de query para análise.
 */
export function getExplainAnalyzePrefix(): string {
  // Why: O EXPLAIN ANALYZE executa a query e mostra o tempo real gasto em cada passo do nó de execução.
  return 'EXPLAIN (ANALYZE, BUFFERS) ';
}
