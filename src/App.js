import React, {useState} from 'react';
import { nanoid } from "nanoid";
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)

  const addTask = (name) => {
    const newTask = { 
      id: "todo-" + nanoid(), 
      name: name, 
      completed: false 
    };
    console.log("id", newTask.id)
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = (id)=> {
    console.log("toggle id", id)
    // change the completed property of only the task that was toggled
    const updatedTasks = tasks.map(task => {
      return id === task.id 
            ? {...task, completed: !task.completed}
            : task 
    })

    setTasks(updatedTasks);
  }

  const deleteTask = (id) => {
    console.log("delete id", id)
    const remainingTask = tasks.filter(task => id !== task.id)

    setTasks(remainingTask);
  }

  /** {...task} short handed for <Todo id={task.id} name={task.name} completed={task.completed} /> */
  const taskList = tasks.map(task => (
    <Todo 
      key={task.id} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      {...task} 
    />
  ))
  
  return (
    <React.StrictMode>
      <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      
      <h2 id="list-heading">
      { `${taskList.length} tasks remaining` }
      </h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
    </React.StrictMode>
  );
};

export default App;