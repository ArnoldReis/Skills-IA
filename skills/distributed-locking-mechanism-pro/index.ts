/**
 * Exemplo de tentativa de lock.
 */
export async function acquireLock(resource: string, ttl: number): Promise<string|null> {
  // Why: Em clusters, travas in-memory falham; um lock centralizado (Redis) é vital para integridade.
  const lockId = Math.random().toString();
  const success = await redis.set(resource, lockId, 'NX', 'PX', ttl);
  return success ? lockId : null;
}
