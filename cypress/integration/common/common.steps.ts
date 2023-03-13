import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { PerlegoPO } from "../page-objects/perlego.po";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("the app viewport is {string}", (viewport: string) => {
  cy.setViewport(viewport);
});

Given("the user selects main menu item {string}", (menuItem: string) => {
  PerlegoPO.landing().headerMenu().selectMainMenuItem(menuItem);
  
});

Given("the user selects the home page logo", () => {
 // PerlegoPO.home().
});



Given("the user navigates to the app", () => {
  PerlegoPO.landing().open();
});


When("the user registers {string} email updates", (updateType: string) => {});

Then("the registration is successful", () => {});
