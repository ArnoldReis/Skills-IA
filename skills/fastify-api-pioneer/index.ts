/**
 * Configuração base para uma instância do Fastify.
 */
export function getFastifyOptions() {
  // Why: Manter o logger ativado por padrão ajuda no debug imediato de rotas.
  return { logger: true, disableRequestLogging: false };
}
