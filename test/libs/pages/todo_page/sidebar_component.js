'use strict'

import Component from '../components/base_component';
import * as data from '../../../constants/constants';

const { sideBar: { menuItem }} = data.componentLocators;

export default class SideBarComponent extends Component {
  constructor(parentSelector) {
    super(parentSelector);
  };

  async menuItems() {
    return await super.findElements(menuItem);
  };
}