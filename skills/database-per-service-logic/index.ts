/**
 * Loader de conexão isolada.
 */
export function getServiceDbUri(serviceName: string) {
  return `mongodb://localhost:27017/\${serviceName}`; // Why: Bancos separados garantem que mudanças no schema de um serviço não quebrem outros.
}
