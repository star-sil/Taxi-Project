import React, {useState, useEffect} from 'react';
import './App.css';
import Mainscreen from './MainScreen.js';
function App () {
  return (
    <div className="App">
      {Mainscreen()}
    </div>
  )
}

export default App;