/**
 * Comando para publicar em canal dinâmico.
 */
export function getPublishCmd(tenantId: string, event: string): string {
  // Why: Separar por tenantId isola o tráfego e melhora a segurança e performance.
  return `PUBLISH \${tenantId}:events:\${event} '{"timestamp": "\${Date.now()}"}'`;
}
