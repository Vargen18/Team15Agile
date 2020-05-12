import React from "react";
import "./App.css";
import "./Handlare.css";
import * as db from "./database/Database";
import OrderList from "./Components/OrderList";

//Function that is used for rendering the "Affär sida".
function Handlare() {
  return (
    <div className="Handlare">
      {/* <a href="/kund">Gå till Kund</a> */}
      <h1>Handlare</h1>
      <OrderList orders={db.getOrders()} />
      {ShowCart()}
    </div>
  );
}

function ShowCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    return null;
  } else {
    return (
      <div>
        <h3>Kundens beställning:</h3>
        {cart.map((cart) => (
          <li>
            <div>
              {cart.name}, {cart.units}
            </div>
          </li>
        ))}
      </div>
    );
  }
}

export default Handlare;
