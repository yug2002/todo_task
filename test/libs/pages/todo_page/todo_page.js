'use strict'

import BasePage from '../base/base_page';
import Element from '../../elements/base/element';
import * as data from '../../../constants/constants';

const { sideBar : { parent , menuItem }} = data.componentLocators;
const { mainBar : { parent: main_parent }} = data.componentLocators;

export default class ToDoPage extends BasePage {
  constructor() {
    super();
    this.pageTitle = () => new Element('//a/span');
    this.sidebar = () => $(parent);
    this.mainbar = () => $(main_parent);
  }

  async getMenuItems() {    
    return await super.elements(menuItem, this.sidebar());
  }

}

