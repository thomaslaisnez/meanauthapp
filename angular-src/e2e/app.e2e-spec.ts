//import { AngularSrcPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('MEAN Auth App test', function() {

  it('should display home title', () => {
    browser.get('/');
    let title = element(by.tagName('h1')).getText();
    expect(title).toEqual('MEAN Auth App');
  });

  it('should be on login', () => {
    browser.get('/login');
    var currentUrl = browser.getCurrentUrl();
    expect(currentUrl).toMatch('/login');
  });

  it('should be on home because we are not logged in', () => {
    browser.get('/profile');
    var currentUrl = browser.getCurrentUrl();
    expect(currentUrl).toMatch('/');
  });

  it('should go to login after registration', () => {
    browser.get('/register');
    element(by.id('usernameField')).sendKeys('testUser');
    element(by.id('nameField')).sendKeys('testName');
    element(by.id('emailField')).sendKeys('test@test.com');
    element(by.id('passwordField')).sendKeys('test');
    let submitButton = element(by.id('submitButton'));
    submitButton.click();
    //expect(browser.driver.getCurrentUrl()).toBe('/dashboard');
    var currentUrl = browser.getCurrentUrl();
    expect(currentUrl).toMatch('/login');
  });

  it('should login', () => {
    browser.get('/login');
    element(by.id('usernameField')).sendKeys('test');
    element(by.id('passwordField')).sendKeys('test');
    let submitButton = element(by.id('loginButton'));
    submitButton.click();
    //expect(browser.driver.getCurrentUrl()).toBe('/dashboard');
    var currentUrl = browser.getCurrentUrl();
    expect(currentUrl).toMatch('/dashboard');
  });
});
