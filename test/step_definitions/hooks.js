'use strict'

import {After, AfterAll, Before, BeforeAll} from 'cucumber';
import Todo from './../libs/pages/todo_page/todo_page';

BeforeAll(() => browser.maximizeWindow());

After('@logout', async () => await new Todo().signOut());