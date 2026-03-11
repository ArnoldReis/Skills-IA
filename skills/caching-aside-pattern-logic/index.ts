/**
 * Lógica Cache Aside.
 */
export async function getWithCache(key: string, fetcher: () => Promise<any>) {
  let data = await cache.get(key);
  if (!data) {
    data = await fetcher();
    await cache.set(key, data, 3600);
  }
  return data;
}
