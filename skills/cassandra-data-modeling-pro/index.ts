/**
 * Exemplo de definição de PRIMARY KEY composta.
 */
export function getCassandraPrimaryKeySchema() {
  // Why: No Cassandra, a Primary Key define como os dados são distribuídos e ordenados fisicamente no cluster.
  return 'PRIMARY KEY ((tenant_id), created_at, event_id)';
}
