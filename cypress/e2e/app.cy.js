/// <reference types="Cypress"/>

describe("testuojam pagrindini puslapi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("tikrinu: ar mygtukas iskviecia uzs. forma ", () => {
    cy.get("#btn-order").click();
    cy.get("#hero-form").should("be.visible");
  });

  it("tikrinu: pildau uzs. forma ir siunciu", () => {
    cy.get("#btn-order").click();
    cy.get("#hero-form").should("be.visible");
    cy.get("#hero-form-name").type("Vardas");
    cy.get("#hero-form-tel").type("+35662548954");
    // volume
    cy.get(
      ".css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root"
    )
      .first()
      .click();
    cy.get('[data-value="50"]').click();
    // wood
    cy.get(
      ".css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root"
    )
      .last()
      .click();
    cy.get('[data-value="Ash"]').click();
    // country
    cy.get("#country-select-demo").click().type("Belgium{enter}");

    cy.get("#btn-place-order").click();
    cy.get("#alert-dialog-title").should("be.visible");
  });

  it("tikrinu: ar uzs. forma nesiunciama pilnai neuzpildzius", () => {
    cy.get("#btn-order").click();
    cy.get("#hero-form").should("be.visible");
    cy.get("#hero-form-name").type("Vardas");
    cy.get("#hero-form-tel").type("+35662548954");

    cy.get("#btn-place-order").click();
    cy.get("#hero-form").should("be.visible");
    cy.get("#alert-dialog-title").should("not.exist");
  });
});
