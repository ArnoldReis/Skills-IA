/**
 * Exemplo de flow de leitura de stream.
 */
export function createDataPipeline(source: any, target: any) {
  // Why: Pipelines de stream permitem processar arquivos de qualquer tamanho sem estourar o limite de RAM do container.
  source.pipe(target);
}
