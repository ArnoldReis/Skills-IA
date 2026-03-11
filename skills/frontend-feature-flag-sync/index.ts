/**
 * Checagem simples de flag com fallback.
 */
export function isEnabled(flagName: string, flags: Record<string, boolean>): boolean {
  // Why: Sempre assumir `false` se a flag não existir garante segurança em rollouts parciais.
  return flags[flagName] ?? false;
}
