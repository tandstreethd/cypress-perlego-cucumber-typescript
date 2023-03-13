import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { PerlegoPO } from "../page-objects/perlego.po";
import "cypress-mailosaur";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

When("the user registers an account", () => {
  PerlegoPO.registration().open();

  cy.wait(3000);
  cy.setEmail();
  cy.setPassword();
  cy.getEmail().then((email: string) => {
    cy.getNewPassword().then((password: string) => {
      cy.fixture("userRegistration").then((data) => {
        PerlegoPO.registration()
          .registrationForm()
          .enterFirstName(data.first_name)
          .enterLastName(data.last_name)
          .enterEmail(`${email}`)
          .confirmEmail(`${email}`)
          .enterPassword(password)
          .confirmConsent("Terms")
          .selectButton("Create your account");
      });
      cy.storeNewCredentials(email, password);
    });
  });
});
