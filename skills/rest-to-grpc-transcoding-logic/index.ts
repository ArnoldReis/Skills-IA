/**
 * Exemplo de mapeamento REST no .proto.
 */
export const httpAnnotation = `
  rpc GetUser(UserRequest) returns (UserResponse) {
    option (google.api.http) = { get: "/v1/users/{id}" }; // Why: Permite expor serviços gRPC modernos para clientes legados ou web.
  }
`;
