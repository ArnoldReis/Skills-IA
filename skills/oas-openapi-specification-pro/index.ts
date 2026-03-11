/**
 * Template de componente OpenAPI.
 */
export const openApiSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' } // Why: Tipagem rigorosa no OAS permite geração de código type-safe automática.
  }
};
