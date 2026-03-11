/**
 * Configuração de pool sugerida para Node Postgres.
 */
export function getPoolConfig() {
  return {
    max: 20, // Why: Ter conexões em excesso causa context switching e sobrecarga de CPU no servidor de banco.
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };
}
