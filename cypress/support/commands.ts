// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      setEmail(): void;
      getEmail(): string;
      setViewport(): void;
    }
  }
}

let testEmailAddress = "";
let newPassword = "";

Cypress.Commands.add("setEmail", () => {
  testEmailAddress = `test.${new Date().getTime()}@${Cypress.env(
    "mailosaurServerId"
  )}.mailosaur.net`;
});

Cypress.Commands.add("getEmail", () => {
  return testEmailAddress;
});

Cypress.Commands.add("setPassword", () => {
  newPassword = `testing${new Date().getTime()}$`;
});

Cypress.Commands.add("getNewPassword", () => {
  return newPassword;
});

//example usage of this method
//cy.addNewCredentials('newusername', 'newpassword');

Cypress.Commands.add("storeNewCredentials", (username, password) => {
  const newCredentials = { username, password };
  cy.writeFile("cypress/fixtures/credentials.json", newCredentials);
});



Cypress.Commands.add("setViewport", (viewportType) => {
  switch (viewportType) {
    case "mobile":
      cy.viewport("iphone-x");
      break;
    case "tablet":
      cy.viewport("ipad-2");
      break;
    case "desktop":
      cy.viewport("macbook-13");
      break;
    case "large-desktop":
      cy.viewport("1980, 1080");
      break;
    default:
      cy.log(`Invalid viewport type: ${viewportType}`);
  }
});

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
