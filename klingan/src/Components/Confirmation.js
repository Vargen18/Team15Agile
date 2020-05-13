import React from "react";

//Function that is used for rendering the "Orderbekräftelse sidan".
function Confirmation() {
  return (
    <div className="Handlare">
      <h1>Orderbekräftelse</h1>
      <h3>Vi har mottagit din beställning och du kan nu stänga sidan.</h3>
      <h3>Nedan ser du din följesedel.</h3>
      {ShowCart()}
      {ClearCart()}
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

function ClearCart() {
  const cart = [];
  localStorage.setItem("cart", JSON.stringify(cart))
}

export default Confirmation;
