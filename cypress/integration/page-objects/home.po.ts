import { PagePO, ComponentPO } from "./component.po";
import { NavBarPO } from './nav-bar.po';

export class HomePO implements PagePO {
  open() {
    cy.visit(`${Cypress.env('baseUrl')}home`);
    return this;
  }

  navBar() {
    return new NavBarPO(() => cy.get('[data-test-locator="NavBar"]'));
  }



}
