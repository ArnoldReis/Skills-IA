/**
 * Header de propagação W3C.
 */
export function getTraceHeaders(traceId: string) {
  // Why: Propagar o ID manualmente é necessário quando não se usa instrumentação automática.
  return { 'traceparent': `00-\${traceId}-0000000000000001-01` };
}
