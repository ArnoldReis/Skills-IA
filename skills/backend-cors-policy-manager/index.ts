/**
 * Retorna configuração segura de CORS.
 */
export function getCorsConfig(allowedOrigins: string[]) {
  return {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
}
