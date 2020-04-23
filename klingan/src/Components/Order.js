import React from "react";
import CustomerInfromation from "./CustomerInformation";
import ProductList from "./ProductList";

function Order(props) {
  const products = [
    { id: 0, name: "Potatis" },
    { id: 1, name: "Lösgodis" },
    { id: 2, name: "Frysta grönsaker" },
  ];

  return (
    <div>
      <CustomerInfromation />
      <ProductList products={products} />
    </div>
  );
}

export default Order;
