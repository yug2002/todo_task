Feature: As an user I need to create a tasks list 

Background: Login

Given I open "home" page
When I click on the "Get started" link on the "home" page
And I type "yug2002@yandex.by" in input "email" field on the "login" page
And I click on the "submit" button on the "login" page
And I choose "Personal account" tab on the "login" page
And I type "12344321abcd" in input "password" field on the "login" page
And I click on the "submit" button on the "login" page
Then "ToDo" page is opened

@logout
Scenario: 01.Check that I can create tasks

When I type task names in "Add a task" input field and click "Add" button on the "ToDo" page
| first task     |
| second task    |
| another task   |
| difficult task |
| cool task      |
Then I can see list of tasks on the "ToDo" page 

Scenario: 02.Check that I can delete all tasks

When I choose every task by order and click "Delete task" button on "ToDo" page
Then I can see empty tasks list on "ToDo" page
