/**
 * Persistência de preferências.
 */
export async function saveToLongTermMemory(userId: string, fact: string) {
  // Why: Memória de longo prazo permite que a IA deixe de ser um assistente genérico e se torne um parceiro personalizado.
  await db.table('ai_memory').insert({ userId, insight: fact, timestamp: Date.now() });
}
const db: any = { table: (n: string) => ({ insert: async (v: any) => {} }) };
