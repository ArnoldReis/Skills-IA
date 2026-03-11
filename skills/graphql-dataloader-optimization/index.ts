/**
 * Exemplo de DataLoader batch function.
 */
export async function batchUsers(ids: readonly string[]) {
  // Why: Evita disparar 50 queries ao banco para carregar 50 usuários em uma lista; faz apenas 1.
  const users = await db.users.findMany({ where: { id: { in: [...ids] } } });
  return ids.map(id => users.find(u => u.id === id));
}
