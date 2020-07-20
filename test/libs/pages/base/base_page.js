'use strict'

import Element from '../../elements/base/element';
import Modal from '../components/modal_popup';
import * as data from '../../../constants/constants';

const modalLocator = data.componentLocators.modal.parent;

export default class BasePage {
  constructor() {
    this.modalPopup = () => {
      return new Modal(modalLocator);
    };
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