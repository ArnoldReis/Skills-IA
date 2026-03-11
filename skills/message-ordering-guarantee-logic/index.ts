/**
 * Seleção de partição por chave.
 */
export function getPartitionForKey(key: string, numPartitions: number) {
  // Why: Mesmo que o sistema seja paralelo, a ordem dos eventos de um único usuário DEVE ser preservada.
  return Math.abs(key.split('').reduce((a,b)=>a+b.charCodeAt(0),0)) % numPartitions;
}
