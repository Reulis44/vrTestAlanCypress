 /// <reference types="cypress" />

Cypress.Commands.add('paymentMethod', () => {

    /// Acessando Forma de Pagamento
    cy.get('span[class="main-sidebar__submenu-title"]').last().click({force:true})

    /// Acessando novo cadastro
    cy.get('vr-nav-button-add > .main-nav-action__btn--container > vrc-icon > .vr').click();

    /// Criando Primeiro Item
    cy.createItem();

    /// Criando Segundo Item
    cy.createItem()
    cy.get('span.ng-tns-c59-0')
        .should('exist')
        .should('be.visible')
    
})