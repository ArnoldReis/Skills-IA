/**
 * Retorna payload para criação de workspace.
 */
export function getTfeWorkspacePayload(name: string) {
  return {
    data: { attributes: { name, 'execution-mode': 'remote' }, type: 'workspaces' }
  };
}
