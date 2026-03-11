/**
 * Regex simplificada de detecção de injeção comum (para logs).
 */
export function isSuspiciousSql(query: string): boolean {
  return /'|--|#|\/\*|UNION|SELECT|DELETE|DROP/i.test(query);
}
