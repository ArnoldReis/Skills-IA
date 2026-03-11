/**
 * Config de redirecionamento para DLQ.
 */
export const DLQ_POLICY = {
  maxReceiveCount: 3, // Why: Tentar infinitamente uma mensagem com payload inválido é desperdício de recurso e gera ruído.
  deadLetterTargetArn: 'arn:aws:sqs:target-dlq'
};
