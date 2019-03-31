import { browser } from "protractor";

export class Helpers {
  DEFAULT_WAITING_TIMEOUT = 5000;

  /**
   * Waits until the specified element is present on the page
   * @param domElement element we want to wait to be present
   */
  waitForElement(domElement) {
    browser.wait(function() {
      return browser.isElementPresent(domElement);
    }, this.DEFAULT_WAITING_TIMEOUT);
  }

  /**
   * Checks that current browser url is the same as the given
   */
  checkUrl(url) {
    const expectedUrl = browser.getCurrentUrl();
    expect(expectedUrl).toEqual(`${browser.baseUrl}${url}`);
  }
}
