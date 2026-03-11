/**
 * Guard de Idempotência.
 */
export async function executeIdempotent(key: string, logic: () => any) {
  // Why: Em sistemas financeiros, a falta de idempotência pode causar cobranças duplas desastrosas para o cliente.
  const cached = await redis.get(`idemp:\${key}`);
  if (cached) return JSON.parse(cached);
  const result = await logic();
  await redis.set(`idemp:\${key}`, JSON.stringify(result), 'EX', 86400);
  return result;
}
const redis: any = { get: async (k: string) => null, set: async (k: string, v: string, m: string, t: number) => {} };
