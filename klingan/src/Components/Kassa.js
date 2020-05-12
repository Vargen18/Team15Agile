import React from "react";
import "../App.css";
import "../Handlare.css";
import * as db from "../database/Database";
import OrderList from "../Components/OrderList";


function Kassa() {
    return (
      <div className="Kassa">
        {/* <a href="/kund">Gå till Kund</a> */}
        <h1>Kassa</h1>
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
          <h3>Din beställning:</h3>
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


  
export default Kassa;