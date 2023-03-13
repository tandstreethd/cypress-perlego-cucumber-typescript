import { PagePO, ComponentPO } from "./component.po";
import { NavBarPO } from "./nav-bar.po";
import { SearchFilterPO } from "./search-filter.po";
import { SearchResultPO } from "./search-result.po";
//

export class PasswordResetPO implements PagePO {
  open() {
    cy.visit(Cypress.env("baseUrl") + "password-reset");
    return this;
  }

  passwordResetForm() {
    return new passwordResetFormPO(() => cy.get("#password-reset"));
  }
}

class passwordResetFormPO extends ComponentPO {
  enterEmail(text: string) {
    this.root().find("#input-email").type(text);

    return this;
  }

  enterPassword(text: string) {
    this.root().find("#password").type(text);

    return this;
  }

  enterConfirmPassword(text: string) {
    this.root().find("#passwordConfirmation").type(text);

    return this;
  }

  enterSecurityCode(text: string) {
    this.root().find('[data-test-locator="input-securityCode"]').type(text);

    return this;
  }

  selectResetPassword(name: string) {
    this.root().find(".sc-dmZihf.fZeWHw button").click();

    return this;
  }

  selectSecurityCodeBtn(name: string) {
    this.root()
      .find('[data-testid="SecurityCodeCard-SubmitButton"]')
      .contains(name)
      .click();

    return this;
  }

  selectForgotPasswordBtn(name: string) {
    this.root()
      .find('[data-testid="ForgotPasswordCard-SubmitButton"]')
      .contains(name)
      .click();

    return this;
  }
}
