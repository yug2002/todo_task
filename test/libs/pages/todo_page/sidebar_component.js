'use strict'

import Component from '../components/base_component';
import * as data from '../../../constants/constants';

const { sideBar: { menuItem }} = data.componentLocators;

export default class SideBarComponent extends Component {  

  async menuItems() {
    return await this.findElements(menuItem);
  };
}