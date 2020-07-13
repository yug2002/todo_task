import Element from '../../elements/base/element'
export default class Component extends Element {
  constructor(parentSelector) {
    this.componentSelector = parentSelector;    
    this.component = () => $(this.componentSelector);
    super('', this.component);    
  } 
  async getElement(selector) {
    let comp = await this.component();
    return await comp.$(selector);
  }

  async getElements(selector) {
    let comp = await this.component();
    return await comp.$$(selector);
  }

}