import React from "react";
import MetaTags from "react-meta-tags";
import "./App.css";
import Handlare from "./Handlare";
import Kund from "./Kund";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./Components/Order";
import Hem from "./Components/Hem";
import Kassa from "./Kassa";
import NavigationBar from "./Components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";

//Main App function that handles routing between pages.
function App() {
  return (
    //Here we use routing instead of Go/Ridir to switch between pages. So functions below are unused.
    <div className="App">
      <NavigationBar />
      <Router>
        <Route path="/handlare" exact component={Handlare} />
        <Route path="/kund" exact component={Kund} />
        <Route path="/handlare/order/:id" component={Order} />
        <Route path="/kassa" component={Kassa} />
        <Route path="/" exact component={Hem} />
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
