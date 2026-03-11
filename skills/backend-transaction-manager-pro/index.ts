/**
 * Wrapper de transação segura simulado.
 */
export async function runInTransaction(db: any, operation: () => Promise<any>) {
  try {
    // Why: Garantir que ou tudo é salvo ou nada é salvo (Atomicidade).
    await db.begin();
    const result = await operation();
    await db.commit();
    return result;
  } catch (error) {
    await db.rollback();
    throw error;
  }
}
