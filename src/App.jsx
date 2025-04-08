import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import { useState, useEffect } from 'react';
import './App.css'
import Todo from './Todo';
import NewTodo from './NewTodo';
import ajax from './AJAXcalls' // changed this to be called ajax instead of getTodos. Why? Look at AJAXCalls.js and see that the export function defines everything as one object
// ajax is an arbitrary name, can call it anything but cannot import the AJAXCalls.js file on its own

function App() {
  // App.jsx

  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('Ascending');


  useEffect(() => { // this is the useEffect hook, it runs when the component starts or gets rendered
    async function fetchTodos() { // define a function to fetch the todos. Why? react rule where can't call an async function directly in useEffect
      const resultData = await ajax.getTodos(); // call getTodo function in the AJAXCalls file
      setTodos(resultData); // sets a list of todos to todos state variable. 
    }


    fetchTodos(); // call the function defined above
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

  // Need id of the todo that I want to delete as a variable
  const remainingTodos = todos.filter((todo) => {

    // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo I want to delete, keep it
    if (todo.id !== id) {
      return todo;
    }
    setTodos(remainingTodos);
  });

  // Update state with filtered list using setTodos(remainingTodos);

  return (
    <>
      <NewTodo addTodo={addTodo} />

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

      {todos.map((todo) =>
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} completeToDo={completeToDo} deleteToDo={deleteToDo} />
        </div>
      )}

      {/* 
      {todos.map((todo) =>
        <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} completeToDo={completeToDo} deleteToDo={deleteToDo} />
      )}

*/}
    </>
  )
}

export default App
