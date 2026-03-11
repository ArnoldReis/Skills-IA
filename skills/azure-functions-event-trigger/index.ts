/**
 * Retorna as configurações base de trigger.
 */
export function getAzureEventConfig(queue: string) {
  return {
    type: 'serviceBusTrigger',
    name: 'myQueueItem',
    direction: 'in',
    queueName: queue,
    connection: 'SB_CONNECTION_STRING'
  };
}
