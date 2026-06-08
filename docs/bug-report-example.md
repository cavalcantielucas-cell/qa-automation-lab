# Exemplo de Bug Report

## Bug ID

BUG-001

## Título

Mensagem de erro não é exibida ao tentar login com credenciais inválidas

## Ambiente

- Aplicação: SauceDemo
- Navegador: Chrome
- Sistema Operacional: Windows 11
- Tipo de teste: E2E / Funcional
- Ferramenta: Cypress

## Severidade

Média

## Prioridade

Alta

## Pré-condições

- A aplicação deve estar acessível
- O usuário deve estar na tela de login

## Massa de dados

| Campo | Valor |
|------|-------|
| Usuário | invalid_user |
| Senha | wrong_password |

## Passos para reprodução

1. Acessar https://www.saucedemo.com
2. Preencher o campo Username com `invalid_user`
3. Preencher o campo Password com `wrong_password`
4. Clicar no botão Login

## Resultado esperado

O sistema deve exibir uma mensagem informando que o usuário e a senha não correspondem a nenhum usuário cadastrado.

## Resultado atual

A mensagem de erro não é exibida ou não fica visível para o usuário.

## Evidência

- Screenshot: `cypress/screenshots/login-error.png`
- Vídeo: `cypress/videos/login.feature.mp4`

## Status

Aberto

## Observações

Este bug impacta a clareza da validação de login e pode prejudicar a experiência do usuário em cenários de autenticação inválida.