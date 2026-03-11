/**
 * Determina a URI baseada na operação.
 */
export function getDbConnectionUri(isWrite: boolean) {
  // Why: Escalar a leitura separadamente da escrita é a forma mais barata de escalar bancos relacionais.
  return isWrite ? process.env.DB_MASTER_URL : process.env.DB_REPLICA_URL;
}
