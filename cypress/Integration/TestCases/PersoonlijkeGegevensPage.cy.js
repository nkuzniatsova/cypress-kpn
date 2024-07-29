/// <reference types ="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { PersoonlijkeGegevensPageElements } from "../../../PageObjects/PageActions/PersoonlijkeGegevensActions.js"

const PersoonlijkeGegevensActions_Elements = new PersoonlijkeGegevensPageElements

Given('User on PersoonlijkeGegevensPage', function(){

})

When('Verify PersoonlijkeGegevensPage URL is correct', function(){
    PersoonlijkeGegevensActions_Elements.verifyMijnGegevensPageURL()
})

Then('User fills personal data values in and clicks on the button Verder', function(){
    PersoonlijkeGegevensActions_Elements.fillPersonalDataIn()
    PersoonlijkeGegevensActions_Elements.verderBtn()
})