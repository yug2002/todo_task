'use strict'

import * as data from '../../../constants/constants';

export default class Element {
  constructor(selector, element = null) {
    if(element && !selector) {
      this.element = element;
    } else if (element && selector) {
      this.element = element.$(selector);
    } else {
      this.element = $(selector);
    }   
  }

  async click() {
    await this.waitForElement();
    let element = await this.element;
    element.click();
  };

  async type(text) {
    await this.waitForElement();
    let input = await this.element;
    input.setValue(text);
    return await browser.pause(1500);
  };

  async getText() {
    await this.waitForElement();
    let element = await this.element;
    return await element.getText();
  };

  async isDisplayed() {
    await this.waitForElement();
    let element = await this.element;
    return await element.isDisplayed();
  }

  async waitForElement(milliseconds = data.timeout) {    
    let element = await this.element;
    return element.waitForExist({ timeout: milliseconds });
  };
}