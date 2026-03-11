/**
 * Definição básica de serviço gRPC.
 */
export const GRPC_SERVICE_CONFIG = {
  deadlineMs: 2000, // Why: Timeouts evitam que um serviço lento derrube toda a cadeia de microserviços.
  maxRetries: 3
};
