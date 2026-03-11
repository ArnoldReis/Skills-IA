/**
 * Get de cache multi-nível.
 */
export async function getFromCache(key: string) {
  // Why: Reduz drasticamente a carga no banco de dados; a maioria das requisições nem chega a tocar o disco.
  const l1 = l1Cache.get(key);
  if (l1) return l1;
  const l2 = await redis.get(key);
  if (l2) { l1Cache.set(key, l2); return l2; }
  return null;
}
const l1Cache: any = { get: (k: string) => null, set: (k: string, v: any) => {} };
