/**
 * Retorna comando para listar APIs ativas no projeto.
 */
export function getGcpApiListCommand(projectId: string): string {
  // Why: Ter visibilidade do que está rodando é o primeiro passo para o endurecimento (Hardening) do projeto.
  return `gcloud services list --enabled --project=${projectId}`;
}
