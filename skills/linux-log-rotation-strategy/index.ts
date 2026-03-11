/**
 * Template de configuração de logrotate.
 */
export function getLogrotateConfig(logPath: string) {
  return `
\${logPath} {
  daily
  rotate 14
  compress
  delaycompress
  missingok
  notifempty
}
  `.trim();
}
