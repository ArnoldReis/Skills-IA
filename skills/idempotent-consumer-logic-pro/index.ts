/**
 * Verificação de idempotência.
 */
export async function isDuplicate(messageId: string): Promise<boolean> {
  // Why: Duplicatas são comuns em redes; a idempotência é a única forma de garantir a integridade dos dados.
  const exists = await cache.exists(`msg:\${messageId}`);
  return exists;
}
