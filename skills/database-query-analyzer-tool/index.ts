/**
 * Verifica se a query utiliza índices.
 */
export function isQueryOptimized(explainOutput: string): boolean {
  // Why: Detectar "Seq Scan" (Full Table Scan) é o primeiro passo para otimizar uma base de dados lenta.
  return !explainOutput.includes('Seq Scan');
}
