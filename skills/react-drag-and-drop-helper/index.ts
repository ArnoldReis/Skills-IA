/**
 * Classes base para dropzone.
 */
export function getDropzoneClasses(isDragging: boolean): string {
  // Why: Mudar a cor da borda ao arrastar dá o feedback visual necessário para o drop.
  return `border-2 border-dashed transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`;
}
