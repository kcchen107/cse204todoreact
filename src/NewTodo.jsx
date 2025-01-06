import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import wustlLogo from './assets/wustl.svg';
import './NewTodo.css';

function NewTodo() {
  return (
    <>
      <div id="todo-whole">
        <header>
          <h1>List of Souvenirs To Bring</h1>
        </header>

        <div className="firstpart">
          <section id="todo-inputs">
            <label htmlFor="new-todo" className="sr-only">
              Add new ToDo
            </label>
            <input id="new-todo" type="text" placeholder="Add new ToDo" />
            <button
              id="new-todo-button"
              type="button"
              onClick={() => handleAddTodo()}
            >
              Add ToDo
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default NewTodo;
