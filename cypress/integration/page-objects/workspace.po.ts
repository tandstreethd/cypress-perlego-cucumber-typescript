//search?query=

import { PagePO, ComponentPO } from "./component.po";

export class WorkSpacePO implements PagePO {
  open(spaceID: string) {
    cy.visit(`${Cypress.env('baseUrl')}workspace/${spaceID}}`)
    return this;
  }


}
