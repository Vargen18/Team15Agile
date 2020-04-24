import React from "react";
import HelloWorld from "./HelloWorld";
import Square from "./Square";
import "./App.css";
import "./Handlare.css"
import ReactDOM from "react-dom";
import Kund from './Kund';
import Product from './Product';

function Handlare() {
  return (
    <div className="Handlare">
      {GoToKund()}
      <h1>Handlare</h1>
      <Product />
    </div>
  );
}

function GoToKund() {
  return <button onClick={redirectToKund}>Kund</button>;
}

function redirectToKund() {
  ReactDOM.render(<Kund />, document.getElementById("root"));
}

export default Handlare;