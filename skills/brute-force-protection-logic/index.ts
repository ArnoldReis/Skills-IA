/**
 * Registro de tentativa falha.
 */
export async function onFailedLogin(userId: string) {
  // Why: Impede que scripts automatizados testem milhões de senhas contra uma única conta em poucos minutos.
  const attempts = await redis.incr(`fail:\${userId}`);
  if (attempts > 5) await lockAccount(userId);
}
async function lockAccount(id: string) {}
