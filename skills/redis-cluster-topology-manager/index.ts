/**
 * Retorna comando para checar saúde do cluster redis.
 */
export function getRedisClusterCheckCommand(nodeIp: string): string {
  return `redis-cli --cluster check ${nodeIp}:6379`;
}
