/// <reference types ="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { ControleGegevensPageElements } from "../../../PageObjects/PageActions/ControleGegevensActions.js"

const ControleGegevensActions_Elements = new ControleGegevensPageElements

Given('User on ControleGegevensPage', function(){

})

When('Verify page URL is correct', function(){
    ControleGegevensActions_Elements.verifyControleGegevensPageURL()
})

Then('User controles personal data values in the order', function(){
    ControleGegevensActions_Elements.verifyPersonalData()
})