/// <reference types ="cypress"/>

export class KiesSimkaartPageElements {

    verifyKiesSimkaartPageURL() {
        cy.url().should('eq', Cypress.config().baseUrl + '/sim-only/bestellen/simkaart');
        return
    }

    verderBtn() {
        cy.get('input').contains("Verder").click();
        return
    }

}