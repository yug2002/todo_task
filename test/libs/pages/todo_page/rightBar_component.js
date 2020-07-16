'use strict'

import Component from '../components/base_component';
import * as data from '../../../constants/constants'

const { rightBar: { buttonByName: button }} = data.componentLocators;

export default class RightBarComponent extends Component {
  constructor(parentLocator) {
    super(parentLocator);
  }

  async buttonByName(name) {
    return await super.findElement(button(name));
  }
}
