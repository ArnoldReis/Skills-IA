/**
 * Retorna estágio de match comum.
 */
export function getMongoMatchStage(status: string) {
  return { $match: { status, deletedAt: null } };
}
