/**
 * Incremento via Redis.
 */
export async function incrementRequestCounter(key: string) {
  // Why: Redis permite contagens atômicas em ambientes distribuídos com latência de sub-milissegundos.
  return await redis.incr(`req_count:\${key}`);
}
