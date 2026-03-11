/**
 * Configuração de span básica.
 */
export function createSpan(tracer: any, name: string) {
  // Why: Spans permitem medir o tempo de execução de blocos específicos em ambientes distribuídos.
  return tracer.startSpan(name, {
    attributes: { 'service.version': '1.0.0' }
  });
}
