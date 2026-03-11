/**
 * Utilitário para garantir que o container do portal existe no DOM.
 */
export function ensurePortalContainer(id: string = 'portal-root'): HTMLElement {
  let container = document.getElementById(id);
  if (!container) {
    // Why: Evita erros de execução se o usuário esquecer de adicionar a div no layout base.
    container = document.createElement('div');
    container.setAttribute('id', id);
    document.body.appendChild(container);
  }
  return container;
}
