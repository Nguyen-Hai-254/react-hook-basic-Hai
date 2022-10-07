import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';

function App() {

  let [name, setName] = useState("Hai");
  let [nameSubmit, setNameSubmit] = useState('');
  let [todo, setTodo] = useState([
    { id: 'todo1', title: 'Playing game', type: 'Hai' },
    { id: 'todo2', title: 'Doing homework', type: 'Hai' },
    { id: 'todo3', title: 'Eating honey', type: 'Thuy' }
  ])

  const handleInputChange = (e) => {
    setNameSubmit(e.target.value);
  }

  const handleEventClick = () => {
    setName(nameSubmit);
  }

  const handleInputAddTodoChange = (e) => {
    setNameSubmit(e.target.value);
  }

  const handleAddTodo = () => {
    if (!nameSubmit) {
      alert('Empty Input');
      return;
    }
    let n = todo.length;
    let newTodo = { id: 'todo' + (n + 1), title: nameSubmit, type: 'Hai' };

    setTodo(
      [...todo, newTodo]
    );

    setNameSubmit('')
  }

  const deteleDataTodo = (id) => {
    let currentTodo = todo;
    currentTodo = currentTodo.filter(item => item.id !== id);
    setTodo(currentTodo);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Waring!!! Hello {name}
        </p>
        <input type="text" onChange={(e) => handleInputChange(e)} />
        <button onClick={() => handleEventClick()}>Click me</button>
        <Todo
          todo={todo}
          title={'All Todo'}
          deteleDataTodo={deteleDataTodo}
        />

        <Todo
          todo={todo.filter(item => item.type === 'Hai')}
          title={'Hai'}
          deteleDataTodo={deteleDataTodo}
        />

        <input type="text" value={nameSubmit} onChange={(e) => handleInputAddTodoChange(e)} />
        <button onClick={() => handleAddTodo()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
