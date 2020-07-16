import BaseComponent from '../components/base_component';
import * as data from '../../../constants/constants';

const { mainBar: { inputByName : input, buttonByName : button,  taskLine } } = data.componentLocators;

export default class MainBarComponent extends BaseComponent {
  constructor(parentSelector) {
    super(parentSelector);
  };

  async inputByName(name) {
    return await super.findElement(input(name))
  }

  async buttonByName(name) {
    return await super.findElement(button(name));
  }

  async taskLines() {
    return await super.findElements(taskLine);
  }
}