import { PagePO, ComponentPO } from "./component.po";
import "cypress-iframe";

export class LandingPO implements PagePO {
  open() {
    cy.visit(Cypress.env("baseUrl"));
    return this;
  }

  headerMenu() {
    return new HeaderMenuPO(() => cy.get('[data-testid="LandingPageHeader"], [data-component-locator="NavBar"]'));
  }

  cookiesBanner(){
    return new CookiesBannerPO(() => cy.get('[data-testid="cookieBannerWrapper"]'));
  }

}


class CookiesBannerPO extends ComponentPO {

  selectCookieButton(name: string) {
    this.root().find('[data-testid="CookieBanner-AcceptCookiesButton"]').click();
    return this;
  }
}

class HeaderMenuPO extends ComponentPO {
  selectHomePageLogo() {
    this.root().find('[data-testid="PerlegoLogo"]').click();

    return this;
  }

  selectMainMenuItem(name: string) {
    this.root().find('[data-testid="SearchBarNavigation"]').contains(name).click();

    return this;
  }

}
