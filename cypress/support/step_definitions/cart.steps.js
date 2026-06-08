import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou autenticado na aplicação", () => {
  cy.fixture("users").then((users) => {
    cy.login(users.validUser.username, users.validUser.password);
  });

  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("be.visible").and("contain", "Products");
});

When("adiciono o produto {string} ao carrinho", (productName) => {
  cy.contains(".inventory_item", productName)
    .find("button")
    .click();
});

When("acesso o carrinho de compras", () => {
  cy.get(".shopping_cart_link").click();
});

When("removo o produto {string} do carrinho", (productName) => {
  cy.contains(".cart_item", productName)
    .find("button")
    .click();
});

Then("o ícone do carrinho deve exibir a quantidade {string}", (quantity) => {
  cy.get(".shopping_cart_badge")
    .should("be.visible")
    .and("contain", quantity);
});

Then("devo visualizar o produto {string} no carrinho", (productName) => {
  cy.get(".shopping_cart_link").click();

  cy.contains(".cart_item", productName)
    .should("be.visible");
});

Then("o carrinho deve ficar vazio", () => {
  cy.get(".cart_item").should("not.exist");
  cy.get(".shopping_cart_badge").should("not.exist");
});