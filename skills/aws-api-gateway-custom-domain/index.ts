/**
 * Retorna as opções de segurança TLS recomendadas.
 */
export function getApiGatewayTlsPolicy(): string {
  // Why: Manter a compatibilidade com navegadores modernos sem abrir mão de segurança.
  return 'TLS_1_2';
}
