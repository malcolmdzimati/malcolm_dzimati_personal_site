import TodoList from './TodoList';
import React from 'react';

function App() {
    const [todos, setToDos] = useState();
    return ( 
        <>
          <TodoList todos={todos}/>
          <input type='text'></input>
          <button>Add To Do</button>
          <button>Clear To Do</button>
          <div>0 Left Items to do</div>
        </> 
    )
}

export default App;