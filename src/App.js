import React from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonComponent from './COMPONETS/ButtonComponent'
import ImageComponent from './COMPONETS/ImageComponent'
import Navbar from './COMPONETS/NavBar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <ButtonComponent text="Cliccami!" />
        <img src={logo} className="App-logo" alt="logo" />
        <ImageComponent src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="logo html 5" height="200px" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
