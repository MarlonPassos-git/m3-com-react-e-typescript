/// <reference types="cypress" />

describe("Filtro de Ordem", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/");
  });

  it("quando clico no filtro aparece as opções?", () => {
    cy.get('[data-cy="controlador-ordem"]').click();

    cy.get('[data-cy="opcoes-ordenacao"]').should("be.visible");
  });

  describe("Opções:", () => {
    beforeEach(() => {
      cy.request(
        "https://my-json-server.typicode.com/MarlonPassos-git/m3-com-react-e-typescript/products"
      );
    });

    it("Quando clico em Mais recentes, organiza os elementos na tela", () => {
      cy.get('[data-cy="controlador-ordem"]').click();

      cy.get('[data-cy="opcao-mais recente"]').click();

      cy.url().should("include", "3000");
    });
  });
});
