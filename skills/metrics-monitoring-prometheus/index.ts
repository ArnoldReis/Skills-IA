/**
 * Formato de métrica Prometheus.
 */
export function getHttpRequestCountMetric(count: number) {
  // Why: Este formato é o padrão da indústria para raspagem (scraping) de métricas por orquestradores.
  return `http_requests_total{method="GET",endpoint="/api"} \${count}`;
}
