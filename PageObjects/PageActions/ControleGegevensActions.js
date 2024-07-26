/// <reference types ="cypress"/>

export class ControleGegevensPageElements {

    verifyControleGegevensPageURL() {
        cy.url().should('eq', Cypress.config().baseUrl + '/sim-only/bestellen/controle'); 
        return
    }

    verifyPersonalData(){
        cy.get("[class='summary__box__step__content__description']").should('contain', 'Dhr. Test Simyo Tester') //kpn@kpn.com<br>Teleportboulevard 121 <br>1043EJ Amsterdam')
        cy.get("[class='summary__box__step__content__description']").should('contain', 'kpn@kpn.com') 
        cy.get("[class='summary__box__step__content__description']").should('contain', 'Teleportboulevard 121') 
        cy.get("[class='summary__box__step__content__description']").should('contain', '1043EJ Amsterdam') 
    }

}