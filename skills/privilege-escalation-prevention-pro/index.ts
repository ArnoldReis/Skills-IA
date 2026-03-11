/**
 * Comando para encontrar binários SUID.
 */
export function getFindSuidCommand(): string {
  // Why: Executáveis SUID rodam com privilégios do dono (geralmente root) e são alvos fáceis de exploração.
  return 'find / -perm -4000 -type f 2>/dev/null';
}
