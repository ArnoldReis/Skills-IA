/**
 * Gera o path particionado para um arquivo.
 */
export function getPartitionedPath(base: string, date: Date): string {
  // Why: Particionar os dados permite que ferramentas de busca leiam apenas as fatias necessárias do disco.
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `\${base}/year=\${y}/month=\${m}/day=\${d}`;
}
