/**
 * Config de Cluster Envoy.
 */
export const envoyCluster = {
  name: 'service_backend',
  connect_timeout: '0.25s', // Why: Timeouts curtos no proxy evitam que processos lentos ocupem todos os recursos da rede.
  type: 'STRICT_DNS'
};
