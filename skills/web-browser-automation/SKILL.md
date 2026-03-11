---
name: web-browser-automation
description: Automação completa de navegador invisível / headless baseada em Puppeteer.
---

# `web-browser-automation`
Skill do ecossistema Antigravity projetada para raspar páginas, realizar login automático ou rodar testes E2E visuais interagindo com a Viewport e as instâncias Chromium reais.

## Regras
1. Utilize o modo *Headless* por padrão a menos que explicitamente solicitado para não usar (ex: depuração interativa).
2. Previna travamentos controlando o número máximo de páginas (`Browser.pages()`) sob uma mesma sessão simultaneamente.
3. Se um form precisar de preenchimento, use métodos rigorosos de aguardar a resolução do DOM (`waitForSelector`).

## Como usar
Sempre que precisar consultar sites restritos, dinâmicos criados em SPA/React (que curl ou cheerio falham), renderizar DOM virtual para dump, ou tirar screenshots probatórias de sucesso.
