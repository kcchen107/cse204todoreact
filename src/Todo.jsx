import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import wustlLogo from './assets/wustl.svg';
import './Todo.css';

// below the props are id, text, complete, completeToDo, deleteToDo
function Todo({ id, text, complete, completeToDo, deleteToDo }) {
  return (
    <>


      <li>

        <div className="todo" id={id}>
          {text}
          <div className='toDoButtons'>

            {/* html for deleteToD0 */}

            <button id="delete" onClick={() => deleteToDo(id)}>
              delete
            </button>

            {/* html for completeToDo */}
            <input
              type="checkbox"
              id={`complete-${id}`}
              checked={complete}
              onChange={() => completeToDo(id, { complete: !complete })}
            />


          </div>
        </div>

      </li>
    </>
  );
}


export default Todo;
