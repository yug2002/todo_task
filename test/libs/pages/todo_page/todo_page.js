'use strict'

import BasePage from '../base/base_page';
import Element from '../../elements/base/element';
import * as data from '../../../constants/constants';
import SideBar from './sidebar_component';
import MainBar from './mainbar_component';
import RightBar from './rightBar_component';

const { sideBar : { parent }} = data.componentLocators;
const { mainBar : { parent: mainParent }} = data.componentLocators;
const { rightBar : { parent : rightBarParent}} = data.componentLocators;

export default class ToDoPage extends BasePage {
  constructor() {
    super();
    this.pageTitle = () => new Element('//a/span');
    this.sidebar = () => new SideBar(parent);
    this.mainbar = () => new MainBar(mainParent);
    this.rightBar = () => new RightBar(rightBarParent);
    this.modal = () => this.modalPopup();
    this.buttonContainsName = (name) => new Element(`//button[contains(@aria-label, '${name}')]`);
    this.linkByName = (name) => new Element(`//a[text() = '${name}']`);
  }

  async signOut() {
    await this.buttonContainsName('Account manager').click();    
    await this.linkByName('Sign out').click();
    await browser.pause(5000);
  }
}

