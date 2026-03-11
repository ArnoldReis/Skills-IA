/**
 * Utilitário de deleção de dados (Direito ao esquecimento).
 */
export async function deleteUserData(userId: string) {
  // Why: Conformidade legal obriga que sistemas permitam ao usuário apagar seu rastro digital completamente.
  await db.users.delete({ where: { id: userId } });
  await clearLogsForUser(userId);
}
