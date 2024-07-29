/// <reference types ="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { StelAbonnementSamenPageElements } from "../../../PageObjects/PageActions/SlelAbonnementSamenActions.js"

const StelAbonnementSamen_Elements = new StelAbonnementSamenPageElements

Given('User on StelAbonnementSamenPage', function(){
    
})

When('Verify StelAbonnementSamenPage URL is correct', function(){
    StelAbonnementSamen_Elements.verifyStelAbonnementSamenPageURL()
})

Then('User accept the default selected values and clicks on the button Kies dit abonnement', function(){
    StelAbonnementSamen_Elements.kiesDitAbbonnementBtn()
})