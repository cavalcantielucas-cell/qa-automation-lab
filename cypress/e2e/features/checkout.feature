Feature: Checkout

  Como usuário autenticado
  Quero finalizar uma compra
  Para validar o fluxo principal de checkout da aplicação

  Background:
    Given que estou autenticado na aplicação

  Scenario: Finalizar compra com sucesso
    When adiciono o produto "Sauce Labs Backpack" ao carrinho
    And acesso o carrinho de compras
    And prossigo para o checkout
    And preencho os dados de checkout
    And finalizo a compra
    Then devo visualizar a mensagem de compra concluída