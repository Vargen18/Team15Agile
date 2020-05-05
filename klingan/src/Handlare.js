import React from "react";
import "./App.css";
import "./Handlare.css";
import * as db from "./database/Database";
import OrderList from "./Components/OrderList";

function Handlare() {
  return (
    <div className="Handlare">
      <a href="/kund">Gå till Kund</a>
      <h1>Handlare</h1>
      <OrderList orders={db.getOrders()} />;
    </div>
  );
}

export default Handlare;
