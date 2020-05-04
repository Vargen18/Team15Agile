import React from "react";
import HelloWorld from "./HelloWorld";
import Square from "./Square";
import "./App.css";
import ReactDOM from "react-dom";
import Handlare from "./Handlare";
import Kund from "./Kund";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./Components/Order";

function App() {
  return (
    //Here we use routing instead of Go/Ridir to switch between pages. So functions below are unused.
    <Router>
      <div className="App">
        <Route path="/handlare" exact component={Handlare} />
        <Route path="/kund" exact component={Kund} />
        <Route path="/handlare/order/:id" component={Order} />
      </div>
    </Router>
    // <div className="App">
    //   <h1>Affärens Sida</h1>
    //   <HelloWorld />
    //   {GoToHandlare()}
    //   {GoToKund()}
    // </div>
  );
}

function GoToHandlare() {
  return <button onClick={redirectToHandlare}>Handlare</button>;
}

function redirectToHandlare() {
  ReactDOM.render(<Handlare />, document.getElementById("root"));
}

function GoToKund() {
  return <button onClick={redirectToKund}>Kund</button>;
}

function redirectToKund() {
  ReactDOM.render(<Kund />, document.getElementById("root"));
}

export default App;
