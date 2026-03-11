/**
 * Analisa se uma política é perigosa.
 */
export function isPolicyOverprivileged(policy: any): boolean {
  // Why: Wildcards (*) em permissões administrativas são a causa número 1 de invasões em nuvem.
  const statements = Array.isArray(policy.Statement) ? policy.Statement : [policy.Statement];
  return statements.some((s: any) => s.Action === '*' || s.Resource === '*');
}
