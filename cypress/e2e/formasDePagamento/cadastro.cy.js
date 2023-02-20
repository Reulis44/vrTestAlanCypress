/// <reference types="cypress" />

describe('Teste etapa Forma de Pagamento', () => {

    beforeEach('Site a ser visitado', () => {
        cy.visit('http://localhost/login');
    });

    it('Combinando mesma forma de pagamento (com o mesmo já ativo)', () => {
        /// Script Login
        cy.acceptLogin();
        
        /// Script Forma de Pagamento
        cy.paymentMethod();
    });

    it('Ativar e Inativar o cadastro a qualquer momento (desde que não esteja nenhum relacionado ativo', () => {

        /// Script Login
        cy.acceptLogin();

        /// Script reativação forma de Pagamento
        cy.activeMethod();
    });

    it('Copiar forma de pagamento e o código não estar  copiado', () => {

        /// Script Login
        cy.acceptLogin();

        /// Script Copiar Forma de pagamento
        cy.copyPaymentMethod();
    });
})
