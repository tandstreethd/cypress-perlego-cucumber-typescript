import { PagePO, ComponentPO } from "./component.po";

export class LoginPO implements PagePO {
  open() {
    cy.visit(`${Cypress.env("baseUrl")}login`);
    return this;
  }

  loginForm() {
    return new LoginFormPO(() => cy.get('[data-component-locator="Login"]'));
  }
}

class LoginFormPO extends ComponentPO {
  enterEmail(text: string) {
    this.root().find('#input-email').type(text);

    return this;
  }

  enterPassword(text: string) {
    this.root().find('[data-test-locator="password-input"]').type(text);

    return this;
  }

  selectButton(name: string) {
    this.root().find("button").contains(name).click();

    return this;
  }

  checkLoginValidation() {
    this.root()
      .find('[data-component-locator="password-error-message"]')
      .should("contain.text", "Incorrect password. Please try again.");

    return this;
  }

  enterLogin(details: string) {
    cy.fixture("credentials").then((data) => {
      switch (details) {
        case "valid":
          this.enterEmail(data.username);
          this.selectButton("Continue");
          this.enterPassword(data.password);
          this.selectButton("Log in");
          break;

          case "newPassword":
            this.enterEmail(data.username);
            this.selectButton("Continue");
            this.enterPassword(data.new_password);
            this.selectButton("Log in");

            break;
      }
    });
    return this;
  }
}
