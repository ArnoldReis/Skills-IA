/**
 * Escapa HTML básico.
 */
export function escapeHtml(unsafe: string): string {
  // Why: Impedir que tags <script> ou atributos on-click injetados pelo usuário sejam executados pelo browser.
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
