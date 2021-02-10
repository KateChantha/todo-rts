# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Todo App functionality
User can
- read a list of task
- add a task using the mouse or keyboard
- mark any task as completed, using the mouse or keyboard
- delete any task, using the mouse or keyboard
- edit any task, using the mouse or keyboard
- view a specific subset of tasks: All tasks, only active tasks, or only the completed tasks.

#### Accessibility Features
```
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```
- aria-pressed tells assistive technology (like screen readers) that the button can be in one of two states: pressed or unpressed.
NOTE: The aria-pressed attribute has a value of "true"(string)instead of {true} because aria-pressed is not a true boolean attribute.
- The class visually-hidden. any element with this class will be hidden from sighted users and still available to screen reader users — this is because these words are not needed by sighted users; they are there to provide more information about what the button does for screenreader users.

```
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>
```
- The role attribute helps assistive technology explain what kind of element a tag represents.
- The aria-labelledby attribute tells assistive technologies that we're treating our list heading as the label that describes the purpose of the list beneath it. Making this association gives the list a more informative context, which could help screen reader users better understand the purpose of it.

#### Check Box 
 when you click on a checkbox, it checks and unchecks appropriately. As a feature of HTML, the browser knows how to remember which checkbox inputs are checked or unchecked without our help. This feature hides a problem, however: toggling a checkbox doesn't change the state in our React application. This means that the browser and our app are now out-of-sync. We have to write our own code to put the browser back in sync with our app.
 