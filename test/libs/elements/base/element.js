'use strict'

import * as data from '../../../constants/constants';
import * as waiter from '../../../utils/wait';

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
    return await browser.pause(2000);
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

  async getValue() {
    await this.waitForElement();
    let element = await this.element;
    return await element.getValue();
  }

  async waitForElement(milliseconds = data.timeout) {    
    let element = await this.element;
    return element.waitForExist({ timeout: milliseconds });
  };  

  async findElements(selector) {   
    let predicate = async () => (await (await this.element).$$(selector)).length > 0;  
    await waiter.waitFor (predicate);
    let els = await (await this.element).$$(selector);
    return els.map (element => new Element('', element));
  };

  async findElement(selector) {
    await this.waitForElement();
    let el = await (await this.element).$(selector);
    return new Element('', el);
  }
}