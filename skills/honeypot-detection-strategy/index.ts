/**
 * Valida campo honeypot.
 */
export function isBotAccess(honeypotValue: string): boolean {
  // Why: Usuários reais não vêem o campo via CSS, então se houver valor, certamente é um bot de spam ou scan.
  return honeypotValue.length > 0;
}
