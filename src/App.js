import TodoList from './TodoList';
import React from 'react';

function App() {
    return ( 
        <>
          <TodoList />
          <input type='text'></input>
          <button>Add To Do</button>
          <button>Clear To Do</button>
          <div>0 Left Items to do</div>
        </> 
    )
}

export default App;