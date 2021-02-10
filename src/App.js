import React, {useState} from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)

  const addTask = (name) => {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  /**short handed for <Todo id={task.id} name={task.name} completed={task.completed} /> */
  const taskList = tasks.map(task => <Todo key={task.id} {...task} />)

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
        3 tasks remaining
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