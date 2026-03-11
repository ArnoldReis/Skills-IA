/**
 * Lógica de retry para Deadlocks.
 */
export async function withTransaction(fn: () => any, retries = 3): Promise<any> {
  // Why: Deadlocks são inerentes a sistemas concorrentes; saber lidar com eles sem derrubar a aplicação é o que define um sistema resiliente.
  try {
    return await fn();
  } catch (error: any) {
    if (error.code === '40P01' && retries > 0) { // Postgres Deadlock code
      return await withTransaction(fn, retries - 1);
    }
    throw error;
  }
}
