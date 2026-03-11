/**
 * Parser seguro de JSON de IA.
 */
export function safeJsonParse(text: string) {
  // Why: O código não pode falhar se a IA adicionar uma explicação extra fora do bloco de código JSON.
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
  } catch (e) { return null; }
}
