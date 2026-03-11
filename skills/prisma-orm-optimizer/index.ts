/**
 * Logica de conexão segura para o Prisma Client.
 */
export function getPrismaClientConfig() {
  // Why: Logar queries em modo desenvolvimento permite identificar gargalos de performance rapidamente.
  return { log: ['query', 'info', 'warn', 'error'] };
}
