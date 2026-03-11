/**
 * Query para salvar no outbox.
 */
export function getOutboxInsertQuery(event: any) {
  // Why: Salvar na mesma transação garante que nunca enviaremos um evento se o dado falhar em persistir.
  return `INSERT INTO outbox (payload, status) VALUES ('\${JSON.stringify(event)}', 'PENDING')`;
}
