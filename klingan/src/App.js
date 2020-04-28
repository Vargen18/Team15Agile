import React from "react";
import MetaTags from "react-meta-tags";
import HelloWorld from "./HelloWorld";
import Square from "./Square";
import "./App.css";
import ReactDOM from "react-dom";
import Handlare from "./Handlare";
import Kund from "./Kund";

function App() {
  return (
    <div class="wrapper">
      <MetaTags>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        ></link>
      </MetaTags>

      <div className="App">
        <h1>Affärens Sida</h1>
        
        <HelloWorld />
        {GoToHandlare()}
        {GoToKund()}
      </div>
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

export default App;
