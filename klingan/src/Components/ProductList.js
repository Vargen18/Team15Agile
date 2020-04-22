import React from "react";
import Product from "./Product";
import CustomerInfromation from "./CustomerInformation";

function ProductList(props) {
  return (
    <div>
      <CustomerInfromation name="Börge" />
      <Product name="Potatis" />
      <Product name="Lösgodis" />
      <Product name="Frysta Grönsaker" />
    </div>
  );
}

export default ProductList;
