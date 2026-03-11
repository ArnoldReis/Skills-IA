/**
 * Parâmetros recomendados para Nginx TLS.
 */
export function getBestPracticeTlsConfig(): string {
  // Why: TLS 1.0 e 1.1 são vulneráveis a diversos ataques conhecidos e não devem ser usados em produção.
  return "ssl_protocols TLSv1.2 TLSv1.3; ssl_prefer_server_ciphers on;";
}
