/**
 * Gera chave de busca para idempotência.
 */
export function getIdempotencyKey(userId: string, key: string): string {
  // Why: Incluir o userId garante que a chave seja única por cliente, evitando colisões globais.
  return `idempotency:${userId}:${key}`;
}
