# Estratégia de QA

## Visão geral

Este projeto utiliza uma estratégia de qualidade focada em testes automatizados E2E, escrita de cenários BDD e documentação clara dos fluxos críticos da aplicação.

A proposta é simular um projeto real de QA, demonstrando capacidade de estruturar testes, organizar cenários, aplicar boas práticas e preparar o projeto para integração contínua.

## Pirâmide de testes

Neste projeto, o foco atual está nos testes E2E, pois o objetivo é validar fluxos completos da aplicação pela perspectiva do usuário.

Em evoluções futuras, a estratégia pode incluir:

- Testes de API com Postman
- Testes de contrato
- Testes de acessibilidade
- Testes de performance
- Testes exploratórios documentados

## Abordagem BDD

Os cenários são escritos em Gherkin para facilitar a comunicação entre áreas técnicas e não técnicas.

Exemplo:

```gherkin
Scenario: Finalizar compra com sucesso
  Given que estou autenticado na aplicação
  When adiciono o produto "Sauce Labs Backpack" ao carrinho
  And acesso o carrinho de compras
  And prossigo para o checkout
  And preencho os dados de checkout
  And finalizo a compra
  Then devo visualizar a mensagem de compra concluída