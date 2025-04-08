//Function to delete items is below
async function deleteTodo(todoId) {
    const apiUrl = `https://cse204.work/todos/${todoId}`;
    const apiKey = '6f10fe-3100e4-ad0fd1-e2b9ad-a30298';
    // my unique API Key

    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', 'x-api-key': apiKey
            // above can directly refer to API key just by stating apiKey
        }
    };

    try {
        let response = await fetch(apiUrl, options);
        if (response.ok) {
            console.log(`${todoId} Successfully deleted todo`);
            document.getElementById(todoId).remove();
        } else {
            console.error("Failed to delete todo");
        }
    } catch (error) {
        console.error(error);
    }
}
//Function to delete items ends here


//Below code is to check for completion (what I'll be calling in completeToDo, will update)
async function handleCheckboxChange(todoId, isChecked) {
    const apiUrl = `https://cse204.work/todos/${todoId}`;
    const apiKey = '6f10fe-3100e4-ad0fd1-e2b9ad-a30298';
    //Above is my unique API Key

    let updatedTodo = {
        completed: isChecked
    };

    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', 'x-api-key': apiKey
            //can directly refer to my unique API key by calling apiKey because it is stated previously
        },
        body: JSON.stringify(updatedTodo)
    };

    //below code is for failure or success of todo
    try {
        let response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error("Failed to update todo completion");
        }
        console.log(`${todoId} Successfully updated todo completion`);
    }
    catch (error) {
        console.error(error);
    }
}
//Above code is to check for completion (what I'll be calling in completeToDo, will update)


// start of function handle
async function handleAddTodo() {
    const todoInput = document.getElementById("new-todo");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Enter todo item");
        return
    }

    const newTodo = {
        text: todoText,
        completed: false
    };
    try {
        const response = await fetch('https://cse204.work/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'x-api-key': '6f10fe-3100e4-ad0fd1-e2b9ad-a30298'
                // above is my unique API key
                // keeps my history of what items I add to todo list
            },
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            throw new Error('Failed to add todo item');
        }
        todoInput.value = ' ';
        todoInput.focus();
        getTodos();
    }
    catch (error) {
        console.error('Error adding todo', error);
    }
}
// end of function handle


// start of function for how I'll get todos from API
async function getTodos() {
    const apiUrl = 'https://cse204.work/todos';
    const apiKey = '6f10fe-3100e4-ad0fd1-e2b9ad-a30298';
    // above is my unique API key
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 'x-api-key': apiKey
            // above can directly refer to API key just by stating apiKey

        }
    };

    try {
        let response = await fetch(apiUrl, options);
        let todos = await response.json();
        return todos;
    }

    catch (error) {
        console.error(error);
    }
}
// end of function for how I'll get todos from API


export default {
    deleteTodo,
    handleCheckboxChange,
    handleAddTodo,
    getTodos
}
