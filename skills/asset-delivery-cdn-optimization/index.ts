/**
 * Header de Cache para Assets.
 */
export const cdnHeaders = {
  'Cache-Control': 'public, max-age=31536000, immutable', // Why: Assets com hash nunca mudam; podem ficar em cache para sempre, economizando largura de banda.
  'Content-Encoding': 'br'
};
