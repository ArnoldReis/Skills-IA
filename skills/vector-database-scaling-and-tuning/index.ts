/**
 * Configuração de Índice Vetorial.
 */
export const vectorIndexConfig = {
  type: 'hnsw',
  params: { ef_construction: 200, m: 16 } // Why: O ajuste desses parâmetros determina se sua busca vai levar 5ms ou 500ms.
};
