import BasePage from '../base/base_page';
import Element from '../../elements/base/element';

export default class LoginPage extends BasePage {
  constructor() {
    super();
    this.inputFieldByType = type => new Element(`input[type='${type}']`);
    this.accountElement = account => new Element(`//div[@class = 'row tile'][.//*[text() = '${account}']]`);    
  }
}
