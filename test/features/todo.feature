Feature: As an user I need to check To Do page

Background: Login

Given I open "home" page
When I click on the "Get started" link on the "home" page
And I type "yug2002@yandex.by" in input "email" field on the "login" page
And I click on the "submit" button on the "login" page
And I choose "Personal account" tab on the "login" page
And I type "12344321abcd" in input "password" field on the "login" page
And I click on the "submit" button on the "login" page
Then "ToDo" page is opened

Scenario: Check that all components are visible

Then I can see all menu components on the "ToDo" page
| My Day          |
| Important       | 
| Planned         |
| Assigned to you |
| Tasks           | 

