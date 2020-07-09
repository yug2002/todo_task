'use strict'

import HomePage from './home/home_page';
import LoginPage from './login/login_page'

export const getPage = name => {
  switch(name.toLowerCase()) {
    case 'home': return new HomePage();
    break;
    case 'login': return new LoginPage();
    break;
    default: throw new Error('No any page found');
  };
}