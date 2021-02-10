import React from 'react';
export default function Todo(props) {
  const {id, completed, toggleTaskCompleted, deleteTask} = props;
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input 
          id={id} 
          type="checkbox" 
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor="todo-2">
          {props.name}
        </label>
      </div>

      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Repeat</span>
        </button>
        <button 
          type="button" 
          className="btn btn__danger"
          onClick={() => deleteTask(id)}
        >
          Delete <span className="visually-hidden">Repeat</span>
        </button>
      </div>
    </li>
  )
}