'use strict'
import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';

import * as pageFactory from '../libs/pages/page_factory'

Given (/^I open "(.*)" page$/, async page => {
  return await pageFactory.getPage(page).open();  
});

When (/^I click on the "(.*)" link on the "(.*)" page$/, async (name, page) => {  
  const link = await pageFactory.getPage(page).buttonByName(name);
  return await link.click();
});

When (/^I type "(.*)" in input "(.*)" field on the "(.*)" page$/, async (text, type, page) => {
  const input = await pageFactory.getPage(page).inputFieldByType(type);
  return await input.type(text);
});

When (/^I click on the "(.*)" button on the "(.*)" page$/, async (type, page) => {
  const button = await pageFactory.getPage(page).inputFieldByType(type);
  return await button.click();
});

When (/^I choose "(.*)" tab on the "(.*)" page$/, async (account, page) => {
  const accElement = await pageFactory.getPage(page).accountElement(account);
  return await accElement.click();
});

Then(/^"(.*)" page is opened$/, async (page) => {  
  const title = await pageFactory.getPage(page).pageTitle();
  expect(await title.isDisplayed()).to.be.true;
  //expect(true).to.be.eql(true);
});