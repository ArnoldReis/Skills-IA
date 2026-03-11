/**
 * Determina o shard baseado no ID.
 */
export function getShardId(id: number, totalShards: number): number {
  // Why: O Sharding permite que bancos de dados relacionais escalem além dos limites de hardware de um único nó.
  return id % totalShards;
}
