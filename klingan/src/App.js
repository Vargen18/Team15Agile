import React from "react";
import "./App.css";
import Handlare from "./Handlare";
import Kund from "./Kund";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./Components/Order";
import Hem from "./Components/Hem";

function App() {
  return (
    //Here we use routing instead of Go/Ridir to switch between pages. So functions below are unused.
    <Router>
      <div className="App">
        <Route path="/handlare" exact component={Handlare} />
        <Route path="/kund" exact component={Kund} />
        <Route path="/handlare/order/:id" component={Order} />
        <Route path="/" exact component={Hem} />
      </div>
    </Router>
  );
}
export default App;
