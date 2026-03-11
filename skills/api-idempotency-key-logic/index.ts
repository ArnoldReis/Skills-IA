/**
 * Middleware de Idempotência.
 */
export async function handleIdempotentRequest(key: string, process: () => Promise<any>) {
  // Why: Clientes mobile podem repetir requisições em quedas de sinal; a chave evita duplicação no banco.
  const cached = await redis.get(`idemp:\${key}`);
  if (cached) return JSON.parse(cached);
  const result = await process();
  await redis.set(`idemp:\${key}`, JSON.stringify(result), 'EX', 86400);
  return result;
}
