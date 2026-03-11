/**
 * Escrita síncrona em ambos.
 */
export async function writeThrough(key: string, value: any) {
  await db.save(key, value);
  await cache.set(key, value); // Why: Atualizar ambos garante que leituras subsequentes sejam rápidas e precisas.
}
