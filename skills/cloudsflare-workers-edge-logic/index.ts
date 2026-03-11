/**
 * Handler básico de um Cloudflare Worker.
 */
export async function handleEdgeRequest(request: Request): Promise<Response> {
  // Why: Operar na borda (Edge) reduz o Round Trip Time (RTT) para milissegundos.
  return new Response('Hello from the Edge!', {
    headers: { 'content-type': 'text/plain' },
  });
}
