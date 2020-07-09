'use strict'

import {After, AfterAll, Before, BeforeAll} from 'cucumber';

BeforeAll(() => browser.maximizeWindow());