/**
 * Comando para check de patch pendente.
 */
export function getPendingPatchCheck(): string {
  return 'apt-get -s dist-upgrade | grep "^Inst" | grep -i security';
}
