import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { PerlegoPO } from "../page-objects/perlego.po";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("the user signs in by submitting {string} credentials",(credentials: string) => {
  cy.setViewport("desktop");
    PerlegoPO.login().open();
    PerlegoPO.login().loginForm().enterLogin(credentials);
    //
  }
);

Given("the user navigates to the login page",() => {
    PerlegoPO.login().open();
  }
);


Given("the user is logged into the app", () => {
  PerlegoPO.home().navBar().verifyProfile("Logout");
});
