/**
 * Orquestrador RAG básico.
 */
export async function queryRAG(query: string) {
  // Why: RAG resolve o problema de alucinação fornecendo fatos reais para a IA processar.
  const context = await vectorDb.search(query);
  return await llm.generate(query, context);
}
const vectorDb: any = { search: async (q: string) => [] };
const llm: any = { generate: async (q: string, c: any) => '' };
