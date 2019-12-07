import React from 'react';
import './App.css';
import ShapesContainer from './Containers/ShapesContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShapesContainer />
    </div>
  );
}

export default App;
