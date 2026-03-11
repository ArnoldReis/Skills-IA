/**
 * Gera um timestamp como ID para a migration.
 */
export function generateMigrationId(name: string): string {
  // Why: Usar timestamp garante a ordem cronológica correta das execuções.
  return `${Date.now()}_${name.toLowerCase().replace(/\s+/g, '_')}`;
}
