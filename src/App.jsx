import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import { useState, useEffect } from 'react';
import './App.css'
import Todo from './Todo';
import NewTodo from './NewTodo';

function App() {
  // App.jsx

  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('Ascending');

  useEffect(() => {

    //ajax stuff
    setTodos(resultData); //resultData needs to be the array returned by the API

  }, []);

  function addTodo(e) {
    //ajax stuff
    let newTodos = [result.data, ...todos];
    setTodos(newTodos);
  }


  function completeToDo() {

  }

  function sortTimeStamp() {
    todos.sort((a, b) => {
      if (order === 'ascending') {
        return new Date(a.created_at) - new Date(b.created_at);
      } else {
        return new Date(b.created_at) - new Date(a.created_at);
      }
    });
  }

  function sortAlphabetically() {
    todos.sort((a, b) => {
      if (order === 'ascending') {
        return a.text.localeCompare(b.text);
      } else {
        return b.text.localeCompare(a.text);
      }
    });
  }

  function sortCompletion() {
    todos.sort((a, b) => {
      if (order === 'ascending') {
        return (b.completed - a.completed);
      } else {
        return (a.completed - b.completed);
      }
    });
  }

  function changeSortOrder(e) {
    setOrder(e.target.value)
  }

  // You need the id of the todo you want to delete as a variable.
  const remainingTodos = todos.filter((todo) => {
    // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
    if (todo.id !== id) {
      return todo;
    }
  });
  // Update state with filtered list using setTodos(remainingTodos);
  setTodos(remainingTodos);

  return (
    <>
      <NewTodo addTodo={addTodo} other={stuff} goes={here} />

      <button onClick={sortTimeStamp}> sortTimeStamp </button>
      <button onClick={sortAlphabetically}> sortAlphabetically </button>
      <button onClick={sortCompletion}> sortCompletion </button>
      <select onChange={changeSortOrder} value={order} >
        <option value="ascending">
          ascending
        </option>
        <option value="descending">
          descending
        </option>
      </select>

      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todos.map((todo) =>
          <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} completeToDo={completeToDo} deleteToDo={deleteToDo} />
        )}
      </div>

{/* 
      {todos.map((todo) =>
        <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} completeToDo={completeToDo} deleteToDo={deleteToDo} />
      )}

*/}
    </>
  )
}

export default App
