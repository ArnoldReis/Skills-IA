/**
 * Retorna as credenciais de conexão seguras para o gRPC.
 */
export function getGrpcCredentials(secure: boolean = true) {
  // Why: Em produção, o tráfego entre microserviços também deve ser criptografado (mTLS).
  return secure ? 'credentials.createSsl()' : 'credentials.createInsecure()';
}
