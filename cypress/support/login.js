/// <reference types="cypress" />

Cypress.Commands.add('wrongLogin', () => {

    cy.get("input[placeholder='E-mail']").type('teste.qa@vrsofts.com.br');
    cy.get("input[placeholder='Senha']").type('U9Edxqr5');
    cy.get('.btn').click();
    cy.get('div[class=""]')
        .should('be.visible');
})

Cypress.Commands.add('acceptLogin', () => {

    cy.get("input[placeholder='E-mail']")
        .type('teste.qa@vrsoft.com.br');
    cy.get("input[placeholder='Senha']").type('U9Edxqr5');
    cy.get('.btn').click();
})