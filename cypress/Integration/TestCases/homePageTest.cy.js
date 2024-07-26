/// <reference types ="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { HomePageElements } from "../../../PageObjects/PageActions/HomePageActions.js";

const HomePage_Elements = new HomePageElements

Given('Navigate to the Simyo Website', function(){
    HomePage_Elements.goToHomePage()
   // cy.visit('https://www.simyo.nl/')
})

When('User on Simyo HomePage', function(){

})

Then('User accept the cookies and clicks on Sim Only bestellen link', function(){
    HomePage_Elements.acceptCookiesBtn()
    HomePage_Elements.orderSimOnlyLink()
})