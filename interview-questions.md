# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This mistake can be fixed by doing a migration in which we add a column for foreign key to the Student model. The foreign key will be named cohort_id and the data type will be integer. 

Researched answer: When determining which model will have the foreign key, we have to look at the association between them. For example, cohort has many students, means that students belongs to cohort. In order to know which cohort that student belongs to, we give the student model a column for the foreign key.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are show, edit, update and destroy because we need to know which item we are trying to display, edit, or delete.

Researched answer: The RESTful routes that require params are show, edit, update, and destroy because its necessary to know which item there is something being performed or asked of. It is also important to consider the params when setting routes in our application. 

3. Name three rails generator commands. What is created by each?

Your answer: There is generate model which creates the database structure. The generate controller command will create a controller. And lastly, there is the generate migration command which will create a file in which we can make changes to the model. 

Researched answer: There is also generate Resource which will do the same thing as model but will also generate the routes for you. There is a list of other things we can generate but the most common would be Controller, Model, Migration, and Resource. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This would call on the index method and list all of the students. 

action: "POST" location: /students
This is the create method in which a new student has been added to the list. 

action: "GET" location: /students/new
This is the new method and produces a form for a new student to be added.

action: "GET" location: /students/2
This would call on the show method and list the specific student with id of 2. 

action: "GET" location: /students/2/edit
This will also result in a form but for edits to be made to an entry.

action: "PATCH" location: /students/2
These are the changes that have been posted after an edit and calls on the update method. 

action: "DELETE" location: /students/2
This will call on the destroy method and delete the student with id of 2. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a developer, I want to create an application.
- As a developer, my To-do List will have a task, description and status.
- As a developer, I can add tasks directly into the database
- As a user, I can see all my tasks in the main page of the application.
- As a user, I can click on a specific task and go to a page with that task as title, a description and the status
- As a user I can navigate back to the main page
- As a user, I can create a new task
- As a user, I can update a task
- As a user, I can delete a task
- As a developer, I can make sure every task has a name, description and status.


