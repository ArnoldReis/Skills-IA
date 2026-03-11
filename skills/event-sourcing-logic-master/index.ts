/**
 * Exemplo de Store de eventos.
 */
export function persistEvent(streamId: string, event: any) {
  // Why: Event Sourcing permite auditoria perfeita e a capacidade de derivar novos modelos de dados no futuro.
  return { streamId, version: Date.now(), data: event };
}
