/**
 * Componente funcional simulado para Error Boundary.
 * Note: Error Boundaries reais exigem Class Components ou bibliotecas como react-error-boundary.
 */
export function handleError(error: Error, info: any): void {
  // Why: Centralizar o log de erros ajuda na triagem de bugs em produção.
  console.error('[ErrorBoundary]: Capturamos uma falha catastrófica:', error.message, info);
}
