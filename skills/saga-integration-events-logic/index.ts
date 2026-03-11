/**
 * Envelope de evento de Saga.
 */
export function createSagaEvent(sagaId: string, payload: any) {
  return {
    sagaId,
    type: 'INTEGRATION_EVENT',
    payload,
    occurredAt: new Date() // Why: Timestamps são vitais para auditoria e depuração de Sagas complexas.
  };
}
