/**
 * Configuração de cluster básica.
 */
export const CLUSTER_SETTINGS = {
  minNodes: 3, // Why: Um número ímpar de nós é necessário para votação de quorum eficaz.
  failoverTimeoutMs: 5000
};
