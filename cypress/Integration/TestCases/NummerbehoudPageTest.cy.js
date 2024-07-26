/// <reference types ="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { NummerbehoudPageElements } from "../../../PageObjects/PageActions/NummerbehoudActions.js"

const NummerbehoudActions_Elements = new NummerbehoudPageElements

Given('User on NummerbehoudPage', function(){

})

When('Verify page URL is correct', function(){
    NummerbehoudActions_Elements.verifyNummerbehoudPageURL()
})

Then('User accept the default selected Nummerbehoud value and clicks on the button Verder', function(){
    NummerbehoudActions_Elements.verderBtn()
})