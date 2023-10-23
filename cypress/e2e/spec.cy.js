/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.window().then((win) => {
      console.log(`win:`, win);
    });
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
