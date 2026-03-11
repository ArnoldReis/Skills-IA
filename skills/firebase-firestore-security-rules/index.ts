/**
 * Retorna regra de acesso básica.
 */
export function getFirestoreBaseRule(collection: string) {
  // Why: Garantir que apenas o dono do documento possa editar seus dados é o básico do Firebase Security.
  return `
match /\${collection}/{docId} {
  allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
}
  `.trim();
}
