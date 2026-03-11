/**
 * Config de fila RabbitMQ segura.
 */
export const RABBIT_QUEUE_CONFIG = {
  durable: true, // Why: durable=true garante que a fila sobreviva a reinícios do broker RabbitMQ.
  exclusive: false,
  autoDelete: false
};
