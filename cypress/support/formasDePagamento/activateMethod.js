 /// <reference types="cypress" />

 Cypress.Commands.add('activeMethod', () => {

    /// Acessando Forma de Pagamento
    cy.get('span[class="main-sidebar__submenu-title"]').last().click({force:true})

    /// Selecionando todos status
    cy.get('#situacao').select('Todos');
    
    /// inativando metodo de pagamento
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 7.5rem; height: auto;"] > .datatable-body-cell-label > .center-icons > [title="Inativar"] > .ng-dirty > .form-group > .switch > label > .lever')
        .click();
        /// Verifando mensgem de sucesso
        cy.get('.push-notification')
            .should('be.visible')
    
    /// Ativando Metodo de Pagamento
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 7.5rem; height: auto;"] > .datatable-body-cell-label > .center-icons > [title="Ativar"] > .ng-dirty > .form-group > .switch > label > .lever')
    .click();
    cy.get('.push-notification')
     .should('be.visible')
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 7.5rem; height: auto;"] > .datatable-body-cell-label > .center-icons > [title="Inativar"] > .ng-dirty > .form-group > .switch > label > .lever')
     .click();


    


 })