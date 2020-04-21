import React from 'react';
import HelloWorld from './HelloWorld';
import Square from './Square';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Square name="Max" />
      <Square name="William" />
      <Square name="Gman" />
      <Square name="Schmag" />
    </div>
  );
}

export default App;