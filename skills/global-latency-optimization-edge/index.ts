/**
 * Resposta via Edge Runtime.
 */
export function edgeHandler(req: any) {
  // Why: Processar a lógica na rede do provedor (Cloudflare/Vercel) reduz a latência de 200ms para 20ms para o usuário.
  return new Response('Hello from the Edge!');
}
declare const Response: any;
