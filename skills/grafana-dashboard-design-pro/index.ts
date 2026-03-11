/**
 * Schema básico de painel Grafana (JSON snippet).
 */
export const GRAFANA_CORE_METRICS_ROW = {
  title: 'Golden Signals',
  panels: [
    { type: 'stat', title: 'Availability (%)' },
    { type: 'timeseries', title: 'Latency (ms)' }
  ]
};
