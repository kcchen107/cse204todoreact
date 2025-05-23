import { useState, useEffect } from 'react';
import './App.css'
import Todo from './Todo';
import NewTodo from './NewTodo';
import ajax from './AJAXcalls' // changed this to be called ajax instead of getTodos. Why? Look at AJAXCalls.js and see that the export function defines everything as one object
// ajax is an arbitrary name, can call it anything but cannot import the AJAXCalls.js file on its own

function App() {
  // App.jsx

  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('ascending');


  useEffect(() => { // this is the useEffect hook, it runs when the component starts or gets rendered
    async function fetchTodos() { // define a function to fetch the todos. Why? react rule where can't call an async function directly in useEffect
      const resultData = await ajax.getTodos(); // call getTodo function in the AJAXCalls file
      setTodos(resultData); // sets a list of todos to todos state variable. 
    }


    fetchTodos(); // call the function defined above
  }, []);

  async function addTodo(text) {
    try {
      const result = await ajax.handleAddTodo({ text, completed: false });
      console.log(result)
      let newTodos = [result, ...todos];
      console.log("printing after add todo");
      console.log(result);
      console.log(newTodos);
      setTodos(newTodos);
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  }

  async function completeToDo(id, isCompleted) {
    console.log("hey its completed")
    const result = await ajax.handleCheckboxChange(id, isCompleted);
    console.log(result)
    // below if loop updates the old todo with the new todo state (complete false -> completed true)
    const newTodos = todos.map(todo => {
      if (todo.id === result.id) {
        return result;
      }
      return todo;
    })
    setTodos(newTodos);
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

  // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo I want to delete, keep it

  async function deleteToDo(id) {
    const result = await ajax.deleteTodo(id);
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
    console.log("to do delete button");
  }


  // Update state with filtered list using setTodos(remainingTodos);

  return (
    <>
      <NewTodo addTodo={addTodo} />

      <div id="sortingLine">
        <button id="buttomTimeStamp" onClick={sortTimeStamp}> sortTimeStamp </button>
        <button id="buttonAlphabet" onClick={sortAlphabetically}> sortAlphabetically </button>
        <button id="buttonCompletion" onClick={sortCompletion}> sortCompletion </button>
        <select id="selectButton" onChange={changeSortOrder} value={order} >
          <option value="ascending">
            ascending
          </option>
          <option value="descending">
            descending
          </option>
        </select>
      </div>

      <div id="todo-list">
        {todos.map((todo) =>
          <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeToDo={() => completeToDo(todo.id, todo.completed)}
              deleteToDo={deleteToDo} />
          </div>
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
