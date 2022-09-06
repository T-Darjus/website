/// <reference types="Cypress"/>

describe("testuoju: About us", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/aboutus");
  });

  it("tikrinu ar egzistuoja karusele", () => {
    cy.get("#slider").should("be.visible");
  });
});
