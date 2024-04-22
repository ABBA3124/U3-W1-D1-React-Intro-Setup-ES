import React from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonComponent from './COMPONETS/ButtonComponent'
import ImageComponent from './COMPONETS/ImageComponent'
import Navbar from './COMPONETS/NavBar'
import ProductCard from './COMPONETS/ProductCard'


function App() {

  const product = {
    name: "Galaxy Watch 6",
    price: 269.99,
    imageUrl: "https://m.media-amazon.com/images/I/51HrMBjZeKL._AC_UF1000,1000_QL80_.jpg"
  }


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <ButtonComponent text="Cliccami!" />
        <img src={logo} className="App-logo" alt="logo" />
        <ImageComponent src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="logo html 5" height="200px" />
        <div className="product-list">
        <ProductCard product={product} />
      </div>
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

export default App
