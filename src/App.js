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
    
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = (id)=> {
    // change the completed property of only the task that was toggled
    const updatedTasks = tasks.map(task => {
      return id === task.id 
            ? {...task, completed: !task.completed}
            : task 
    })

    setTasks(updatedTasks);
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id !== task.id)

    setTasks(remainingTasks);
  }

  const editTask = (id, newName) => {
    const editedTasks = tasks.map(task => {
      return id === task.id
            ? {...task, name: newName}
            : task;
    })
    setTasks(editedTasks);
  }

  /** {...task} short handed for <Todo id={task.id} name={task.name} completed={task.completed} /> */
  const taskList = tasks.map(task => (
    <Todo 
      {...task} 
      key={task.id} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
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