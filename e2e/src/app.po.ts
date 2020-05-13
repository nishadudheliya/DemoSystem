import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  // getTitleText() {
  //   return element(by.css('app-root h1')).getText() as Promise<string>;
  // }

  getSignUpButton() {
    return element(by.css('[routerLink="/signup"]'));
  }

  getSignUpText() {
    return element(by.css('app-signup h2')).getText();
  }

  getEmailTextbox() {
    return element(by.name('email'));
   }

   getPasswordTextbox() {
    return element(by.name('password'));
   }

   getConfirmPasswordTextbox() {
    return element(by.name('confirmPassword'));
   }

   SignUpButton() {
     return element(by.name('signUp'));
   }

   clickSignUP() {
     return element(by.name('signUp')).click();
   }
   
}
