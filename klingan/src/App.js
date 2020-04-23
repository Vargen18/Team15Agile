import React from "react";
import HelloWorld from "./HelloWorld";
import "./App.css";
import Order from "./Components/Order";

function App() {
  const products = [
    { id: 0, name: "Potatis" },
    { id: 1, name: "Lösgodis" },
    { id: 2, name: "Frysta grönsaker" },
  ];
  const customer = { name: "Börje", mail: "börje@mail.com", telefon: "031" };
  return (
    <div className="App">
      <h1>Affärens Sida</h1>
      <HelloWorld />
      <Order CustomerInformation={customer} ProductList={products} />
    </div>
  );
}

export default App;
