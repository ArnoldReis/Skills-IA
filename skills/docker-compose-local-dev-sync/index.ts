/**
 * Exemplo de serviço de banco em Docker Compose.
 */
export function getPostgresServiceConfig() {
  return {
    image: 'postgres:15-alpine',
    environment: {
      POSTGRES_USER: 'admin',
      POSTGRES_PASSWORD: 'password'
    },
    ports: ['5432:5432']
  };
}
