import React from "react";
import HelloWorld from "./HelloWorld";
import Square from "./Square";
import "./App.css";
import "./Kund.css";
import ReactDOM from "react-dom";
import Handlare from "./Handlare";
import Product from "./Product";
import ShowProducts from "./Components/ShowProducts";
import * as db from "./database/Database";
import App from "./App";

function Kund() {
  return (
    <div className="Kund">
      {/* <a href="/handlare">Gå till Handlare</a> */}
      <h1>Kund</h1>
      {ShowProduct()}
    </div>
  );
}

function ShowProduct() {
  return <ShowProducts productList={db.getProducts()} />;
}

function GoToHandlare() {
  return <button onClick={redirectToHandlare}>Handlare</button>;
}

function redirectToHandlare() {
  ReactDOM.render(<Handlare />, document.getElementById("root"));
}

function GoHome() {
  return <button onClick={redirectHome}>Hem</button>;
}

function redirectHome() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

export default Kund;
