/**
 * Comando para listar permissões de um service account.
 */
export function getRbacCheckCommand(sa: string, ns: string): string {
  return `kubectl auth can-i --list --as=system:serviceaccount:\${ns}:\${sa}`;
}
