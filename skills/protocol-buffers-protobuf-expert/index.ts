/**
 * Exemplo de definição Protobuf.
 */
export const protoDefinition = `
syntax = "proto3";
message User {
  int32 id = 1;
  string name = 2; // Why: O uso de números fixos permite retrocompatibilidade automática.
}
`;
