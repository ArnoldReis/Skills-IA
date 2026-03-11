/**
 * Comando de migração em CI.
 */
export const migrationScript = 'npm run prisma migrate deploy'; // Why: Garante que os deploys de código e as mudanças de banco andem sempre juntos.
