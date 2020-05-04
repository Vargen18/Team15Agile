import React from "react";
import "./App.css";
import "./Kund.css";
import Product from "./Product";

function Kund() {
  return (
    <div className="Kund">
      <a href="/handlare">Gå till Handlare</a>
      <h1>Kund</h1>
      {ShowProduct()}
    </div>
  );
}

function ShowProduct() {
  return (
    <div class="container">
      <Product
        name="Milk"
        url="https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg"
      />
      <Product
        name="Yoghurt"
        url="https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg"
      />
      <Product
        name="Nocco"
        url="https://www.tingstad.com/fixed/images/Main/1570702879/21366260.png"
      />
    </div>
  );
}

export default Kund;
