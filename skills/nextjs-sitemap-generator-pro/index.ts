/**
 * Gera entrada individual de URL para sitemap.
 */
export function generateSitemapEntry(url: string, lastMod: string = new Date().toISOString()) {
  return {
    url,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.8
  };
}
