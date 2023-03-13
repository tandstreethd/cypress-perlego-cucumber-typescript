import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { PerlegoPO } from "../page-objects/perlego.po";
import "cypress-mailosaur";

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

When("the user creates a workspace with tha name {string}", (name: string) => {
  cy.wait(5000);
  PerlegoPO.nav().selectCreateWorkSpace();
  PerlegoPO.modalPopup()
    .enterWorkSpaceTitle(name)
    .enterWorkspaceDescription("This is a new work space")
    .selectModalButton("Create workspace");

});

When("the created workspace with {string} is displayed", (name: string) => {
  PerlegoPO.nav().verifyCreatedWorkSpace(name);
});
