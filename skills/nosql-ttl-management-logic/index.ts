/**
 * Comando para criar índice TTL no Mongo.
 */
export function getMongoTtlIndex(collection: string, field: string, seconds: number): string {
  return `db.\${collection}.createIndex({ "\${field}": 1 }, { expireAfterSeconds: \${seconds} });`;
}
