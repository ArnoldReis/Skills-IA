/**
 * Lógica de bloqueio para atualização de cache.
 */
export async function getWithStampedeProtection(key: string, fetchFn: () => Promise<any>) {
  // Why: Em sistemas de alto tráfego, a queda de uma única chave de cache pode derrubar o banco de dados principal.
  const cached = await redis.get(key);
  if (cached) return cached;
  const lock = await redis.set(`lock:\${key}`, '1', 'EX', 5, 'NX');
  if (lock) {
    const fresh = await fetchFn();
    await redis.set(key, fresh);
    return fresh;
  }
  await new Promise(r => setTimeout(r, 100));
  return getWithStampedeProtection(key, fetchFn);
}
