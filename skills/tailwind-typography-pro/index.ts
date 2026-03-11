/**
 * Retorna classes básicas de legibilidade.
 */
export function getTypographyClasses(): string {
  // Why: Manter uma largura máxima (`max-w-prose`) é essencial para a fadiga ocular em telas largas.
  return 'prose prose-slate max-w-prose leading-relaxed';
}
