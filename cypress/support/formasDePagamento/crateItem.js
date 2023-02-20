 /// <reference types="cypress" />

 Cypress.Commands.add('createItem', () => {
    /// Descrição do item
    cy.get('input[placeholder="Descrição"]').type('Teste Alan Silva');

    /// Indicador Forma de Pagamento 
    cy.get('div[class="selection"]')
        .first()
        .click()
        /// Acessando opção a vista
        cy.get('div[class="select2-label-content ng-star-inserted"]')
            .eq(1)
            .click()
        
    /// Meio de Pagamento
    cy.get('div[class="selection"]')
    .last()
    .click()

    /// Acessando opção a vista
    cy.get('div[class="select2-label-content ng-star-inserted"]')
        .eq(4)
        .click()
        
    /// Salvando e Criando um novo item
    cy.get('vr-nav-button-save-and-add > .btn > span').click()
 })