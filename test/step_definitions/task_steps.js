'use strict'
import { When, Then } from 'cucumber';
import { expect } from 'chai';

import * as pageFactory from '../libs/pages/page_factory'
import * as data from '../constants/constants';

const tasksArr = data.tasks;

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

Then(/^I can see list of tasks on the "(.*)" page$/, async (page) => {
  const mainComp = await pageFactory.getPage(page).mainbar();
  let tasksList = await mainComp.taskLines();
  let expectedTasks = data.tasks.map(task => task.name);
  let actualTasks = await Promise.all(tasksList.map(async task => await task.getText()));  
  expect(actualTasks.sort().toString()).to.be.equals(expectedTasks.sort().toString());
});

