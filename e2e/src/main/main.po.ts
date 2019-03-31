import { browser } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('/');
  }
}
