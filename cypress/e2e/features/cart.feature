Feature: Carrinho de compras

  Como usuário autenticado
  Quero adicionar e remover produtos do carrinho
  Para validar o fluxo de compra da aplicação

  Background:
    Given que estou autenticado na aplicação

  Scenario: Adicionar produto ao carrinho
    When adiciono o produto "Sauce Labs Backpack" ao carrinho
    Then o ícone do carrinho deve exibir a quantidade "1"
    And devo visualizar o produto "Sauce Labs Backpack" no carrinho

  Scenario: Remover produto do carrinho
    When adiciono o produto "Sauce Labs Backpack" ao carrinho
    And acesso o carrinho de compras
    And removo o produto "Sauce Labs Backpack" do carrinho
    Then o carrinho deve ficar vazio