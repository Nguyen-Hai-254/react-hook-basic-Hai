import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';

function App() {

  let [name, setName] = useState("Hai");
  let [nameSubmit, setNameSubmit] = useState('');
  let [todo, setTodo] = useState([
    { id: 'todo1', title: 'Playing game' },
    { id: 'todo2', title: 'Doing homework' },
    { id: 'todo3', title: 'Eating honey' }
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
    if (!nameSubmit)
    {
      alert('Empty Input');
      return;
    }
    let n = todo.length;
    let newTodo = {id: 'todo' + (n + 1), title: nameSubmit};

    setTodo(
      [...todo, newTodo]
    );

    setNameSubmit('')
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

        <div className='todoContainer'>
          {todo &&
            todo.map((todo, index) => {
              return (
                <li className="todoChild" key={todo.id}> {todo.title} </li>
              )
            })
          }
        </div>
        <input type="text" value={nameSubmit} onChange={(e) => handleInputAddTodoChange(e)} />
        <button onClick={() => handleAddTodo()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
