import React from "react";
import "./App.css";
import "./Handlare.css";
import * as db from "./database/Database";
import OrderList from "./Components/OrderList";

//Function that is used for rendering the "Affär sida".
function Handlare() {
  return (
    <div className="Handlare">
      <h1>Handlare</h1>
      <OrderList orders={db.getOrders()} />
    </div>
  );
}

export default Handlare;
