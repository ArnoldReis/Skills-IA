/**
 * Exemplo de header CSP restrito.
 */
export function getStrictCspHeader() {
  return "default-src 'self'; script-src 'self'; object-src 'none'; style-src 'self' https://fonts.googleapis.com; base-uri 'self';";
}
