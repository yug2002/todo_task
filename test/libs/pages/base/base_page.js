'use strict'

import Element from '../../elements/base/element'

export default class BasePage {
  constructor() {

  }
  async open(url) {
    return await browser.url(url);
  }

  async elements(selector) {
    const arr = await $$(selector);
    const currArr = arr.map(element => new Element('', element));
    return currArr;
  }
}