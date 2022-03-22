# IBM-TRAINING-CASE-STUDY-PROJECT

To create an efficient and responsive task management system that can be used by
an organisation to maintain the data of employees, managers and admin and to provide
the functionality of creating, retrieving, managing and updating the details of the
users(Employees, Managers, Admin).
We have developed an angular based web application where users as an employee or
manager or an admin can login from a single login page and according to role they’ll be
redirected to their respective web pages. On the respective web pages we have
customised the actions according to the corresponding roles:
● USER(ADMIN): Admin can add a new user as an employee, manager and admin
itself. It has the functionality to fetch the details and delete the selected user. On
the Admin web page, all the details regarding each and every user except the
password is available.
● USER(MANAGER): The manager can create the task for employees with certain
details which will be saved to the backend database and from there the manager
can fetch the task details of a particular employee and can update the changes if
needed. The manager also has the functionality to delete the task of a particular
employee. Here the details associated with that particular manager are only
displayed.
● USER(Employee): Employees as a user have restricted access only for
updating the task status from true to false or vice versa. As a user, the employee
will only be displayed all the tasks associated with him/her.
All the database here are interconnected to each other and if any changes are made
from the front end, it is made visible to all the users.
This web application is also provided with login and logout functionality with restricted
access to users.
