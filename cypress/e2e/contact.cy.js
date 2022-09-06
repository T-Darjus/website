/// <reference types="Cypress"/>

describe("testuoju: Contact", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
  });

  it("tikrinu ar egzistuoja iFrame", () => {
    cy.get("iframe").should("be.visible");
  });
});
