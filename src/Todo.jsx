import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import wustlLogo from './assets/wustl.svg';
import './Todo.css';

function Todo() {
  return (
    <>
      <div id="todo-whole">


        <div className="secondportion">
          <section id="list-section">
            <ul id="todo-list">
              <li id="48cefd60-ba21-11ef-9790-9f33c5b8957f" className="todo">
                looking<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="444be2e0-ba21-11ef-97e3-13b671ac0565" className="todo">
                sam tihen<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="10113740-b993-11ef-8ae3-d55efc5ceec0" className="todo">
                headphones<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="390e61c0-b990-11ef-9419-2725b3553b01" className="todo">
                fun recipe books<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="346e23c0-b990-11ef-9f24-cf69c9ecb119" className="todo">
                cool sneakers<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="05a8a270-b98f-11ef-9838-c38a4ef45035" className="todo">
                snacks<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="87858130-b98e-11ef-a97d-dd4d6b6e93ee" className="todo">
                xmas sweater<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="80ee85d0-b98e-11ef-b3bf-5f96bc6cb493" className="todo">
                face mask<input type="checkbox" /> <button>delete</button>
              </li>
              <li id="7d630520-b98e-11ef-ad49-dfb34c00eee6" className="todo">
                books<input type="checkbox" /> <button>delete</button>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Todo;
