import React from 'react';
import HelloWorld from './HelloWorld';
import Square from './Square';
import './App.css';
import ReactDOM from 'react-dom'
import Handlare from './Handlare'
import Kund from './Kund'

function App() {

  return (
    <div className="App">
      <HelloWorld />
    
      {GoToHandlare()}
      {GoToKund()}
      <Square name="Max" />
      <Square name="William" />
      <Square name="Gman" />
      <Square name="Schmag" />
    </div>
  );
}

function GoToHandlare(){
  return <button onClick={redirectToHandlare}>Handlare</button>
}

function redirectToHandlare(){
  ReactDOM.render(
    <Handlare/>,
    document.getElementById('root')
  );
}

function GoToKund(){
  return <button onClick={redirectToKund}>Kund</button>
}

function redirectToKund(){
  ReactDOM.render(
    <Kund/>,
    document.getElementById('root')
  );
}

export default App;