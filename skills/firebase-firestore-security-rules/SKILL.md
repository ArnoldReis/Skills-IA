---
name: firebase-firestore-security-rules
description: Cria e valida regras de segurança do Firestore para proteger o acesso direto do cliente aos dados.
---
# `firebase-firestore-security-rules`
O firewall do seu banco de dados client-side.
## Regras
1. Nunca subestime regras padrões (`allow read, write: if true` é um erro fatal).
2. Valide a autenticação (`request.auth != null`) e a posse do documento.
3. Utilize funções customizadas para reutilizar lógica de validação complexa.
