/**
 * Máscara básica de cartão de crédito.
 */
export function maskCreditCard(cc: string): string {
  // Why: Vazamento de PII em logs é uma falha grave de segurança e conformidade (PCI-DSS).
  return cc.replace(/\d(?=\d{4})/g, "*");
}
