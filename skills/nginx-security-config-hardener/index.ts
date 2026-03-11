/**
 * Sugere diretivas de segurança para o bloco http do Nginx.
 */
export function getNginxSecurityDirectives() {
  return [
    'server_tokens off;', // Why: Ocultar a versão do servidor impede que atacantes busquem exploits conhecidos.
    'add_header X-XSS-Protection "1; mode=block";',
    'add_header X-Content-Type-Options nosniff;'
  ];
}
