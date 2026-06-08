# Plano de Testes - QA Automation Lab

## 1. Objetivo

Este plano de testes tem como objetivo validar os principais fluxos da aplicação SauceDemo utilizando testes automatizados E2E com Cypress e BDD/Gherkin.

O projeto simula um ambiente real de QA, contemplando escrita de cenários, automação de testes, organização de massa de dados, documentação e futura integração com pipeline CI/CD.

## 2. Escopo dos testes

Os testes cobrem os seguintes fluxos:

- Login com usuário válido
- Login com usuário bloqueado
- Login com credenciais inválidas
- Adição de produto ao carrinho
- Remoção de produto do carrinho
- Validação de item no carrinho
- Checkout com sucesso

## 3. Fora de escopo

Neste momento, não fazem parte do escopo:

- Testes de performance
- Testes de acessibilidade
- Testes de segurança
- Testes em múltiplos dispositivos móveis
- Testes manuais exploratórios detalhados

Esses pontos podem ser adicionados em evoluções futuras do projeto.

## 4. Estratégia de testes

A estratégia adotada combina:

- Testes E2E com Cypress
- Escrita de cenários em BDD/Gherkin
- Reutilização de steps
- Massa de dados com fixtures
- Execução local e futura execução em CI/CD

## 5. Ambiente de testes

- Aplicação: SauceDemo
- URL base: https://www.saucedemo.com
- Ferramenta de automação: Cypress
- Linguagem: JavaScript
- Abordagem BDD: Gherkin
- Execução local: Chrome/Electron
- Versionamento: Git e GitHub

## 6. Critérios de entrada

Para iniciar os testes, é necessário:

- Projeto instalado com npm
- Dependências instaladas
- Cypress configurado
- Ambiente SauceDemo disponível
- Arquivos `.feature` e steps implementados

## 7. Critérios de saída

Os testes são considerados finalizados quando:

- Todos os cenários automatizados passam com sucesso
- Não existem falhas críticas abertas
- Os testes podem ser executados via terminal
- Os resultados podem ser reproduzidos localmente

## 8. Riscos

| Risco | Impacto | Mitigação |
|------|---------|-----------|
| Instabilidade da aplicação de teste | Médio | Reexecutar testes e validar disponibilidade |
| Mudança nos seletores HTML | Alto | Utilizar seletores data-test sempre que possível |
| Falha de dependências npm | Médio | Manter package-lock versionado |
| Erro de ambiente local | Médio | Documentar instalação no README |

## 9. Comandos de execução

Abrir o Cypress:

```bash
npm run cy:open


---

# 3. Criar `docs/test-cases.md`

Crie o arquivo:

```txt
docs/test-cases.md

# Casos de Teste - QA Automation Lab

## CT001 - Login com usuário válido

**Funcionalidade:** Login  
**Prioridade:** Alta  
**Tipo:** E2E / Funcional  
**Automatizado:** Sim

### Pré-condições

- Acessar a aplicação SauceDemo
- Possuir usuário válido

### Massa de dados

| Campo | Valor |
|------|-------|
| Usuário | standard_user |
| Senha | secret_sauce |

### Passos

1. Acessar a página de login
2. Informar usuário válido
3. Informar senha válida
4. Clicar no botão de login

### Resultado esperado

O usuário deve ser redirecionado para a página de produtos.

---

## CT002 - Login com usuário bloqueado

**Funcionalidade:** Login  
**Prioridade:** Alta  
**Tipo:** E2E / Negativo  
**Automatizado:** Sim

### Massa de dados

| Campo | Valor |
|------|-------|
| Usuário | locked_out_user |
| Senha | secret_sauce |

### Passos

1. Acessar a página de login
2. Informar usuário bloqueado
3. Informar senha válida
4. Clicar no botão de login

### Resultado esperado

O sistema deve exibir uma mensagem informando que o usuário está bloqueado.

---

## CT003 - Login com credenciais inválidas

**Funcionalidade:** Login  
**Prioridade:** Média  
**Tipo:** E2E / Negativo  
**Automatizado:** Sim

### Massa de dados

| Campo | Valor |
|------|-------|
| Usuário | invalid_user |
| Senha | wrong_password |

### Passos

1. Acessar a página de login
2. Informar usuário inválido
3. Informar senha inválida
4. Clicar no botão de login

### Resultado esperado

O sistema deve exibir mensagem de erro de autenticação.

---

## CT004 - Adicionar produto ao carrinho

**Funcionalidade:** Carrinho  
**Prioridade:** Alta  
**Tipo:** E2E / Funcional  
**Automatizado:** Sim

### Pré-condições

- Usuário autenticado
- Página de produtos carregada

### Passos

1. Selecionar o produto Sauce Labs Backpack
2. Clicar em Add to cart
3. Validar contador do carrinho
4. Acessar o carrinho

### Resultado esperado

O produto deve ser exibido corretamente no carrinho e o contador deve apresentar quantidade 1.

---

## CT005 - Remover produto do carrinho

**Funcionalidade:** Carrinho  
**Prioridade:** Média  
**Tipo:** E2E / Funcional  
**Automatizado:** Sim

### Pré-condições

- Usuário autenticado
- Produto adicionado ao carrinho

### Passos

1. Acessar o carrinho
2. Clicar em Remove no produto
3. Validar lista do carrinho

### Resultado esperado

O produto deve ser removido e o carrinho deve ficar vazio.

---

## CT006 - Finalizar compra com sucesso

**Funcionalidade:** Checkout  
**Prioridade:** Alta  
**Tipo:** E2E / Fluxo crítico  
**Automatizado:** Sim

### Pré-condições

- Usuário autenticado
- Produto adicionado ao carrinho

### Massa de dados

| Campo | Valor |
|------|-------|
| Nome | Lucas |
| Sobrenome | Cavalcanti |
| CEP | 54400-000 |

### Passos

1. Acessar o carrinho
2. Clicar em Checkout
3. Preencher nome
4. Preencher sobrenome
5. Preencher CEP
6. Clicar em Continue
7. Clicar em Finish

### Resultado esperado

O sistema deve exibir a mensagem de compra concluída com sucesso.
