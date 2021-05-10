import React, {useState} from 'react';

interface Props {
  id: string;
  name: string;
  completed: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
}

const Todo:React.FC<Props> = (props) => {
  const { id, name, completed, toggleTaskCompleted, deleteTask, editTask } = props;
  // console.log('in Todo', props)

  const [isEditing, setEditing] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newName) {
      alert('Please fill out new task name');
      return;
    }

    editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  function handleChnage(e: React.ChangeEvent<HTMLInputElement>) {
    // setNewName(e.target.value)
    setNewName(e.currentTarget.value)
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input 
          id={id} 
          className="todo-text" 
          type="text" 
          onChange={handleChnage}
        />
      </div>

      <div className="btn-group">
        <button 
          type="button" 
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
          <input
            id={id}
            type="checkbox"
            defaultChecked={completed}
            onChange={() => toggleTaskCompleted(id)}
          />
          <label className="todo-label" htmlFor={id}>
            {name}
          </label>
        </div>
        <div className="btn-group">
          <button 
            type="button" 
            className="btn"
            onClick={() => setEditing(true)}
          >
            Edit <span className="visually-hidden">{name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => deleteTask(id)}
          >
            Delete <span className="visually-hidden">{name}</span>
          </button>
        </div>
    </div>
  );

  return (
    <li className="todo">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  )
}

export default Todo;