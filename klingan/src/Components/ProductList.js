import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <div>
      <Product name="Potatis" />
      <Product name="Lösgodis" />
      <Product name="Frysta Grönsaker" />
    </div>
  );
}

export default ProductList;
