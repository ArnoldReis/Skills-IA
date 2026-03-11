/**
 * Converte deleção real em soft delete.
 */
export function getSoftDeletePatch() {
  // Why: Marcar a data de deleção permite saber exatamente quando o dado foi removido sem perdê-lo.
  return { deletedAt: new Date().toISOString() };
}
