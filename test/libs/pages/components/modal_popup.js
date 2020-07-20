'use strict'

import Component from './base_component';
import * as data from '../../../constants/constants';

const del = data.componentLocators.modal.delete;

export default class ModalPopupComponent extends Component {
  
  async deleteButton() {
    return await this.findElement(del);
  };
}

