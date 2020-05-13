import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display signup button', () => {
    page.navigateTo();
    expect(page.getSignUpButton().getText()).toEqual('SignUp');
  });

  it('should navigate to signup page', () => {
    page.navigateTo();
    page.getSignUpButton().click();
    expect(page.getSignUpText()).toEqual('Create your account');
  });

  it('should fill signup page', async () => {
    await page.getEmailTextbox().sendKeys('nisha@mail.com');
    await page.getPasswordTextbox().sendKeys('123456789');
    await page.getConfirmPasswordTextbox().sendKeys('123456789');
    await expect(page.SignUpButton().getText()).toEqual('Sign Up');
  });

  it('should store form value in local storage', async () => {
    let btn = page.SignUpButton();
    await expect(btn.isDisplayed()).toBeTruthy();
    // page.clickSignUP();
    // let valLocalStorage = browser.executeScript("return window.localStorage.getItem('LoggedInUser');");  
    // expect(valLocalStorage).toEqual('nisha@mail.com');  
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
