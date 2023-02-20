 /// <reference types="cypress" />

 Cypress.Commands.add('copyPaymentMethod', () => {
    
    /// Acessando Forma de Pagamento
    cy.get('span[class="main-sidebar__submenu-title"]').last().click({force:true})

    /// Selecionando todos status
    cy.get('#situacao').select('Todos');

    /// Editando Primeira forma de pagamento
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 7.5rem; height: auto;"] > .datatable-body-cell-label > .center-icons > [title="Editar"] > vrc-icon > .vr')
        .click()

    /// Copiando elemento e verificando se está vazio
    cy.get('.ng-star-inserted > .main-nav-action__btn--container > vrc-icon > .vr')
        .click()

    /// Verificando se campo Código está vazio
    cy.get('input[placeholder="Código"]')
        .should('be.empty')

 })