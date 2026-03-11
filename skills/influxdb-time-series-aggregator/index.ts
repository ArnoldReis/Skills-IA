/**
 * Query base em Flux para agregação horária.
 */
export function getHourlyAggregationQuery(bucket: string) {
  return `
from(bucket: "\${bucket}")
  |> range(start: -24h)
  |> aggregateWindow(every: 1h, fn: mean, createEmpty: false)
  `.trim();
}
