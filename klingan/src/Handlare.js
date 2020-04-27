import React from "react";
import HelloWorld from "./HelloWorld";
import Square from "./Square";
import "./App.css";
import "./Handlare.css";
import ReactDOM from "react-dom";
import Kund from "./Kund";
import Product from "./Product";
import Order from "./Components/Order";
import * as db from "./database/Database";
import App from "./App";

function Handlare() {
  return (
    <div className="Handlare">
      {GoToKund()}
      {GoHome()}
      <h1>Handlare</h1>
      {ShowOrder()}
    </div>
  );
}

function ShowOrder() {
  return <Order customer={db.getCustomer()} productList={db.getProducts()} />;
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

export default Handlare;
