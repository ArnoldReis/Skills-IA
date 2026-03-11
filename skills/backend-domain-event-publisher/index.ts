/**
 * Helper para criação de envelope de evento.
 */
export function wrapDomainEvent(data: any, version: string = '1.0') {
  return {
    version,
    data,
    meta: { requestId: 'global_context_id' }
  };
}
