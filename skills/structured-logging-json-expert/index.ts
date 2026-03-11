/**
 * Logger estruturado padrão.
 */
export function logInfo(message: string, context: object) {
  // Why: Logs JSON são nativamente suportados por agregadores como Datadog e Elasticsearch.
  console.log(JSON.stringify({
    level: 'INFO',
    message,
    ...context,
    timestamp: new Date().toISOString()
  }));
}
