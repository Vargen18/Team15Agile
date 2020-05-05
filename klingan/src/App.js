import React from "react";
import HelloWorld from "./HelloWorld";
import Square from "./Square";
import "./App.css";
import ReactDOM from "react-dom";
import Handlare from "./Handlare";
import Kund from "./Kund";

function App() {
  return (
    <div className="App">
      <h1>Affärens Sida</h1>
      <HelloWorld />
      {GoToHandlare()}
      {GoToKund()}
    </div>
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

function GoHome() {
  return <button onClick={redirectHome}>Hem</button>;
}

function redirectHome() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

export default App;
