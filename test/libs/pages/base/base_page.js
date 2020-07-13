'use strict'

import Element from '../../elements/base/element'

export default class BasePage {
  constructor() {

  }
  async open(url) {
    return await browser.url(url);
  }

  async elements(selector, element) {
    let arr = [];
    if(element && selector){
      let el = await element;
      arr = await el.$$(selector);

    } else {
      arr = await $$(selector);
    }
    
    let currArr = arr.map(element => new Element('', element));
    return currArr;
  }
}