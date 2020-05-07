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
      {ShowCart()}
      {ShowOrders()}
    </div>
  );
}

function ShowCart() {
  const res = JSON.stringify(localStorage.getItem('cart'));
  return res;
}

function ShowOrders() {
  return <OrderList orders={db.getOrders()} />;
}

export default Handlare;
