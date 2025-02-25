import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import wustlLogo from './assets/wustl.svg';
import './Todo.css';

function Todo({ id, text }) {
  return (
    <>


      <li>

        <div className="todo" id={id}>
          {text}
          <div className='toDoButtons'>
            <input type="checkbox" /> <button>delete</button>
            <input type="checkbox" />

          </div>
        </div>

      </li>
    </>
  );
}

export default Todo;
