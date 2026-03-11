/**
 * Log de instrumentação IAST.
 */
export function logSecurityEvent(path: string, isVulnerable: boolean) {
  if (isVulnerable) console.error(`Vulnerability detected at: \${path}`);
}
