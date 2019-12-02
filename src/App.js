import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberTiles from './components/NumberTiles';
import HonorTiles from './components/HonorTiles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NumberTiles />
        <NumberTiles kind = "Bamboo" />
        <NumberTiles kind = "Dot" />
        <HonorTiles />
        <HonorTiles kind = "Dragon" />

      </header>
    </div>
  );
}

export default App;
