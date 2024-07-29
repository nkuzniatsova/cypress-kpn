Feature: I want open the Simyo Website and order SimOnly abonnement

Scenario: On the HomePage accept cookies and click on the link order SimOnly
Given Navigate to the Simyo Website
When User on Simyo HomePage
Then User accept the cookies and clicks on Sim Only bestellen link
When Verify StelAbonnementSamenPage URL is correct
Then User accept the default selected values and clicks on the button Kies dit abonnement
When Verify KiesSimkaartPage URL is correct
Then User accept the default selected simkaart value and clicks on the button Verder
When Verify NummerbehoudPage URL is correct
Then User accept the default selected Nummerbehoud value and clicks on the button Verder
When Verify PersoonlijkeGegevensPage URL is correct
Then User fills personal data values in and clicks on the button Verder
When Verify ControleGegevensPage URL is correct
Then User controles personal data values in the order