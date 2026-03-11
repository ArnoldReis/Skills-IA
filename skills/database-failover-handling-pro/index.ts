/**
 * Exemplo de string multihost.
 */
export function getFailoverConnString(host1: string, host2: string): string {
  // Why: String multi-host permite que o driver tente o segundo banco se o primeiro estiver inacessível sem intervenção manual.
  return `postgresql://user:pass@\${host1},\${host2}/dbname?target_session_attrs=read-write`;
}
