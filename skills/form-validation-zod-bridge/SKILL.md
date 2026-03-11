---
name: form-validation-zod-bridge
description: Integra formulários (React Hook Form) com esquemas de validação do Zod de forma automatizada.
---

# `form-validation-zod-bridge`
Especialista em Inputs. Sincroniza a tipagem do backend (Zod) diretamente com os estados de erro e validação do frontend.

## Regras
1. Gere o resolver do `react-hook-form` automaticamente a partir do schema Zod.
2. Mapeie mensagens de erro customizadas do Zod para componentes de `ErrorMessage` na UI.
3. Utilize `z.infer` para garantir que os dados de submissão do form estejam 100% tipados.

## Como Usar
Sempre que criar um novo formulário de cadastro ou edição de dados.
