import React from "react";
import MetaTags from "react-meta-tags";
import "./App.css";
import Handlare from "./Handlare";
import Kund from "./Kund";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./Components/Order";
import Hem from "./Components/Hem";

//Main App function that handles routing between pages.
function App() {
  return (
    //Here we use routing instead of Go/Ridir to switch between pages. So functions below are unused.
    <div class="wrapper">
      <h1>Affärens Sida</h1>
    <Router>
      <div className="App">
        <Route path="/handlare" exact component={Handlare} />
        <Route path="/kund" exact component={Kund} />
        <Route path="/handlare/order/:id" component={Order} />
        <Route path="/" exact component={Hem} />
      </div>
    </Router>
    
      <MetaTags>
        <title>ICA Klingan</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        ></link>
      </MetaTags>
    </div>
        
  );
}
export default App;
