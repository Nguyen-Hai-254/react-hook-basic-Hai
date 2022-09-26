import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {

  let [name, setName] = useState("Hai")
  let [nameSubmit, setNameSubmit] = useState('')

  const handleInputChange = (e) => {
    setNameSubmit(e.target.value);
  }

  const handleEventClick = () => {
    setName(nameSubmit);
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
      </header>
    </div>
  );
}

export default App;
