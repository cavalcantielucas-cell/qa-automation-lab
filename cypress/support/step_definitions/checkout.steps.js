import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("prossigo para o checkout", () => {
  cy.get('[data-test="checkout"]').click();
});

When("preencho os dados de checkout", () => {
  cy.get('[data-test="firstName"]').type("Lucas");
  cy.get('[data-test="lastName"]').type("Cavalcanti");
  cy.get('[data-test="postalCode"]').type("54400-000");
  cy.get('[data-test="continue"]').click();
});

When("finalizo a compra", () => {
  cy.get('[data-test="finish"]').click();
});

Then("devo visualizar a mensagem de compra concluída", () => {
  cy.get('[data-test="complete-header"]')
    .should("be.visible")
    .and("contain", "Thank you for your order!");
});