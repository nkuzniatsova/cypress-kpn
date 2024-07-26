/// <reference types ="cypress"/>

export class NummerbehoudPageElements {

    verifyNummerbehoudPageURL() {
        cy.url().should('eq', Cypress.config().baseUrl + '/sim-only/bestellen/nummerbehoud');
        return
    }

    verderBtn() {
        cy.get("[data-test-id='submit-numberporting']").click();
        return
    }
    
}