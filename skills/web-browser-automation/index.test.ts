import { describe, it, expect, vi } from 'vitest';
import { scrapePage } from './index';
// TODO: Testes reais necessitariam de browser, estamos usando vi.mock() simulando E2E em CI

vi.mock('puppeteer', () => ({
  default: {
    launch: vi.fn().mockResolvedValue({
      newPage: vi.fn().mockResolvedValue({
        goto: vi.fn().mockResolvedValue(true),
        waitForSelector: vi.fn().mockResolvedValue(true),
        title: vi.fn().mockResolvedValue('Teste Título Mockado'),
        content: vi.fn().mockResolvedValue('<html><body>Sucesso</body></html>'),
        close: vi.fn().mockResolvedValue(true) // Fechando mock
      })
    })
  }
}));

describe('Web Browser Automation Skill', () => {
  it('deve extrair HTML e title com o mock Singleton', async () => {
    // Why: Checar isoladamente o retorno destruturado.
    const response = await scrapePage('http://localhost-fake.com');
    expect(response.title).toBe('Teste Título Mockado');
    expect(response.content).toContain('Sucesso');
  });
});
