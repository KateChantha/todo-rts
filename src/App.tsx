import React, {useState} from 'react';
import { nanoid } from "nanoid";
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { StringMappingType } from 'typescript';

const FILTER_MAP = {
  All: () => true,
  Active: (task: any) => !task.completed,
  Completed: (task: any) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

type TaskType = {
  id: string;
  name: string;
  completed: boolean;
}
interface Props {
  tasks: TaskType[]
}

type FilterType = 'All' | 'Active' | 'Completed'

const App: React.FC<Props> = (props) => {
  const [tasks, setTasks] = useState<TaskType[]>(props.tasks);
  const [filter, setFilter] = useState<FilterType>('All')

  const addTask = (name: string): void => {
    const newTask: TaskType = { 
      id: "todo-" + nanoid(), 
      name: name, 
      completed: false 
    };
    
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = (id: string)=> {
    // change the completed property of only the task that was toggled
    const updatedTasks = tasks.map(task => {
      return id === task.id 
            ? {...task, completed: !task.completed}
            : task 
    })

    setTasks(updatedTasks);
  }

  const deleteTask = (id: string) => {
    const remainingTasks = tasks.filter(task => id !== task.id)

    setTasks(remainingTasks);
  }

  const editTask = (id: string, newName: string) => {
    const editedTasks = tasks.map(task => {
      return id === task.id
            ? {...task, name: newName}
            : task;
    })
    setTasks(editedTasks);
  }

  /** {...task} short handed for <Todo id={task.id} name={task.name} completed={task.completed} /> */
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo 
        {...task} 
        key={task.id} 
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
  ))

  const filterList = FILTER_NAMES.map((name: string) => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))
  
  return (
    <React.StrictMode>
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask}/>

        <div className="filters btn-group stack-exception">
          {filterList}
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