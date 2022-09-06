/// <reference types="Cypress"/>

describe("testuoju Questions forma", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("tikrinu, ar pavyksta issiusti, viska uzpildzius", () => {
    cy.get("#name").type("Vardas");
    cy.get("#tel").type("+65479321");
    cy.get("#question").type("Testuoju testuoju testuoju");
    cy.get("#btn-questions").click();
    cy.get("#alert-dialog-title").should("be.visible");
  });

  it("tikrinu, ar nepavyksta issiusti, neuzpildzius", () => {
    cy.get("#name").type("Vardas");

    cy.get("#btn-questions").click();
    cy.get("#alert-dialog-title").should("not.exist");
  });
});
