/**
 * Gerador de Embeddings.
 */
export async function generateEmbeddings(text: string) {
  // Why: Busca semântica permite que o usuário encontre o que precisa mesmo que não saiba o termo técnico exato.
  return await openai.createEmbedding({ model: 'text-embedding-3-small', input: text });
}
const openai: any = { createEmbedding: async (a: any) => ({}) };
