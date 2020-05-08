import React from "react";
import "./App.css";
import "./Handlare.css";
import * as db from "./database/Database";
import OrderList from "./Components/OrderList";

//Function that is used for rendering the "Affär sida".
function Handlare() {
  return (
    <div className="Handlare">
      <a href="/kund">Gå till Kund</a>
      <h1>Handlare</h1>
      {ShowOrders()}
    </div>
  );
}

function ShowOrders() {
  return <OrderList orders={db.getOrders()} />;
}

export default Handlare;
