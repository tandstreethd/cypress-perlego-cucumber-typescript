import { ComponentPO } from './component.po';


export class ModalPopupPO extends ComponentPO {

    enterWorkSpaceTitle(text: string) {
        this.root().find('[data-testid="Modal-InputWorkspaceTitle"]').type(text);
        return this;
      }

      enterWorkspaceDescription(text: string) {
        this.root().find('[data-testid="Modal-InputWorkspaceDescription"]').type(text);
        return this;
      }

      selectModalButton(name: string){
        this.root().find('button').contains(name).click();
        return this;
      }
  

}