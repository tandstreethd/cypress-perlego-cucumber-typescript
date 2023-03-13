import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { PerlegoPO } from "../page-objects/perlego.po";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("the user navigates to the password reset page", () => {
  PerlegoPO.passwordReset().open();
  PerlegoPO.landing().cookiesBanner().selectCookieButton("Accept all");
});

When("the user submits a new password", () => {
  cy.fixture("login").then((data) => {
    PerlegoPO.passwordReset()
      .passwordResetForm()
      .enterPassword(data.new_password)
      .enterConfirmPassword(data.new_password)
      .selectResetPassword("Reset Password");
  });
});

When("the user submits valid password reset code", () => {
  cy.wait(5000);
  cy.get("@username").then((username) => {
    cy.mailosaurGetMessage(Cypress.env("mailosaurServerId"), {
      sentTo: username,
    }).then((retrievedEmail) => {
      expect(retrievedEmail.subject).to.contains("Password Reset");

      PerlegoPO.passwordReset()
        .passwordResetForm()
        .enterSecurityCode(retrievedEmail.html.codes[0].value)
        .selectSecurityCodeBtn("Validate code");
    });
  });
});

When("the user submits a valid email in forgot password form", () => {
  cy.fixture("credentials").then((data) => {
    PerlegoPO.passwordReset()
      .passwordResetForm()
      .enterEmail(data.username)
      .selectForgotPasswordBtn("Send code by email");

    cy.wrap(data.username).as("username");
  });
});
