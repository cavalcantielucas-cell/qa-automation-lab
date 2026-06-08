import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let users;

before(() => {
  cy.fixture("users").then((data) => {
    users = data;
  });
});

Given("que estou na página de login", () => {
  cy.visit("/");
});

When("informo usuário e senha válidos", () => {
  cy.get('[data-test="username"]').type(users.validUser.username);
  cy.get('[data-test="password"]').type(users.validUser.password);
});

When("informo usuário bloqueado e senha válida", () => {
  cy.get('[data-test="username"]').type(users.lockedUser.username);
  cy.get('[data-test="password"]').type(users.lockedUser.password);
});

When("informo usuário e senha inválidos", () => {
  cy.get('[data-test="username"]').type(users.invalidUser.username);
  cy.get('[data-test="password"]').type(users.invalidUser.password);
});

When("clico no botão de login", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("devo visualizar a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("be.visible").and("contain", "Products");
});

Then("devo visualizar uma mensagem de usuário bloqueado", () => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain", "Sorry, this user has been locked out.");
});

Then("devo visualizar uma mensagem de erro de login", () => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain", "Username and password do not match");
});