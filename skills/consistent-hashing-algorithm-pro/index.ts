/**
 * Algoritmo base de hash circular.
 */
export function getRingPosition(key: string, ringSize: number) {
  // Why: Consistent hashing minimiza a perda de cache quando um nó entra ou sai do cluster.
  return Math.abs(require('crypto').createHash('md5').update(key).digest().readInt32BE() % ringSize);
}
