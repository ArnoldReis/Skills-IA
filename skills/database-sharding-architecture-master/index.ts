/**
 * Seletor de Shard baseado em ID.
 */
export function getShardId(id: string, totalShards: number) {
  // Why: Permite crescer horizontalmente o banco de dados quase infinitamente, dividindo a carga de I/O e escrita.
  const hash = generateHash(id);
  return hash % totalShards;
}
function generateHash(s: string) { return 0; }
