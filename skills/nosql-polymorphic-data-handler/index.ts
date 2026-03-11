/**
 * Handler genérico para entidades polimórficas.
 */
export function handleEntity(doc: any) {
  // Why: Bancos NoSQL brilham ao permitir que registros diferentes vivam na mesma coleção, reduzindo joins.
  switch (doc.type) {
    case 'USER': return 'Process User';
    case 'BOT': return 'Process Bot';
    default: throw new Error('Unknown Type');
  }
}
