import React from "react";
import HelloWorld from "./HelloWorld";
import "./App.css";
import Order from "./Components/Order";
import * as db from "./database/Database";

function App() {
  const products = db.getProducts();
  const customer = db.getCustomer();
  return (
    <div className="App">
      <h1>Affärens Sida</h1>
      <HelloWorld />
      <Order customer={customer} productList={products} />
    </div>
  );
}

export default App;
