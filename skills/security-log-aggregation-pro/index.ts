/**
 * Formata log para o padrão ECS.
 */
export function formatEcsLog(event: string, severity: number) {
  // Why: ECS permite que o sistema de monitoramento cruze dados de rede, app e banco de forma unificada.
  return {
    "@timestamp": new Date().toISOString(),
    "log.level": severity > 3 ? "error" : "info",
    "event.action": event,
    "source.ip": "0.0.0.0" 
  };
}
