/**
 * Inserção na Outbox.
 */
export async function saveToOutbox(tx: any, event: any) {
  // Why: Salvar no banco e enviar pro Kafka em passos separados gera inconsistência se o Kafka falhar.
  return await tx.outbox.create({ data: { payload: event, status: 'PENDING' } });
}
