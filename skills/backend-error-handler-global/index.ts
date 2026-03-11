/**
 * Normaliza erros para o formato de resposta da API.
 */
export function normalizeError(err: any) {
  // Why: Garantir um formato de erro consistente ajuda os desenvolvedores front-end a tratarem falhas de forma padronizada.
  return {
    statusCode: err.statusCode || 500,
    message: err.message || 'Erro interno do servidor',
    code: err.code || 'INTERNAL_ERROR'
  };
}
