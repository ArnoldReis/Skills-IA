/**
 * Helper para migração lazy de documento.
 */
export function migrateToV2(doc: any) {
  if (doc.schemaVersion === 1) {
    // Why: Migrar dados ao ler evita bloqueios massivos no banco para atualizar milhões de registros de uma só vez.
    return { ...doc, fullName: `\${doc.firstName} \${doc.lastName}`, schemaVersion: 2 };
  }
  return doc;
}
