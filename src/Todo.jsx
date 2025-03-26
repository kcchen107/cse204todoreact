import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import wustlLogo from './assets/wustl.svg';
import './Todo.css';

// below the props are id, text, completed, completedToDo, deleteToDo
function Todo({ id, text, completed, completeToDo, deleteToDo }) {
  return (
    <>


      <li>

        <div className="todo" id={id}>
          {text}
          <div className='toDoButtons'>

            {/* html for deleteToDo */}

            <button id="delete" onClick={() => deleteToDo(id)}>
              delete
            </button>

            {/* html for completeToDo */}
            <input
              type="checkbox"
              id={`complete-${id}`}
              checked={completed}
              onChange={() => completeToDo(id, { completed: !completed })}
            />


          </div>
        </div>

      </li>
    </>
  );
}


export default Todo;
