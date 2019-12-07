import React from 'react';
import './App.css';
import ShapesContainer from './Containers/ShapesContainer';
import Navbar from './Components/Navbar';
import ColorPalette from './Components/ColorPalette';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ColorPalette />
      <ShapesContainer />
    </div>
  );
}

export default App;
