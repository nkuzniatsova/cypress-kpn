/// <reference types ="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { KiesSimkaartPageElements } from "../../../PageObjects/PageActions/KiesSimkaartActions.js"

const KiesSimkaartActions_Elements = new KiesSimkaartPageElements

Given('User on KiesSimkaartPage', function(){

})

When('Verify KiesSimkaartPage URL is correct', function(){
    KiesSimkaartActions_Elements.verifyKiesSimkaartPageURL()
})

Then('User accept the default selected simkaart value and clicks on the button Verder', function(){
    KiesSimkaartActions_Elements.verderBtn()
})