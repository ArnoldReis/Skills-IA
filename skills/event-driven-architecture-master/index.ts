/**
 * Estrutura de evento padrão.
 */
export interface IntegrationEvent {
  id: string;
  type: string;
  payload: any;
  occurredAt: Date;
}
