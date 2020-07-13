'use strict'

import BasePage from '../base/base_page';
import Element from '../../elements/base/element';

export default class ToDoPage extends BasePage {
  constructor() {
    super();
    this.pageTitle = () => new Element('//a/span');
    this.sidebar = () => $(`//div[@class='sidebar']`);
  }

  async getMenuItems() {
    const menuElements = await super.elements(`//li[.//div/span]//*[contains(@class, '-title')]`, this.sidebar());   
    return menuElements;
  }
}

