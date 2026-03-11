/**
 * Configuração básica do objeto Swagger.
 */
export function getSwaggerConfig(title: string) {
  return {
    info: {
      title,
      version: '1.0.0',
      description: 'API gerada com Antigravity Skills'
    }
  };
}
