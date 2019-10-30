import React from 'react';
import './App.css';
import MontrealMap from './components/Map.js';

function App() {
  return (
    <div className="App">
      <div id="mapid">
        <MontrealMap />
      </div>
      <div className="footer">
        <a className="App-link" href="https://github.com/dolliars" target="_blank" rel="noopener noreferrer">
          Github of me
        </a>
      </div>
    </div>
  );
}

export default App;
