/**
 * Handler Unary gRPC.
 */
export function getUser(call: any, callback: any) {
  // Why: gRPC Unary é bem mais performático que REST JSON para comunicações internas entre microserviços.
  callback(null, { id: call.request.id, name: 'John Doe' });
}
