import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Workspace from './Containers/Workspace';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Workspace />
    </div>
  );
}

export default App;
