# QA Automation Lab

[![QA Automation Pipeline](https://github.com/cavalcantielucas-cell/qa-automation-lab/actions/workflows/qa-pipeline.yml/badge.svg)](https://github.com/cavalcantielucas-cell/qa-automation-lab/actions/workflows/qa-pipeline.yml)

Projeto de portfólio focado em **Quality Assurance**, com automação de testes E2E usando **Cypress**, escrita de cenários em **BDD/Gherkin**, testes de API com **Postman/Newman** e integração contínua com **GitHub Actions**.

## Objetivo

Este projeto foi desenvolvido para demonstrar conhecimentos práticos de QA, incluindo:

* Automação de testes E2E
* Escrita de cenários BDD com Gherkin
* Testes funcionais de login, carrinho e checkout
* Testes de API com Postman e Newman
* Organização de massa de dados com fixtures
* Documentação de plano de testes, casos de teste e bug report
* Execução automatizada em pipeline CI/CD

## Tecnologias utilizadas

* Cypress
* JavaScript
* BDD/Gherkin
* Cucumber Preprocessor
* Postman
* Newman
* Git
* GitHub Actions
* Node.js

## Funcionalidades testadas

### Testes E2E com Cypress

* Login com usuário válido
* Login com usuário bloqueado
* Login com credenciais inválidas
* Adição de produto ao carrinho
* Remoção de produto do carrinho
* Validação de produto no carrinho
* Checkout com sucesso

### Testes de API com Postman/Newman

* GET `/users`
* GET `/users/{id}`
* GET `/posts`
* GET `/posts/{id}`
* POST `/posts`
* GET de recurso inexistente para validação de cenário negativo

## Estrutura do projeto

```txt
qa-automation-lab/
│
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       ├── login.feature
│   │       ├── cart.feature
│   │       └── checkout.feature
│   │
│   ├── fixtures/
│   │   └── users.json
│   │
│   └── support/
│       ├── step_definitions/
│       │   ├── login.steps.js
│       │   ├── cart.steps.js
│       │   └── checkout.steps.js
│       ├── commands.js
│       └── e2e.js
│
├── postman/
│   ├── collections/
│   │   └── jsonplaceholder-api.postman_collection.json
│   └── environments/
│       └── jsonplaceholder.postman_environment.json
│
├── docs/
│   ├── test-plan.md
│   ├── test-cases.md
│   ├── bug-report-example.md
│   ├── qa-strategy.md
│   └── api-tests.md
│
├── .github/
│   └── workflows/
│       └── qa-pipeline.yml
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm
* Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/cavalcantielucas-cell/qa-automation-lab.git
```

Acesse a pasta do projeto:

```bash
cd qa-automation-lab
```

Instale as dependências:

```bash
npm install
```

## Como executar os testes E2E

Abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Executar os testes E2E em modo headless:

```bash
npm run test:e2e
```

Executar os testes E2E no Chrome:

```bash
npm run test:e2e:chrome
```

## Como executar os testes de API

```bash
npm run test:api
```

## Como executar todos os testes

```bash
npm run test:all
```

## Pipeline CI/CD

O projeto possui pipeline configurado com **GitHub Actions**.

A pipeline é executada automaticamente em:

* Push para a branch `main`
* Pull Request para a branch `main`

Etapas executadas na pipeline:

1. Checkout do repositório
2. Setup do Node.js
3. Instalação das dependências
4. Execução dos testes E2E com Cypress
5. Execução dos testes de API com Newman

Arquivo da pipeline:

```txt
.github/workflows/qa-pipeline.yml
```

## Documentação QA

A pasta `docs/` contém documentos simulando artefatos reais de um processo de QA:

| Documento               | Descrição                      |
| ----------------------- | ------------------------------ |
| `test-plan.md`          | Plano de testes do projeto     |
| `test-cases.md`         | Casos de teste documentados    |
| `bug-report-example.md` | Exemplo de bug report          |
| `qa-strategy.md`        | Estratégia de QA aplicada      |
| `api-tests.md`          | Documentação dos testes de API |

## Boas práticas aplicadas

* Separação entre arquivos `.feature` e step definitions
* Escrita dos cenários em BDD/Gherkin
* Uso de fixtures para massa de dados
* Uso de comandos customizados no Cypress
* Organização dos testes por funcionalidade
* Testes positivos e negativos
* Testes de interface e API
* Documentação técnica de QA
* Pipeline CI/CD com GitHub Actions

## Exemplo de cenário BDD

```gherkin
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
```

## Status do projeto

Projeto em evolução.

Funcionalidades já implementadas:

* Automação E2E com Cypress
* BDD com Gherkin
* Testes de API com Postman/Newman
* Documentação QA
* CI/CD com GitHub Actions

Próximas melhorias planejadas:

* Relatórios de execução
* Screenshots e evidências no README
* Testes adicionais de fluxo de compra
* Padronização com ESLint
* Relatório HTML do Newman
* Relatório HTML do Cypress

## Autor

Lucas Cavalcanti

Projeto desenvolvido como parte de um portfólio prático para área de Quality Assurance.

## Relatórios de execução

O projeto gera relatórios HTML para testes E2E e testes de API.

### Relatório Cypress

Gerado em:

```txt
reports/cypress/