import homePage from "../../Pages/HomePage/homePage";

Given("I navigate to the Simyo Website", () => {
cy.visit();
});
When("I views links in Home Page of the Site", (datatable) => {
datatable.hashes().forEach((element) => {
homePage.searchItem(element);
});
});