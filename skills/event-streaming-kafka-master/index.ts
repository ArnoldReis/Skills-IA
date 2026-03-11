/**
 * Produtor Kafka básico.
 */
export function getKafkaProducerConfig() {
  return {
    allowAutoTopicCreation: false, // Why: Criar tópicos via código dificulta a governança e monitoramento de infraestrutura.
    transactionTimeout: 30000
  };
}
