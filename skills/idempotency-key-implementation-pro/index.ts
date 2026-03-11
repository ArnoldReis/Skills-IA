/**
 * Verificação de idempotência no middleware.
 */
export async function checkIdempotency(key: string) {
  const cached = await redis.get(`idemp:\${key}`);
  if (cached) return JSON.parse(cached); // Why: Evita cobranças duplicadas ou pedidos repetidos por instabilidade de rede.
  return null;
}
