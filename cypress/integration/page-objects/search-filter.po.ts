import { ComponentPO } from "./component.po";

export class SearchFilterPO extends ComponentPO {
  randomSelectMainFilterOption() {
    this.root()
      .find(
        '[data-test-locator="SearchTabWrapper"] [data-component-locator*="SearchTab-wrapper"]'
      )
      .then((elements) => {
        const randomIndex = Math.floor(Math.random() * elements.length);
        const selectedElement = cy.wrap(elements[3]);
        selectedElement.invoke('text').as('mainFilter');
        cy.wrap(elements[3]).click();
      });
    return this;
  }

  randomSelectSubFilter() {
    cy.get('@mainFilter').then((mainFilter) => {
      if (!(mainFilter.includes('Topics') || mainFilter.includes('Publishers'))) {
        this.root()
          .find('.sc-ebbjQI.kazNXM [data-component-locator^="Dropdown"]')
          .then((elements) => {
            const randomIndex = Math.floor(Math.random() * elements.length);
            cy.wrap(elements[randomIndex]).click();
            this.randomSelectSubFilterOption(); 
          });
      }
    });
    return this;
}


  randomSelectSubFilterOption() {
    this.root()
      .find(
        '.sc-ebbjQI.kazNXM [data-testid="DropdownItem"], [data-test-locator="DropdownBlock-menu"] div[id*="item"], [data-test-locator="DropdownBlock-menu"] div[id*="dropdown"]'
      )
      .then((elements) => {
        const randomIndex = Math.floor(Math.random() * elements.length);
        cy.wrap(elements[randomIndex]).click();
      });
    return this;
  }
}
