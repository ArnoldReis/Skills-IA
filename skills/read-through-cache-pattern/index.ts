/**
 * Interface simplificada de leitura.
 */
export async function readFromSmartCache(key: string) {
  return await smartCache.getOrFetch(key); // Why: A lógica de recarga fica encapsulada no provedor de cache.
}
