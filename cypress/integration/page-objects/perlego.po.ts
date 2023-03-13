import { HomePO } from "./home.po";
import { LoginPO } from "./login.po";
import { NavPO } from "./nav.po";
import { LandingPO } from "./landing.po";
import { RegistrationPO } from "./registration.po";
import { SearchPO } from "./search.po";
import { PasswordResetPO } from "./password-reset.po";
import { ModalPopupPO } from "./modal-popup.po";

class Perlego {
  constructor() {}

  nav() {
    return new NavPO(() => cy.get("#Sidebar"));
  }

  landing() {
    return new LandingPO();
  }

  home() {
    return new HomePO();
  }

  login() {
    return new LoginPO();
  }

  registration() {
    return new RegistrationPO();
  }

  search() {
    return new SearchPO();
  }

  passwordReset() {
    return new PasswordResetPO();
  }

  modalPopup() {
    return new ModalPopupPO(() => cy.get('[data-testid="Modal"]'));
  }
}

export const PerlegoPO = new Perlego();
