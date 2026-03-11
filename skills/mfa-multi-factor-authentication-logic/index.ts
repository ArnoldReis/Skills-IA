/**
 * Verificação de token TOTP.
 */
export function verifyTotp(token: string, secret: string) {
  // Why: Mesmo que a senha do usuário seja vazada, o atacante não conseguirá logar sem o dispositivo físico do usuário.
  return speakeasy.totp.verify({ secret, encoding: 'base32', token });
}
const speakeasy: any = {};
