/**
 * Exemplo de escolha de formato.
 */
export function serialize(data: any, format: 'json' | 'binary') {
  // Why: Binário consome até 80% menos tráfego de rede, mas dificulta muito o debugging via logs manuais.
  return format === 'json' ? JSON.stringify(data) : encodeBinary(data);
}
