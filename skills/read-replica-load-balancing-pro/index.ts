/**
 * Seletor de conexão de DB.
 */
export function getDbClient(isWrite: boolean) {
  // Why: A maioria dos sistemas web tem 90% de leitura; as réplicas permitem escalar sem precisar de um Master gigante.
  return isWrite ? masterClient : replicas[Math.floor(Math.random() * replicas.length)];
}
const masterClient = {};
const replicas = [{}, {}];
