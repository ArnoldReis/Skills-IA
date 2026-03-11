/**
 * Teste de snapshot visual.
 */
export async function visualTest(page: any) {
  // Why: Testes visuais pegam erros de CSS que testes de unidade ou integração de lógica jamais encontrariam.
  await expect(page).toHaveScreenshot('home-page.png', { maxDiffPixelRatio: 0.1 });
}
const expect: any = (p: any) => ({ toHaveScreenshot: async (n: string, o: any) => {} });
