/**
 * Verificação de expiração.
 */
export function isMessageExpired(timestamp: number, ttlSeconds: number) {
  // Why: Processar dados velhos pode causar inconsistências de estado ou erros de negócio (ex: preço expirado).
  return (Date.now() - timestamp) > (ttlSeconds * 1000);
}
