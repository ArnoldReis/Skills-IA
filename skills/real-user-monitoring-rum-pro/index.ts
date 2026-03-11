/**
 * Captura de Web Vitals básica.
 */
export function sendToRum(metric: any) {
  // Why: RUM revela problemas que testes locais ou sintéticos não pegam, como latência de CDNs específicas.
  navigator.sendBeacon('/rum-collector', JSON.stringify(metric));
}
