/// <reference types="cypress" />

describe("As coisas estao sendo renderizadas na tela?", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("A lista de produtos aparece?", () => {
    cy.get("[data-cy=produto]").should("be.visible");
  });

  it("O titulo Aparece", () => {
    cy.contains("Blusas");
  });

  describe("Verção desktop", () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
      cy.reload();
    });

    it("O controlador de ordem aparece?", () => {
      cy.get("[data-cy=controlador-ordem]").should("be.visible");
    });

    it("O controle de filtros aparece?", () => {
      cy.get("[data-cy=controle-filtros]").should("be.visible");
    });
  });

  describe("Verção Mobile", () => {
    beforeEach(() => {
      cy.viewport(375, 900);
      cy.reload();
    });

    it("Botao Filtrar Aparece?", () => {
      cy.get('[data-cy="botao-modal-filtrar"]').should("be.visible");
    });

    it("O controle de filtros aparece?", () => {
      cy.get('[data-cy="botao-modal-ordenar"]').should("be.visible");
    });
  });
});
