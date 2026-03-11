/**
 * Configuração de CORS segura.
 */
export function getSafeCorsOptions(allowedOrigins: string[]) {
  return {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    maxAge: 86400 // 24 horas
  };
}
