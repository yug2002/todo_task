'use strict'
export const timeout = 15000;
export const applicationUrl = 'https://todo.microsoft.com/tasks/';
//components
export const componentLocators = {
  sideBar: {
    parent: `//div[@class='sidebar']`,
    menuItem: `//li[.//div/span]//*[contains(@class, '-title')]`
  },
  mainBar: {
    parent: `//div[@id='main']`,
  } ,
};