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
    inputByName: (name) => `//input[@aria-label='${name}']`,
    buttonByName: (name) => `//button[@aria-label='${name}']`,
    taskLine: `//span[@class='taskItem-title']`,
  },
  rightBar: {
    parent: `//div[@class='details']`,
    buttonByName: (name) => `//button[@aria-label='${name}']`,
  }
};

export const tasks = [
  { name: 'first task' },
  { name: 'second task' },
  { name: 'another task' },
  { name: 'difficult task' },
  { name: 'cool task' } 
];
