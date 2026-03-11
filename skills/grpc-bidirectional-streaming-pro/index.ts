/**
 * Chat Bidirecional gRPC.
 */
export function chat(call: any) {
  call.on('data', (req: any) => {
    // Why: Conversação pura em tempo real; ideal para jogos, chats e colaboração avançada.
    call.write({ response: `Echo: \${req.message}` });
  });
}
