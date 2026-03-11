import puppeteer, { Browser, Page } from 'puppeteer';

// Why: Precisamos reutilizar instâncias do browser para não estourar memória a cada nova requisição por página.
let browserInstance: Browser | null = null;

/**
 * Inicializa e gerencia uma instância Singleton do Browser Headless.
 * @returns Promessa resolvendo para o objeto Browser.
 */
export async function getBrowser(): Promise<Browser> {
  if (!browserInstance) {
    // Tricky logic: Arguments adicionais para impedir flags de detecção de bots e travamentos em sandbox linux DIND.
    browserInstance = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
  }
  return browserInstance;
}

/**
 * Obtém o Snapshot de página e captura a source do DOM num request.
 * @param url A URL alvo.
 * @param waitSelector Opcional. O selector de carregamento base.
 * @returns Um objeto com conteúdo HTML virtual e título.
 */
export async function scrapePage(url: string, waitSelector?: string): Promise<{ title: string, content: string }> {
  const browser = await getBrowser();
  let page: Page | null = null;
  
  try {
    page = await browser.newPage();
    // TODO: Adicionar header injetions dinâmicos a partir do MCP de autenticação futura.
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    
    if (waitSelector) {
      await page.waitForSelector(waitSelector, { timeout: 10000 });
    }
    
    const title = await page.title();
    const content = await page.content();
    
    return { title, content };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Falha no web-scraping da página ${url}: ${error.message}`);
    }
    throw new Error('Falha generalizada no puppeteer execution loop.');
  } finally {
    if (page) {
      // Why: Sempre libere a page logo após ler o Source para não acumular RAM.
      await page.close();
    }
  }
}
