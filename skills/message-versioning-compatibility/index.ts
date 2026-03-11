/**
 * Envelope versionado.
 */
export function wrapVersionedMessage(payload: any, version: string = '1.0.0') {
  // Why: Permite atualizar o formato da mensagem sem quebrar os consumidores que ainda não foram atualizados.
  return { version, payload, sender: 'order-service' };
}
