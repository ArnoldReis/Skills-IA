/**
 * Estrutura básica de um evento de domínio.
 */
export interface DomainEvent {
  id: string;
  name: string;
  payload: any;
  timestamp: string;
}

export function createEvent(name: string, payload: any): DomainEvent {
  return {
    id: Math.random().toString(36),
    name,
    payload,
    timestamp: new Date().toISOString()
  };
}
