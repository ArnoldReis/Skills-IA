/**
 * Transforma uma interface alvo de componente em um template pré-pronto de E2E com Playwright.
 * @param url A URL local da página que será atestada.
 * @param componentName O nome do componente a se procurar em data-testid
 * @returns Um código fonte Spec pronto em string.
 */
export function generatePlaywrightE2E(url: string, componentName: string): string {
    // Why: Ao construir testes E2E do zero, o Antigravity costuma criar cenários bobos. 
    // Usando este AST a skill ensina a usar data-testids confiaveis e locators em vez de classes vazias e querySelector quebrados.
    const spec = `
import { test, expect } from '@playwright/test';

test.describe('Component: ${componentName}', () => {
    test.beforeEach(async ({ page }) => {
        // Tricky logic: interceptando falhas mockadas
        await page.goto('${url}');
    });

    test('deve renderizar e interagir com estado de tela resiliente', async ({ page }) => {
        const targetElement = page.getByTestId('${componentName.toLowerCase()}-root');
        await expect(targetElement).toBeVisible();
        // TODO: A IA deve injetar verificações de cliques e snapshots visuais aqui a seguir...
    });
});`;
    return spec.trim();
}
