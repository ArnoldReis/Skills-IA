---
name: bff-backend-for-frontend-master
description: Cria backends específicos para cada tipo de cliente (Web, Mobile, IoT) para otimizar a experiência do usuário.
---
# `bff-backend-for-frontend-master`
Interfaces de backend sob medida para cada necessidade de frontend.
## Regras
1. Evite lógica de negócios pesada no BFF; ele deve ser focado em agregação e formatação de dados.
2. Utilize o BFF para reduzir o número de requisições de rede feitas por dispositivos móveis.
3. Permita que a equipe de frontend tenha controle total sobre a API do seu respectivo BFF.
---
