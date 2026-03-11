/**
 * Exemplo de configuração de gateway.
 */
export function getStitchingConfig() {
  // Why: Centralizar o gateway simplifica a arquitetura de múltiplos microserviços para o cliente.
  return { typeDefs: [], resolvers: {}, subschemas: [] };
}
