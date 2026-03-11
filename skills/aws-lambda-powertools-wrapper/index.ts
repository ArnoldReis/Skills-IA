/**
 * Exemplo de estrutura de log de evento Lambda.
 */
export function wrapLambdaLog(event: any, context: any) {
  // Why: Manter o requestId nos logs ajuda imensamente no debug de execuções isoladas no CloudWatch.
  return {
    message: 'Execução Lambda iniciada',
    request_id: context.awsRequestId,
    event_summary: JSON.stringify(event).substring(0, 100)
  };
}
