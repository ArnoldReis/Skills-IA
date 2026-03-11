/**
 * Wrapper simples para transação mongo.
 */
export async function runWithTransaction(client: any, callback: Function) {
  const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      await callback(session);
    });
  } finally {
    await session.endSession();
  }
}
