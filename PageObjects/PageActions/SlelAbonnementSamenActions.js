/// <reference types ="cypress"/>

export class StelAbonnementSamenPageElements {

    verifyStelAbonnementSamenPageURL() {
        cy.url().should('eq', Cypress.config().baseUrl + '/sim-only/bestellen');
        return
    }

    kiesDitAbbonnementBtn() {
        cy.get('input').contains("Kies dit abonnement").click({force: true})
        return
    }

}