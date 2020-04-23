import React from "react";
import HelloWorld from "./HelloWorld";
import "./App.css";
import Order from "./Components/Order";
import * as db from "./database/Database";

function App() {
  return (
    <div className="App">
      <h1>Affärens Sida</h1>
      <HelloWorld />
      <Order customer={db.getCustomer()} productList={db.getProducts()} />
    </div>
  );
}

export default App;
