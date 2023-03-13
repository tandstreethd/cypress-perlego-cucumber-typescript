import { ComponentPO } from './component.po';

export class NavBarPO extends ComponentPO {
   
    enterSearch(text: string) {
        this.root().find('[data-test-locator="SearchBar-Input"]').type(text);
        return this;
      }

      selectUserProfile(){
        this.root().find('[data-test-locator="searchNavBar-userIcon-wrapper"]').click();
        return this;
      }

      selectProfileMenuItem(text: string) {
        this.root().find('[data-test-locator*=NavBarUserDropdown]').contains(text).click();
        return this;
      }

      checkProfile(text: string) {
        this.root().find('[data-test-locator*=NavBarUserDropdown]').should('contain', text)
        return this;
      }

      verifyProfile(text: string) {
        this.selectUserProfile();
        this.checkProfile(text);
        return this;
      }

}