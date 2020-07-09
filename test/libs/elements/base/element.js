'use strict'

import * as data from '../../../constants/constants';

export default class Element {
  constructor(selector) {
    this.element = $(selector);
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
  }

  async waitForElement(milliseconds = data.timeout) {    
    let element = await this.element;
    return element.waitForExist({ timeout: milliseconds });
  };
}