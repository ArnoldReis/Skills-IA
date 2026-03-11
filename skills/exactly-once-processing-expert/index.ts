/**
 * Config de transação transacional.
 */
export const TRANSACTION_CONFIG = {
  transactionalId: 'producer-tx-01',
  isolationLevel: 'read_committed' // Why: Garante que apenas mensagens de transações confirmadas sejam lidas pelos consumidores.
};
