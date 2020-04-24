import React from 'react';
import HelloWorld from './HelloWorld';
import Square from './Square';
import './App.css';
import ReactDOM from 'react-dom'
import Handlare from './Handlare'
import Kund from './Kund'
import Order from "./Components/Order";
import * as db from "./database/Database";

function App() {

  return (
    <div className="App">
      <h1>Affärens Sida</h1>
      <HelloWorld />
      {GoToHandlare()}
      {GoToKund()}
      <Order customer={db.getCustomer()} productList={db.getProducts()} />
    </div>
  );
}

function GoToHandlare() {
  return <button onClick={redirectToHandlare}>Handlare</button>
}

function redirectToHandlare() {
  ReactDOM.render(
    <Handlare />,
    document.getElementById('root')
  );
}

function GoToKund() {
  return <button onClick={redirectToKund}>Kund</button>
}

function redirectToKund() {
  ReactDOM.render(
    <Kund />,
    document.getElementById('root')
  );
}

export default App;
