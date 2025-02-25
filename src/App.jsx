import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './App.css'
import Todo from './Todo';
import NewTodo from './NewTodo';


function App() {

  return (
    <>

      <NewTodo/>
      <Todo id="123" text="test"/>

    </>
  )
}

export default App
