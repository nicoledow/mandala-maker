import React from 'react';
import './App.css';
import Canvas from './Containers/Canvas';
import Navbar from './Components/Navbar';
import Toolbar from './Components/Toolbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Canvas />
      <Toolbar />
    </div>
  );
}

export default App;
