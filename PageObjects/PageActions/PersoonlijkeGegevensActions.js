/// <reference types ="cypress"/>

export class PersoonlijkeGegevensPageElements {

    verifyMijnGegevensPageURL() {
        cy.url().should('eq', Cypress.config().baseUrl + '/sim-only/bestellen/mijn-gegevens'); 
        return
    }

    fillPersonalDataIn(){
        cy.get("[data-test-id='firstName']").type("Test")
        cy.get("[data-test-id='lastName']").type("Simyo Tester")
        cy.get("[data-test-id='birthdate']").type("01-01-2001")
        cy.get("[data-test-id='zipCode']").type("1043EJ")
        cy.get("[data-test-id='houseNumber']").type("121")
        cy.get("[data-test-id='email']").type("kpn@kpn.com")
    }

    verderBtn() {
        cy.get("[data-test-id='submit-customer']").click();
        return
    }
    
}