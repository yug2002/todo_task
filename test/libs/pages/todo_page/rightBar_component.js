'use strict'

import Component from '../components/base_component';
import * as data from '../../../constants/constants';

const { common: { buttonByName: button }} = data.componentLocators;

export default class RightBarComponent extends Component {
  
  async buttonByName(name) {
    return await this.findElement(button(name));
  }
}
