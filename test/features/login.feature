Feature: As a user i need to move to ToDo page

Scenario: Log in to Microsoft To Do page

Given I open "home" page
When I click on the "Get started" link on the "home" page
And I type "yug2002@yandex.by" in input "email" field on the "login" page
And I click on the "submit" button on the "login" page
And I choose "Personal account" tab on the "login" page
And I type "12344321abcd" in input "password" field on the "login" page
And I click on the "submit" button on the "login" page
Then "ToDo" page is opened
  