'use strict'

import BasePage from '../base/base_page';
import Element from '../../elements/base/element';
import * as data from '../../../constants/constants';
import SideBar from './sidebar_component';
import MainBar from './mainbar_component';

const { sideBar : { parent }} = data.componentLocators;
const { mainBar : { parent: main_parent }} = data.componentLocators;

export default class ToDoPage extends BasePage {
  constructor() {
    super();
    this.pageTitle = () => new Element('//a/span');
    this.sidebar = () => new SideBar(parent);
    this.mainbar = () => new MainBar(main_parent);
  }
}

