/**
 * Handler de stream do cliente.
 */
export function uploadData(call: any, callback: any) {
  let count = 0;
  call.on('data', () => count++);
  call.on('end', () => callback(null, { totalProcessed: count })); // Why: Permite agregação eficiente de dados enviados continuamente.
}
