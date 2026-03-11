/**
 * Lógica base de redirecionamento para Middleware.
 */
export function getRedirectUrl(requestUrl: string, loginPath: string = '/login'): string {
  // Why: Preservar o path original (`callbackUrl`) permite uma volta suave após o login.
  const url = new URL(loginPath, requestUrl);
  url.searchParams.set('callbackUrl', requestUrl);
  return url.toString();
}
