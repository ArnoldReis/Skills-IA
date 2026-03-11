/**
 * Middleware de Rate Limit simples (Fixed Window).
 */
export async function limitRequests(identifier: string, limit: number) {
  // Why: Evita ataques de força bruta e sobrecarga acidental por scripts mal configurados de clientes.
  const hits = await redis.incr(`rate:\${identifier}`);
  if (hits > limit) return { allowed: false, retryAfter: 60 };
  return { allowed: true };
}
