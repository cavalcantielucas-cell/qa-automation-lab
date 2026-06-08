Feature: Login

  Como usuário da aplicação
  Quero acessar o sistema com minhas credenciais
  Para visualizar os produtos disponíveis

  Scenario: Login com usuário válido
    Given que estou na página de login
    When informo usuário e senha válidos
    And clico no botão de login
    Then devo visualizar a página de produtos

  Scenario: Login com usuário bloqueado
    Given que estou na página de login
    When informo usuário bloqueado e senha válida
    And clico no botão de login
    Then devo visualizar uma mensagem de usuário bloqueado

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When informo usuário e senha inválidos
    And clico no botão de login
    Then devo visualizar uma mensagem de erro de login