import React from "react";
import HelloWorld from "./HelloWorld";
import "./App.css";
import Order from "./Components/Order";

function App() {
  return (
    <div className="App">
      <h1>Affärens Sida</h1>
      <HelloWorld />
      <Order />
    </div>
  );
}

export default App;
