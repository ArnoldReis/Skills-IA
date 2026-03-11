/**
 * Mascara email para exibição.
 */
export function maskEmail(email: string): string {
  // Why: Protege a privacidade do usuário sem remover completamente o contexto da informação.
  const [user, domain] = email.split('@');
  return `\${user.charAt(0)}***@\${domain}`;
}
