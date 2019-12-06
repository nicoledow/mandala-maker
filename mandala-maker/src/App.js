import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Containers/Canvas';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Canvas />
    </div>
  );
}

export default App;
