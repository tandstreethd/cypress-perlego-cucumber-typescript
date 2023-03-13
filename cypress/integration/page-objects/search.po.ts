import { PagePO, ComponentPO } from "./component.po";
import { NavBarPO } from './nav-bar.po';
import { SearchFilterPO } from './search-filter.po';
import { SearchResultPO } from './search-result.po';

export class SearchPO implements PagePO {
  open() {
    cy.visit(Cypress.env("baseUrl") + "search?query=");
    return this;
  }

  navBar() {
    return new NavBarPO(() => cy.get('[data-test-locator="NavBar"]'));
  }

  searchFilter() {
    return new SearchFilterPO(() => cy.get('#search .sc-bLaUG.bxhcoR'));
  }

  searchResult() {
    return new SearchResultPO(() => cy.get('[data-test-locator*="SearchResults"]'));
  }

}