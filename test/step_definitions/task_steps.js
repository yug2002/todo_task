'use strict'
import { When, Then } from 'cucumber';
import { expect } from 'chai';

import * as pageFactory from '../libs/pages/page_factory'
import * as data from '../constants/constants';

When(/^I type task names in "(.*)" input field and click "(.*)" button on the "(.*)" page$/,
 async (input, button, page, table) => {
  const mainComp = await pageFactory.getPage(page).mainbar();
  let tasks = table.raw().map(arr => arr[0]);  
  const inp = await mainComp.inputByName(input);

  for(var task of tasks) {     
    await inp.type(task);     
    let add = await mainComp.buttonByName(button);  
    await add.click();         
  };
});

When(/^I choose every task by order and click "(.*)" button on "(.*)" page$/,
async (button, page) => {
  const todoPage = pageFactory.getPage(page);
  const mainBar = await todoPage.mainbar(); 
  const lineElements = await mainBar.taskLines();  
  for (var line of lineElements) {
      await line.click();
      let rComp = await todoPage.rightBar();
      let del = await rComp.buttonByName(button);
      await del.click();     
      const modal = await todoPage.modal();
      const confirmDel = await modal.deleteButton();
      await confirmDel.click();    
  }; 
})

Then(/^I can see list of tasks on the "(.*)" page$/, async (page) => {
  const mainComp = await pageFactory.getPage(page).mainbar();
  let tasksList = await mainComp.taskLines();
  let expectedTasks = data.tasks.map(task => task.name);
  let actualTasks = await Promise.all(tasksList.map(async task => await task.getText()));  
  expect(actualTasks.sort().toString()).to.be.equals(expectedTasks.sort().toString());
});

Then(/^I can see empty tasks list on "(.*)" page$/, async (page) => {
  const mainComp = await pageFactory.getPage(page).mainbar();
  let tasks = await mainComp.taskLines();
  expect(tasks.length).to.be.equals(0);
});
