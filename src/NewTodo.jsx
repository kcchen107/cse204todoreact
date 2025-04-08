import React, { useState } from "react";
import "./NewTodo.css";

function NewTodo({ addTodo }) {
  const [text, setText] = useState(""); // Track input text

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (text.trim()) {
      addTodo(text); // Pass text back to parent (App)
      setText(""); // Clear input after adding
    }
  };

  return (
    <div id="todo-whole">
      <header>
        <h1>List of Souvenirs To Bring</h1>
      </header>

      <form onSubmit={handleSubmit}> {/* Form uses handleSubmit */}
        <div className="firstpart">
          <section id="todo-inputs">
            <label htmlFor="new-todo" className="sr-only">
              Add new ToDo
            </label>
            <input
              id="new-todo"
              type="text"
              placeholder="Add new ToDo"
              value={text} // Bind input value to state
              onChange={(e) => setText(e.target.value)} // Update state on change
            />
            <button
              id="new-todo-button"
              type="submit" // Button type is submit, triggering form submission
            >
              Add ToDo
            </button>
          </section>
        </div>
      </form>
    </div>
  );
}

export default NewTodo;
