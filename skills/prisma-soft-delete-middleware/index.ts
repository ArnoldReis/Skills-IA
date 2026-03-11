/**
 * Exemplo de middleware de transformação.
 */
export function softDeleteMiddleware(params: any, next: Function) {
  if (params.action === 'delete') {
    params.action = 'update';
    params.args['data'] = { deletedAt: new Date() };
  }
  return next(params);
}
