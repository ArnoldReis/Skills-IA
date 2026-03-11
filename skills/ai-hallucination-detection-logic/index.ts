/**
 * Verificador de citações.
 */
export function hasCitations(text: string) {
  // Why: Respostas sem fontes em sistemas RAG são fortes candidatas a serem alucinações puras do modelo.
  return /\[\d+\]/.test(text);
}
