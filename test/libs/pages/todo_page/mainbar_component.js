import BaseComponent from '../components/base_component';
import * as data from '../../../constants/constants';

const { mainBar: { taskLine }, common: { buttonByName: button, inputByName: input } } = data.componentLocators;

export default class MainBarComponent extends BaseComponent {
  
  async inputByName(name) {
    return await this.findElement(input(name))
  }

  async buttonByName(name) {
    return await this.findElement(button(name));
  }

  async taskLines() {
    return await this.findElements(taskLine);
  }
}