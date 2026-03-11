/**
 * Template de regra de alerta YAML.
 */
export function getAlertRuleTemplate(service: string) {
  return `
alert: HighErrorRate
expr: job:http_errors:rate5m{job="\${service}"} > 0.01
for: 2m
labels:
  severity: critical
annotations:
  summary: Alta taxa de erro no serviço \${service}
  `.trim();
}
