import { PagePO, ComponentPO } from "./component.po";

export class RegistrationPO implements PagePO {
  open() {
    cy.visit(`${Cypress.env("baseUrl")}sign-up`);
    return this;
  }

  checkoutNavBar() {
    return new checkoutNavBarPO(() =>
      cy.get('[data-component-locator="CheckoutNavBar"]')
    );
  }

  registrationForm() {
    return new RegistrationFormPO(() =>
      cy.get('[data-test-locator="start-trial-a-wrapper"]')
    );
  }
}

export class checkoutNavBarPO extends ComponentPO {
  selectPageLogo() {
    this.root().find('[data-testid="PerlegoLogo"]').click();

    return this;
  }
}

export class RegistrationFormPO extends ComponentPO {
  enterEmail(text: string) {
    this.root().find("#input-email").type(text);

    return this;
  }

  confirmEmail(text: string) {
    this.root().find("#input-confirmationEmail").type(text);

    return this;
  }

  enterFirstName(text: string) {
    this.root().find("#input-firstName").type(text);

    return this;
  }

  enterLastName(text: string) {
    this.root().find("#input-lastName").type(text);
    return this;
  }

  enterPassword(text: string) {
    this.root().find("#password", { timeout: 3000 }).type(text);

    return this;
  }

  selectButton(name: string) {
    this.root().find("button").contains(name).click();

    return this;
  }

  confirmConsent(name: string) {
    this.root().find(`[data-testid*="${name}"]`).click({ force: true });

    return this;
  }
}
