import { ComponentPO } from "./component.po";

export class NavPO extends ComponentPO {
  home() {
    return this.nav("home");
  }

  discover() {
    return this.nav("discover");
  }

  completed() {
    return this.nav("completed");
  }

  reading() {
    return this.nav("reading");
  }

  wantToRead() {
    return this.nav("want-to-read");
  }

  referAfriend() {
    return this.nav("refer-a-friend");
  }

  notebook() {
    return this.nav("notebook");
  }

  selectCreateWorkSpace() {
    this.root()
      .find(
        '[data-testid="SidebarSectionHeader-PlusButton"], [data-testid="Sidebar-CreateFirstWorkspaceIcon"]'
      )
      .click();
    return this;
  }

  verifyCreatedWorkSpace(name: string) {
    this.root()
      .find('[data-test-locator="SidebarListItem-Link"]')
      .should("contain.text", name);
  }

  private nav(route: string) {
    this.root()
      .find(`[data-test-locator="SidebarListItem-Link"] a[href="/${route}"]`, {
        timeout: 3000,
      })
      .click({ force: true });
    return this;
  }
}
