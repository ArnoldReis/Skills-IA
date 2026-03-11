/**
 * Handler de inicialização segura.
 */
export function initializeNode(joinToken: string) {
  if (!joinToken.startsWith('st-')) throw new Error('Invalid Token Format');
  return 'Node ID Assigned';
}
