import { ComponentPO } from "./component.po";

export class SearchResultPO extends ComponentPO {
  checkSearchResultCount(count: number) {
    this.root().find('[data-test-locator*="Grid-ItemGrid"] a, .sc-eTWrZZ.fcvKeX').should('have.length.gte', count);

    return this;
  }
}
