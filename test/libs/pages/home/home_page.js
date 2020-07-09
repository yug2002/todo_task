'use strict'

import BasePage from '../base/base_page';
import Element from '../../elements/base/element';
import * as data from '../../../constants/constants';

export default class HomePage extends BasePage {  
  constructor() {
    super();
    this.buttonByName = name => new Element(`//a[./*[text()='${name}']]`);
  }

  async open() {
    return await super.open(data.applicationUrl);
  };
}
