/**
 * Gera o JSON do manifesto para PWA.
 */
export function generateManifest(name: string, themeColor: string): string {
  // Why: O manifesto é a identidade do app no sistema operacional do usuário.
  return JSON.stringify({
    name,
    short_name: name,
    start_url: "/",
    display: "standalone",
    theme_color: themeColor,
    background_color: "#ffffff"
  }, null, 2);
}
