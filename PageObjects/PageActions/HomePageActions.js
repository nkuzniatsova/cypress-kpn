/// <reference types ="cypress"/>
const homeElementLocators = require('../PageElements/HomePageElements.json')
export class HomePageElements {

    goToHomePage() {
        cy.visit('https://www.simyo.nl/');
        return
    }

    acceptCookiesBtn() {
        cy.get('a').contains("Accepteren").then(($btn) => {
            cy.wrap($btn).click();
          })
          return
    }

    orderSimOnlyLink() {
        cy.get('a').contains("Sim Only bestellen").click({force: true});
        return
    }

    //clickOnSimOnlyLink(){
    //    return cy.get('a').contains("Sim Only bestellen").click({force: true});
    //}
}
    