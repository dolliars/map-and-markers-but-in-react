import React from 'react';
import './App.css';
import MontrealMap from './components/Map.js';
import Comments from './components/Comments.js';

function App() {
  return (
    <div className="App">
      <div id="mapid">
        <MontrealMap />
      </div>
    </div>
  );
}

export default App;
