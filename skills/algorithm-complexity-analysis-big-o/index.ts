/**
 * Exemplo de O(1) vs O(n).
 */
export function fastLookup(map: Map<string, any>, key: string) {
  // Why: Usar um Map (O(1)) em vez de .find() em um Array (O(n)) economiza processamento exponencial conforme a lista cresce.
  return map.get(key);
}
