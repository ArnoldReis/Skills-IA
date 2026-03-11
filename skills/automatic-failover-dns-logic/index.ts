/**
 * Parâmetros DNS Failover.
 */
export const DNS_CONFIG = {
  ttlSeconds: 60, // Why: TTL baixo permite que a troca de servidores seja percebida pelos usuários quase instantaneamente.
  checkIntervalMs: 10000
};
