'use strict'

export default class BasePage {
  constructor() {

  }
  async open(url) {
    return await browser.url(url);
  }
}